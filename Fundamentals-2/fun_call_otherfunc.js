let cutPieces = function (fruit) {
  return fruit * 4;
};

let fruitProcessor = function (apples, oranges) {
  let applePieces = cutPieces(apples);
  let orangePieces = cutPieces(oranges);

  let juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
};
console.log(fruitProcessor(2, 3));
