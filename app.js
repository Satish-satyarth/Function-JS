// ---------------------- Function ----------------------

function sumoftwoNum(num1, num2){      // Parameter         
    //   console.log(num1 + num2);
}

sumoftwoNum(2, 6)                    // Arguments

function CalculateCartPrice (var1,var2,...num1){
     return num1
}
// console.log(CalculateCartPrice(200,400,500,));


const user = {
    name :"satish",
    email : "sk2002@gmail.com",
    college:" SIRT"
}

function student(sk){
    // console.log(`studentName ${sk.name} email ${sk.email}`);

}
// student(user)
student({
    name: "sagar",
    email : "sagar@gmail.com"
})

const arr = [100,200,300,410]

function secondElement(getArray){
      return getArray[1]
}
// console.log(secondElement(arr));

// console.log(secondElement([1000,2000,3000]));


// +++++++++++++++++++   Arrow Function +++++++++++++++++++

// function chai (){
//      const username ="satish"
//      console.log(this.username)
// }
// chai()


// const chai = () =>{
//     const username ="satish"
//      console.log(this.username)
// }
// chai()

const add = (num1, num2) => {
    return num1+num2
}

// console.log(add(2,5));

const twoadd  = (num1, num2) => num1 + num2
// console.log(twoadd(5,6));

const sumtwo = (num1, num2) => (num1+ num2)
// console.log(sumtwo(78,58));


const sumthree = (num1, num2, num3) => ({name:"satish"})
// console.log(sumthree())



// ++++++++++++++++++++ Immediately Invoked Function Expression  +++++++++++++++++++++++++

// (function masti (){
//     console.log(`satish`);
// })()

( (name) =>{
console.log(`satish `);
})(`satish`)