# Use uma imagem base do Node.js
FROM --platform=linux/amd64 node:14.17.0-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie o código fonte para o diretório de trabalho
COPY . .

# Expõe a porta que a aplicação vai ouvir
EXPOSE 3000

# Comando para iniciar a aplicação quando o container for executado
CMD [ "node", "index.js" ]
