console.log(staff);
staff[2].lastName;
console.log(staff[2].lastName);
for(let i = 0; i < staff.length; i++) {
  //console.log(staff[i].lastName);
staff[i].email = staff[i].lastName + '@google.com';
};
console.log(staff);
// function fullName (){
//   for(let i = 0; i < staff.length; i++) {
// staff.fullName = staff[i].firstName +' ' + staff[i].lastName;
// }	
//   }
//   console.log(fullName());
staff.forEach(element => {
element.fullName = `${element.firstName} ${element.lastName} `
});
console.log(staff);
const result = staff.filter(element => element.age > 21);
console.log(result);
let staffSort = staff.sort((a, b) => a.experience - b.experience);
console.log(staffSort);
​
var totalSum = 0;
for(var i = 0; i < staff.length; i++) {
  totalSum += staff[i].age;
};
console.log(totalSum);
var numsCnt = staff.length;
var average =Math.round(totalSum / numsCnt);
 
console.log('Average is: ' + average);
let exact = staff.filter(stff => (stff.language === 'Turkish'  && stff.age < 40 && stff.isActive === true));
  console.log(exact);
  
console.log(exact.sort ((a, b) => b.age - a.age));
// console.log(older);
