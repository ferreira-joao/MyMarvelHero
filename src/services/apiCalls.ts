import api from "./api";

const apikey = "64757ea405a69c140356a9bb10b0e798";
const hash = "a22daf704e488df06b9a591e5c1f6c9a";

export function getCharacters() {
  return api
    .get(`/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20`)
    .then((res) => {
      return res.data.data.results;
    })
    .catch((err) => console.log("Erro: " + err));
}
