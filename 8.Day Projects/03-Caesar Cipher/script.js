

const alpha  = "a b c d e f g h i j k l m n o p q r s t u v w x y z";

const criptoWord = "Hello World";

let alphaArr = alpha.split(" ");
console.log(alphaArr);
 function criptoMessage (data, num) {
 let arr = data.toLowerCase().split(' ');
  let result = [];
  arr.forEach(item => {
    for (let i = 0; i < item.length; i++){
      for(let j = 0; j < alphaArr.length; j++)
      if(item[i] === alphaArr[j]){
        if(j+num > alphaArr.length){
       result.push(alphaArr[j + num - alphaArr.length]);
    }else{
      result.push(alphaArr[j+num]);
    }
   }
  }
  result.push(' ');
});
  return result.join('');
}
 console.log(criptoMessage(criptoWord, 4)); 
//  let encrypted = criptoMessage(criptoWord, 3); 
  


// // //DECRIPTION
  function deCripto (data, num) {
  let arr = data.toLowerCase().split(' ');
  let alphaArr = alpha.split(' ');
  let result = [];
  arr.forEach(item => { 
  for(i=0; i<item.length; i++){
    for(j=0; j<alphaArr.length; j++){
      if(item[i] === alphaArr[j]){
        if(j-num < 0){
          result.push(alphaArr[alphaArr.length+j-num])
        } else {
          result.push(alphaArr[j-num])
        }
      }  
    }
  }
    result.push(' ')
  }); 
    return result.join('');
  }
  
  console.log(deCripto(criptoWord, 4));


// // for making capital letter
// let capitalResult = criptoMessage(criptoWord, 5);
// console.log(capitalResult.split(' ').map(capitalize).join(' '));


// function capitalize(str) {
//   return str.charAt(0).toUpperCase() + str.slice(1);
// }