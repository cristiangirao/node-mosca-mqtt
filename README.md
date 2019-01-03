# node-mosca-mqtt
##Uso do protocolo MQTT para envio de JSON de dados

Quando trabalhamos com algum projeto em IOT(_Internet Of Things_) é bem comum transacionarmos os dados utilizando o formato JSON, principalmente quando os dados devem chegar a uma plataforma WEB.

Depois de procurar por envio e recebimento de JSON com o MOSCA server, vi que existia uma carência de exemplos e explicações por parte da comunidade.

Compartilho aqui um código de envio de um array de objetos JSON para um broker e o recebimento/decodificação dos dados recebidos.

##Uso
É necessário ter o Node.js e o NPM instalado instalado no seu computador.
Depois de clonar o projeto execute o mqtt-server.js em uma instância de terminal e o mqtt-client.js em outra.
Voila, tanto o broker quanto o cliente recebem e decodificam os dados,podendo ser armazenados em um banco de dados.
