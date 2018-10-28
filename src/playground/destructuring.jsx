// Object destructring

const person = {
    name: 'Abhishek',
    age: 24,
    location: {
        city: "Mumbai",
        temp: 40 
    }
};

const name = person.name;
const age = person.age;
// new ES6 way
const { name:firstName = 'Anonymous default', age } = person; //these are just like named import in es6
console.log(`I'm ${firstName}, I'm ${age} old.`);

// Renaming it then using it with new name
const { city, temp: temperature } = person.location;// once renamed old temp will not will avialable for use
if (city && temperature) {
    console.log(`In ${city} temperature is ${temperature}`);
}

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        // name: 'Penguin'
    }
};

const { name:publisher = 'Self Published' } = book.publisher;

if (publisher) {
    console.log('object :', publisher);
}

// ----- Array destructring

const address = ['221','Baker Street','Phildal','IEND'];
const [,city, state = "defualt"] = address;

console.log('city,state :', city,state);