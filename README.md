Repositório para armazenamento do código fonte da aplicação desenvolvida no curso NodeJS Starter da Rocketset


**Objetivo:**

Construção de uma API baseada no site www.producthunt.com


**Ferramentas utilizadas:**
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Docker](https://www.docker.com/)
- [Robo 3T](https://robomongo.org/download)


**Iniciando a estrutura do projeto**

$ yarn init -y


Instalando o Express (Servidor Web):

$ yarn add express



Instalando o Nodemon (utilitário para reload de forma automática):

$ yarn add nodemon -D


Configurando o Nodemon:

```
package.json
{
  ...
  "scripts": {
    "dev": "nodemon server.js"
  },
  ...
}
```

Testando o Nodemon:
$ yarn dev



**Baixando e subindo o container docker com o MongoDB:**

baixa a imagem do mongo

$ docker pull mongo



executa o container com o mongodb

$ docker run --name mongodb -p 27017:27017 -d mongo



lista os container em execução

$ docker ps


testando o mongodb:

http://localhost:27017/


a seguinte mensagem deve ser exibida no navegador:

"It looks like you are trying to access MongoDB over HTTP on the native driver port."



**Instalando o mongoose (ORM)**

$ yarn add mongoose


**Paginação de registros**

$ yarn add mongoose-paginate



**Adicionando CORS**

$ yarn add cors



Tudo funcionando!!!