# node-mosca-mqtt
## Uso do protocolo MQTT para envio de JSON de dados

Quando trabalhamos com algum projeto em IOT(_Internet Of Things_) é bem comum transacionarmos os dados utilizando o formato JSON, principalmente quando os dados devem chegar a uma plataforma WEB.

Depois de procurar por envio e recebimento de JSON com o MOSCA server, vi que existia uma carência de exemplos e explicações por parte da comunidade e resolvi compartilhar o código que fiz. 
Quando um cliente envia uma mensagem ao broker,ele na verdade "recebe" três mensagens distintas, onde uma delas é a mensagem enviada pelo cliente. Se tentarmos transformar todo o packet recebido em JSON obteremos um erro de _cast_. O exemplo que deixo aqui verifica os dados recebidos e lê apenas o objeto que contém os dados que eu quero. No meu caso, uso de exemplo um array JSON onde cada um contém um campo "produto" na sua composição. Caso os dados que você necessita enviar possuam outros campos na sua composição, mude o trecho de código abaixo de acordo com suas necessidade e assim o broker poderá lê-lo:
```javascript
if(JSON.parse(packet.payload.toString('utf8')).hasOwnProperty('produto')){
      var obj = await JSON.parse(packet.payload.toString('utf8'));
      console.log('Produto: '+obj.produto);
      console.log('Quantidade: '+obj.quantidade);
}
```

Compartilho aqui um código de envio de um array de objetos JSON para um broker e o recebimento/decodificação dos dados recebidos.

## Uso
É necessário ter o Node.js e o NPM instalados no seu computador.
Depois de clonar o projeto, execute o mqtt-server.js em uma instância de terminal e o mqtt-client.js em outra.
Voila, tanto o broker quanto o cliente recebem e decodificam os dados,podendo ser armazenados em um banco de dados.
