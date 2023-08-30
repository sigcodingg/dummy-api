const express = require("express");
const app = express();
const port = 3000;

// Rota para exibir a imagem
app.get("/", (req, res) => {
  // URL da imagem que será exibida
  const imageUrl =
    "https://img.ifunny.co/images/98573ef8b58ac489663da8b24e0cf023433eb45499363f81e467432cf1e8313a_1.jpg";

  // Gera a tag de imagem e envia para o cliente
  const imageTag = `<img src="${imageUrl}" alt="Imagem">`;
  res.send(imageTag);
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
