/* 
Password Validation

Write a program that should check if each password in an array 
contains a valid password (see below for password criteria) and return a
new array with true or false booleans for whether that password was valid or not.

To be valid, a password must:
- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")
- Passwords must not be any previous password. 

Expected Result:
PasswordValidationResult=  [false, false, true, false, false]
*/

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"]
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"]
let previousPasswords = ["fhD8!yrjj", "ttkTu.wer3", "dvyyeyy!5", "qwbfj76%", "tytT3729.", "384#HsHf" , "Jai33"];
// const regexUp = /[A-Z]/g;
// const regexLow = /[a-z]/g;
// const regexNum = /[0-9]/g;
// const regexSym = /[!#$%.*&]/g;
// let strUp ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let strLow="abcdefghijklmnopqrstuvwxyz";
// let numbers="0123456789";
// let nonAlpha="!#$%.*&"

function validatePasswords(arr) {
  let strUp ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let strLow="abcdefghijklmnopqrstuvwxyz";
  let numbers="0123456789";
  let nonAlpha="!#$%.*&"
  let result = [];
for(i=0; i<arr.length; i++){
  let strUpBool=false;
  let strLowBool=false;
  let numbersBool=false;
  let alphaBool=false;
  if(arr[i].length<5 || previousPasswords.indexOf(arr[i])>=0){
    result[i]=false;
    continue;  
  }
  for(j=0;j<arr[i].length;j++){
      if(strUp.includes(arr[i][j])) strUpBool=true;
      if(strLow.includes(arr[i][j])) strLowBool=true;
      if(numbers.includes(arr[i][j])) numbersBool=true;
      if(nonAlpha.includes(arr[i][j])) alphaBool=true;
  }
  if(strUpBool && strLowBool && alphaBool && numbersBool){
      result[i]=true;
  }else{
      result[i]=false;
  }  
}
return result; 
}
console.log(validatePasswords(passwords1));




  
// window.onload = function() {

//   var subButton = document.getElementById("submit");
//  subButton.onclick = function value(passForm) {

//  }

// };



// function value(passForm) {

  /** This function is being used to find out the values input by the user in both the password and confirm password text boxes.
   * The results are fed back to the user using alerts.
   * **/

 //confirm passwords match and have been created
//   if ((passForm.passInput.value) == (passForm.confirmPassInput.value)) {
//       alert("Your password has been created!");

//   } else {

//       var lower = /(?=.*[a-z])/;
//       if (!lower(passForm.passInput.value)) {
//           alert("Password must contain at least one lower case letter.");
//           passForm.passInput.focus();
//           return false;
//       }
//       else
//       //Validating length
//       if ((passForm.passInput.value).length < 8) {
//           alert("Your password has less than 8 characters.");
//           passForm.passInput.focus();
//           return false;
//       }

//       else
//       //Validating confirmation input
//       if (passForm.confirmPassInput.value == "") {
//           alert("Please confirm your password.");
//           passForm.passInput.focus();
//           return false;
//       }
//       else
//       //Validationg confirmation matches
//       if (passForm.confirmPassInput.value != passForm.passInput.value) {
//           alert("Your confirmation password does not match.");
//           passForm.passInput.focus();
//           return false;
//       }

//       return true;

//   }
//   };
// console.log(value());












/* ======= TESTS - DO NOT MODIFY THIS PART===== */
// function test(test_name, actual, expected) {
//     let status;
//     for (i=0; i<actual.length; i++){
//       if (actual[i] === expected[i]) {
//         status = "PASSED";
//       } else {
//         status = `FAILED: expected: ${expected} but your function returned: ${actual}`;
//       }
//     }
//     console.log(`${test_name}: ${status}`);
// }

// test("validatePasswords function works - case 1",
//   validatePasswords(passwords1), [false, false, true, false, false]);

// test("validatePasswords function works - case 2",
//   validatePasswords(passwords2), [true, true, false, false, true]);
// /* ======= TESTS - DO NOT MODIFY THIS PART===== */