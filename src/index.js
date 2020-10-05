

const golden = () => {

    console.log("this is golden!!");
    return () =>{
    }
    

};

golden();

//2

const newFunction = (firstName, lastName)=>{

    console.log(firstName + " " + lastName);
    
    return ()=>{

    

    }

};


newFunction("William", "Imoh");


// 3

const newObject = {
    firstName: "Harry",
    lastName: "Potter Holt",
    destination: "Hogwarts React Conf",
    occupation: "Deve-wizard Avocado",
    spell: "Vimulus Renderus!!!"
  }

const {firstName, lastName, destination, occupation, spell} = newObject

console.log(firstName, lastName, destination, occupation);
//4

const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]

const combined = [...west,...east];
console.log(combined);

//5 

const planet = `earth`;
const view = `glass`;

var before = `Lorem ${view} consectetur adipiscing elit, ${planet} do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam`; 
console.log(before);