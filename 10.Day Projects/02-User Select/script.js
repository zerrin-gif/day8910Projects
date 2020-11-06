console.log(Object.keys(users));
console.log(Object.values(users));
console.log(Object.keys(users).length);
function manySkills(obj){
let many = {
    skills: []
};
for(key in obj){
    if (obj[key].skills.length > many.skills.length) {
     many = obj[key];
    }
        return many;
         }
    }
    console.log(manySkills(users));
//  function countPoints(obj){
//      let counter = 0;
//      for(key in obj){
//         if (obj[key].points >= 50) {
//              counter++;
//            }
//            }
//               return `There are ${counter} people over point 50.`;    
//            }
//            console.log(countPoints(users));
console.log(Object.values(users).filter(item => item.points >=50))
   function findMern(obj){
     let finder = 0;
     for(key in obj){
        if (obj[key].skills.includes('MongoDB' && 'Express' && 'React' && 'Node')) {
            finder++;
           }
           }
            return `There are ${finder} people who are MERN stack developer.`;     
           }
           console.log(findMern(users));
   users.Maysa = {
    email: 'maysaorash@.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 35,
    isLoggedIn: false,
    points: 40
   }
   console.log(users);
  for(key in users){
    users[key].name = key;
    users[key].allPrint = function() {
    let statement = ` ${this.name} is ${this.age} years old. She knows ${this.skills}.`
    return statement
    }  
}
console.log(users.Maysa.allPrint());
