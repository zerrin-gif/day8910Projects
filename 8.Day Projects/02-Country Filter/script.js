
// Filter out countries
// 1.	Extract all the countries contain the word 'land' from the countries array and print it as array
// 2.	Find the country containing the hightest number of characters in the countries array
// 3. Sort the countries by length of characters in the countries array
// 4.	Extract all the countries containing only four characters from the countries array and print it as array
// 5.	Extract all the countries containing two or more words from the countries array and print it as array
// 6.	Reverse the countries array and capitalize each country and stored it as an array.
// 7.	Extract all the countries don’t contain the word 'land' from the countries array, add “land” at the end of the country and print it as array.


const countries = ['Albania', 'bolivia', 'Canada', 'Bali', 'denmark', 'czech republic', 'ethiopia', 'Finland', 'Germany', 'hungary', 'Ireland', 'Japan', 'Kenya', 'United States' ]



// step-1
function countryFind1(arr) {
    return arr.filter(item => item.includes('land'))
  }
  console.log(countryFind1(countries));
  
  
// step-2
  function longestCountry(arr){
    return arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
  
  }
  console.log(longestCountry(countries));
  // function longestCountry(arr){
  //   var longest= "";
  //   for (i=0; i<arr.length; i++){
  //       if (arr[i].length > longest.length){
  //         longest= arr[i];
  //       }
  //   }
  //   return longest;
  // }
  // console.log(longestCountry(countries));
   
// step-3
function countrySort(arr){
  countries.sort(function (a, b) {           // sort array by length of text
    if (arr) return a.length - b.length;              // ASC -> a - b
    else return b.length - a.length;                    // DESC -> b - a
});
return arr;
}
console.log(countrySort(countries));

// step-4

function countryFind4(arr){
  let newArr = []; 
for (let i=0; i<arr.length; i++){
  if(arr[i].length === 4){
    newArr.push(arr[i])
  }
}
return newArr
}
console.log(countryFind4(countries))

// step-5

function countryFind5(arr){
  let newArr = []; 
for (let i=0; i<arr.length; i++){
  if(arr[i].includes(" ")){
    newArr.push(arr[i])
  }
}
return newArr
}
console.log(countryFind5(countries))


//step-6
function countryFind6(arr){
  let countryFound = [];
  for (i=0; i<arr.length; i++){ 
    if(arr[i].includes(" ")){
      let doubleWord = arr[i].split(' ')
      for (j=0 ; j < doubleWord.length ; j++){ 
        doubleWord[j] = doubleWord[j].charAt(0).toUpperCase() + doubleWord[j].substring(1);
      }
      countryFound.push(doubleWord.join(' '))
      } else {
      countryFound.push(arr[i][0].toUpperCase() + arr[i].substring(1));
    }
    }
    return countryFound;
  }

console.log(countryFind6(countries));

 // return arr.reverse().map(item => item.split(' ').map(x =>x[0].toUpperCase() + x.slice(1)).join(' '));
// }
// console.log(countryFind6(countries

// step-7

function countryFind7(arr) {
    return arr.filter(item => !item.includes('land'))
  }
  console.log(countryFind7(countries)); 


