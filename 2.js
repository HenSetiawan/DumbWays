const orderWords = (str) => {
  let words = str.split(" ");
  let orderedWord = "";

  for (let index = 1; index <= words.length; index++) {
    for (let i = 0; i < words.length; i++) {
      if (words[i].includes(index)) {
        orderedWord += `${words[i]} `;
      }
    }
  }

  return orderedWord;
};

console.log(orderWords("ta3hun menjela2ng se1lamat b4aru"));
