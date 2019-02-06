const mqtt = require('mqtt');
const client = mqtt.connect('mqtt://35.231.173.130');


client.on('connect',function(){
	client.subscribe('home/teste',function(err){
        
    });	
	var objetos = [{
		produto: 1,
		cliente: 1,
		quantidade: 3
	  },{
		produto: 2,
		cliente: 2,
		quantidade: 1
	  },{
		produto: 3,
		cliente: 3,
		quantidade: 1
	  }];
	for( var i = 0 ; i < objetos.length ; i++){
	  	client.publish('home/teste', JSON.stringify(objetos[i]));    
	}
   console.log('conectou');
});

client.on('message',async function(topic,message){
	console.log(message.toString());
	const obj = JSON.parse(message.toString());
	console.log('Produto:',obj.produto);
	console.log('Quantidade:',obj.quantidade);
});
