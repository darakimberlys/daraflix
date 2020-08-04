import config from '../config';

const URL_CATEGORIES = `${config.URL_BACK}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const result = await respostaDoServidor.json();
        return result;
      }

      throw new Error('Não foi possível carregar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const result = await respostaDoServidor.json();
        return result;
      }

      throw new Error('Não foi possível carregar os dados');
    });
}

export default {
  getAllWithVideos,
  getAll,
};