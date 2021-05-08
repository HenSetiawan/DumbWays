const isPolindrome = (value) => {
  for (let i = 0; i < value.length; i++) {
    if (value[i] !== value[value.length - i - 1]) {
      return `${value} bukanlah polindrome`;
    }
    return `${value} adalah polindrome`;
  }
};

console.log(isPolindrome("kodok"));
