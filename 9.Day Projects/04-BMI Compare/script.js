let bmI = [
  {
   fullName : "Mark Miller",
   height : 1.70,
   mass : 65,
  bmi() {
   return Math.round(this.mass /this.height ** 2);    
   }
 },
 {fullName : "John Smith",
   height : 1.80,
   mass : 75,
   bmi() {
     return Math.round(this.mass /this.height ** 2);  
     }
     
 }
 ];
 //console.log(bmi);
 //console.log(johnBmi.bmi());
 // let higherBmi = bmI.filter(abc => (abc.bmi > ''  stff.age < 40 && stff.isActive === true));
 // console.log(exact);
  
 if(bmI[0] > bmI[1]){
   console.log(`${bmI[0].fullName} BMI ${bmI[0].bmi()} is higher than ${bmI[1].fullName} ${bmI[1].bmi()} !`);
 } else {
   console.log(`${bmI[1].fullName} BMI ${bmI[1].bmi()}  is higher than ${bmI[0].fullName} ${bmI[0].bmi()} !`)
 };