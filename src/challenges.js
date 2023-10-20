const menu = require('./mcDonalds');
const guestsDatabase = require('./data.json');

// =================================================
// PARTE 1
// =================================================

// Requisito 1 - Crie uma função que divida uma frase
const frase = 'testando espaçamento da função split setence';

function splitSentence(setence) {
  return setence.split(' ');
}

// console.log(splitSentence(frase));

// Requisito 2 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

let footballPoints = (wins, ties) => {
  let total = wins * 3 + ties * 1;
  return total;
};
// console.log(footballPoints(2, 1));

// Requisito 3 - Crie uma função que adiciona músicas em uma playlist

let playlist = [];

let addMusics = (artistName, musicName, musicTime) => {
  const add = { artist: artistName, music: musicName, musicTime };
  playlist.push(add);
};
addMusics('Survivor', 'Eye of the Tiger', 2.62);
addMusics('Roy Orbison', 'Pretty Woman', 2.73);
// console.log(playlist);

// =================================================
// PARTE 2
// =================================================

// Requisito 4 - Crie uma função que retorna o produto mais caro de acordo com uma categoria

const moreExpensive = (data, category) => {
  let productName = data[category][0].name;
  let productPrice = data[category][0].price;

  for (let index = 1; index < data[category].length; index += 1) {
    if (data[category][index].price > productPrice) {
      productName = data[category][index].name;
      productPrice = data[category][index].price;
    }
  }
  return `O produto mais caro é: ${productName}, que custa: R$${productPrice.toFixed(
    2
  )}.`;
};

// console.log(moreExpensive(menu, 'sandwiches'));

// Requisito 5 - Crie uma função que verifica se um determinado item já existe
const checkItem = (data, category, item) => {
  for (let index = 0; index < data[category].length; index += 1) {
    if (data[category][index].name === item) {
      return true;
    }
  }
  return false;
};

// console.log(checkItem(menu, 'drinks', 'Coca-Cola 300ml'));

// Requisito 6 - Crie uma função que adiciona um novo item caso ele ainda não exista

const addNewItem = (data, category, item, price, ingredients, calories) => {
  const productExists = checkItem(data, category, item);
  if (productExists === true) {
    return `O produto: "${item}" já existe!`;
  }
  const newItem = {
    name: item,
    price,
    ingredients,
    calories,
  };
  data[category].push(newItem);
  return newItem;
};
// Requisito 7 - Crie uma função que conta a quantidade de pessoas por gênero

const counterGender = (data) => {
  let counterMale = 0;
  let counterFemale = 0;
  for (let index = 0; index < data.guests.length; index += 1) {
    if (data.guests[index].gender === 'male') {
      counterMale += 1;
    } else {
      counterFemale += 1;
    }
  }
  return { male: counterMale, female: counterFemale };
};

// console.log(counterGender(guestsDatabase));
// =================================================
// PARTE 3
// =================================================

// Requisito 8 - Crie uma função que retorna os elementos de um determinado estado

const filterState = (data, state) => {
  const searchState = [];
  for (let index = 0; index < data['guests'].length; index += 1) {
      if (data['guests'][index].address.state === state) {
      searchState.push(data['guests'][index])
    }    
  }
  return searchState;
};

// console.log(filterState(guestsDatabase, "Wisconsin"));

// Requisito 9 - Crie uma função que altera a propriedade `picture`

const changePicture = (data, link) => {
  let newPicture = [];
  for (let index = 0; index < data.guests.length; index++) {
    data.guests[index].picture = link;
    newPicture.push(data.guests[index]);
  }
  return newPicture;
};
console.log(changePicture(guestsDatabase, 'https://picsum.photos/200/300'));

// Requisito 10 - Crie um função que gera um relatório

const report = [];

let generateReport = (data) => {};
// Não modifique as linhas abaixo
module.exports = {
  splitSentence: typeof splitSentence === 'function' ? splitSentence : () => {},
  footballPoints:
    typeof footballPoints === 'function' ? footballPoints : () => {},
  addMusics: typeof addMusics === 'function' ? addMusics : () => {},
  playlist: typeof playlist === 'undefined' ? [] : playlist,
  moreExpensive: typeof moreExpensive === 'function' ? moreExpensive : () => {},
  checkItem: typeof checkItem === 'function' ? checkItem : () => {},
  addNewItem: typeof addNewItem === 'function' ? addNewItem : () => {},
  counterGender: typeof counterGender === 'function' ? counterGender : () => {},
  filterState: typeof filterState === 'function' ? filterState : () => {},
  changePicture: typeof changePicture === 'function' ? changePicture : () => {},
  generateReport:
    typeof generateReport === 'function' ? generateReport : () => {},
};
