import api from "./api";

const apikey = "64757ea405a69c140356a9bb10b0e798";
const hash = "a22daf704e488df06b9a591e5c1f6c9a";

export const getCharacters = (nameStart?: string) => {
  return api
    .get(
      `/characters?ts=1&apikey=${apikey}&hash=${hash}&limit=20&nameStartsWith=${nameStart}`
    )
    .then((res) => {
      return res.data.data.results;
    })
    .catch((err) => console.log("Erro: " + err));
};

export const getComics = (characterId: number) => {
  return api
    .get(
      `/characters/${characterId}/comics?ts=1&apikey=${apikey}&hash=${hash}&limit=10`
    )
    .then((res) => {
      return res.data.data.results;
    })
    .catch((err) => console.log("Erro: " + err));
};
