import axios from 'axios'

const URL_BASE_MARVEL = 'https://gateway.marvel.com/v1/public/'
const API_KEY = '0d8869838ea5df0ea2236a87f7abdfdd'
const TS = '1582764866'
const HASH = '89c3da65a5bdcadcc618084880a7d92a'

export default {
  getAllCharacteres: (limit, callback) => {
    const URL_CHARACTERS = `${URL_BASE_MARVEL}characters?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&limit=${limit}`
    axios.get(URL_CHARACTERS).then(characters => {
      if (callback) {
        callback(characters)
      }
    })
  },
  getCharacterByID: (characterID, callback) => {
    const URL_CHARACTER_BY_ID = `${URL_BASE_MARVEL}characters/${characterID}?apikey=${API_KEY}&ts=${TS}&hash=${HASH}`
    axios.get(URL_CHARACTER_BY_ID).then(character => {
      if (callback) {
        callback(character)
      }
    })
  },
  searchCharacter: (name, callback) => {
    const URL_SEARCH_CHARACTER = `${URL_BASE_MARVEL}characters?ts=${TS}&apikey=${API_KEY}&hash=${HASH}&name=${name}`
    axios.get(URL_SEARCH_CHARACTER).then(character => {
      if (callback) {
        callback(character)
      }
    })
  },
  searchComics: (title,callback) =>{
      const URL_SEARCH_COMICS =`${URL_BASE_MARVEL}comics?title=${title}&apikey=${API_KEY}&hash=${HASH}&ts=${TS}`
      axios.get(URL_SEARCH_COMICS).then(character =>{
          if (callback){
              callback(character)
          }
      })
  }
}
