const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("Request completed..");
    },1500);
});
console.log("making..request");

promise.then((data)=> {
    console.log(data);
    return 'some data to be passed for next cb chaining funciotn'
}).catch((data)=>{
    console.log("data after above is resolved, ",data)
}).catch((error)=>{
    console.log("someting went wrong, ",error)
});
console.log("made..data rquest");
