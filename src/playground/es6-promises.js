const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("Request completed..");
    },1500);
});
console.log("making..request");

promise.then((data)=> {
    console.log(data);
}).catch((error)=>{
    console.log("someting went wrong, ",error)
});
console.log("made..data rquest");
