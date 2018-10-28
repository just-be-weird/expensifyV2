const names = ['natsu','grey'];
names.push('lucy'); //this will change names array givin OP -> natsu,grey,lucy

names.concat('sting') // wont modify names but will return new array -> natsu,grey,lucy,sting

//spread operator
const arr = [...names]; //this will copy all the items from names to new array and names remains untouched

['juvia',...names,'sting'] // new array  'juvia',natsu,grey,lucy,sting


// ---- Object Spread Operator ---- need "transform-object-rest-spread" to be installed to use ..see package.json and babel.rc 

const user = {
    name: 'Luffy',
    age: 24
}

console.log({
    ...user,
    location: "east blue",
    age:27// will override original but if set before spread then won't override it.
})