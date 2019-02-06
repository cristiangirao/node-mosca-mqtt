const mosca = require('mosca');
var server = new mosca.Server({ port: 1884} );

server.on('clientConnected', function(client) {
    console.log('Cliente conectado:', client.id);
});

//Evento disparado quando um cliente envia uma mensagem
server.on('published', async function(packet) {
  try{
    if( JSON.parse(packet.payload.toString('utf8')).hasOwnProperty('produto') ){
      var obj = await JSON.parse(packet.payload.toString('utf8'));
      console.log('Produto: ',obj.produto);
      console.log('Quantidade: ',obj.quantidade);
    }else{
    	console.log('Mensagem recebida:',packet.payload.toString('utf8'));
    }
  }catch(e){
    console.log(packet.payload.toString());
  }
});

//Evento disparado no momento em que o broker/server fica online
server.on('ready', function(){
  console.log('Servidor Funcionando');
});
