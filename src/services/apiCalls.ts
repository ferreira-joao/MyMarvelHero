import api from "./api";

import md5 from "js-md5";

import { PRIVATE_KEY, PUBLIC_KEY } from "@env";

const hash = md5(`${1}${PRIVATE_KEY}${PUBLIC_KEY}`);

export const getCharacters = (nameStart?: string) => {
  return api
    .get(
      `/characters?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}&limit=20&nameStartsWith=${nameStart}`
    )
    .then((res) => {
      return res.data.data.results;
    })
    .catch((err) => console.log("Erro: " + err));
};

export const getComics = (characterId: number) => {
  return api
    .get(
      `/characters/${characterId}/comics?ts=1&apikey=${PUBLIC_KEY}&hash=${hash}&limit=10`
    )
    .then((res) => {
      return res.data.data.results;
    })
    .catch((err) => console.log("Erro: " + err));
};
