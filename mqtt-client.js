const mqtt = require('mqtt');
const client = mqtt.connect({ host: 'localhost', port: 1884 ,encoding: 'binary' });

//Evento disparado quando o cliente se conectar ao broker
client.on('connect',function(){
	client.subscribe('home/teste',function(err){
        
    });	
    //Array de JSON que serão enviados quando o cliente se conectar ao broker
	const objects = [{
		product: '001',
		cliente: '1',
		quantity: '3'
	  },{
		product: '002',
		cliente: '2',
		quantity: '1'
	  },{
		product: '003',
		cliente: '3',
		quantity: '1'
	  }];
	objects.forEach(function(object){
		client.publish('home/teste', JSON.stringify(object));    
	});
   	console.log('conectou');
});

//Evento disparado quando o cliente recebe uma mensagem
client.on('message',async function(topic,message){
	console.log(message.toString());
	const obj = await  JSON.parse(message.toString());
	console.log('Produto:',obj.product);
	console.log('Quantidade:',obj.quantity);
});
