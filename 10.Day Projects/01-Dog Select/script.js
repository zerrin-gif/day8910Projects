var dog = {
    name: 'Teddy',
    legs: 4,
    color: 'white',
    age:3,
    bark(){
return 'woof woof'
    },
    breed:'alabay',
    getDoginfo(){
    return `My name is ${this.name}. I am ${this.humanAge} years old in human years which is ${this.age} years old in dog years.`
   },
    calcAge(){
        if(this.age >= 2) {
            return this.humanAge = (2 * 10.5) + (this.age-2)*4;
        }else if(this.age === 1){
            return this.humanAge = 10,5 ;
        }else{
            return this.humanAge;
        }
       },
    }
console.log(dog);
console.log(dog.calcAge());
console.log(dog.getDoginfo());