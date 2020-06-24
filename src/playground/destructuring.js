                
                //object destructuring


const person = {
    name : "fayez",
    age : "24",
    location : {
        city : "kolkata",
        temp : 26
    }
}

// const name   = person.name;
// const age   = person.age;
// const  {name = "annonymus" , age} = person;

// console.log(`${name}  is  ${age}`)

// const {city , temp : tempareture}= person.location;
// console.log(`it's ${tempareture} in ${city}`)



const books = {
    title : "Ego is the ememy",
    author : "Ryan",
    publisher : {
        // name : "Penguine"
    }
}

const {name : publisherName = "self Publish"} = books.publisher;

// console.log(publisherName)


            ////////array destructering


const address = ['1299 $ hupiter street ' , "kolkata" , "shapoorji" , "700135"]


const [ , city , state , zip] = address;

console.log(`you are in ${city} ${state}`);