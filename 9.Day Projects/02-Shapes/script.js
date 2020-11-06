let geometricShapes = {
  1 : "circle",
  2 : "semi-circle",
  3 : "triangle",
  4 : "square",
  5 : "pentagon",
  6 : "hexagon",
  7 : "heptagon",
  8 : "octagon",
  9 : "nonagon",
  10 : "decagon"
  };
  function amountOfSides(num) {
  console.log(`Entered number is ${num} and the shape of it is ${geometricShapes[num]}
  // `) 
  } 
  amountOfSides(4);
  function sides(num,obj){
  return obj[num];
  }
  console.log(sides(5,geometricShapes));