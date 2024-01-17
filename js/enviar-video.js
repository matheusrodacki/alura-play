import { connectApi } from "./api.js";

const form = document.querySelector("[data-formulario]");

async function criarVideo(event) {
  try {
    event.preventDefault();
    const titulo = document.querySelector("[data-titulo]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const url = document.querySelector("[data-url]").value;
    const descricao =
      Math.floor(Math.random() * 10).toString() + " mil vizualizações";

    const video = {
      titulo,
      descricao,
      url,
      imagem,
    };
    await connectApi.postVideo(video);
    window.location.href = "../pages/envio-concluido.html";
  } catch (e) {
    alert(e);
  }
}

form.addEventListener("submit", (event) => {
  criarVideo(event);
});
