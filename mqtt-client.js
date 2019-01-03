const mqtt = require('mqtt');
const client = mqtt.connect({ host: 'localhost', port: 1884 ,encoding: 'binary' });

//Evento disparado quando o cliente se conectar ao broker
client.on('connect',function(){
	client.subscribe('home/teste',function(err){
        
    });	
    //Array de JSON que serão enviados quando o cliente se conectar ao broker
	var objetos = [{
		produto: '001',
		cliente: '1',
		quantidade: '3'
	  },{
		produto: '002',
		cliente: '2',
		quantidade: '1'
	  },{
		produto: '003',
		cliente: '3',
		quantidade: '1'
	  }];
	for( var i = 0 ; i < objetos.length ; i++){
	  	client.publish('home/teste', JSON.stringify(objetos[i]));    
	}
   	console.log('conectou');
});

//Evento disparado quando o cliente recebe uma mensagem
client.on('message',async function(topic,message){
	console.log(message.toString());
	const obj = await  JSON.parse(message.toString());
	console.log('Produto:',obj.produto);
	console.log('Quantidade:',obj.quantidade);
});
