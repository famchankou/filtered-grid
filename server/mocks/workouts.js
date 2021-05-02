const { v4: uuidv4 } = require('uuid');

const ITEMS_NUMBER = 1000;
const CATEGORIES = ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7'];

const generateRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const randomDate = (start, end) => {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const generateStr = length => {
  let result = [];
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++ ) {
    result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
  }
  return result.join('');
}

const generateItems = count => {
  const items = [];

  for (let i = 0; i < count; i++) {
    const item = {
      id: uuidv4(),
      name: generateStr(16),
      description: generateStr(255),
      start_date: randomDate(new Date(2019, 0, 1), new Date(2022, 0, 1)),
      category: CATEGORIES[generateRandomInt(0, CATEGORIES.length - 1)],
      updatedAt: new Date(),
      createdAt: new Date(),
    };

    items.push(item);
  }

  return items;
}

module.exports = {
  items: [ ...generateItems(ITEMS_NUMBER) ]
};
