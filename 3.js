const printPattern = (value) => {
  for (let i = 1; i <= value; i++) {
    let inlinePattern = "";
    for (let x = 1; x <= value; x++) {
      if (i == 1 || i == value) {
        inlinePattern += "+ ";
      } else {
        if (x % 3 != 0) {
          inlinePattern += "= ";
        } else {
          inlinePattern += "+ ";
        }
      }
    }
    console.log(inlinePattern);
  }
};

printPattern(10);
