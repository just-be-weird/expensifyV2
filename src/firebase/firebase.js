import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBlsfeHpt_BlYdbf_48Zfz46MnhN4bRPZQ",
    authDomain: "expensifyapp-f8e96.firebaseapp.com",
    databaseURL: "https://expensifyapp-f8e96.firebaseio.com",
    projectId: "expensifyapp-f8e96",
    storageBucket: "expensifyapp-f8e96.appspot.com",
    messagingSenderId: "588822955735"
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

// //child_removed
// database.ref('expense').on('child_removed',(snapshot)=> {
//     console.log(snapshot.key,snapshot.val());
// });

// //child_changed
// database.ref('expense').on("child_changed",(snapshot)=> {
//     console.log(snapshot.key,snapshot.val());
// });

// //child_added
// database.ref('expense').on("child_added",(snapshot)=> {
//     console.log(snapshot.key,snapshot.val());
// });


// database.ref('expense').on('value',(snapshot)=>{
//     const expenses = [];
//     snapshot.forEach((childSnapashot)=>{
//         expenses.push({
//             id: childSnapashot.key,
//             ...childSnapashot.val()
//         })
//     });
//     console.log("expenses: ",expenses);
// },(error)=>{
//     console.log("Error in fetching data",e);
// });

// database.ref('expense').push({
//     description: 'Nov JIO bill',
//         note: 'This was the gas bill payment for the feb month #SO1256.',
//         amount: 499,
//         createdAt: 2601
// });
// database.ref('expense').push({
//     description: 'Nov JIO bill',
//         note: 'This was the gas bill payment for the feb month #SO1256.',
//         amount: 499,
//         createdAt: 2601
// });
// database.ref('expense').push({
//     description: 'Nov JIO bill',
//         note: 'This was the gas bill payment for the feb month #SO1256.',
//         amount: 499,
//         createdAt: 2601
// });
// database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(`${val.name} is ${val.job.title}`);
// },(e)=>{
//     console.log("error",e)
// });

// database.ref().set({
//     name: "mern ninja",
//     age: 25,
//     isSingle: true,
//     stressLevel: 6,
//     job: {
//         title: 'SD',
//         location: 'BNG'
//     },
//     location: {
//         city: 'mumbai',
//         country: 'india'
//     }
// });

// database.ref('location/city').remove().then(()=>{
//     console.log('remove done');
// }).catch((error)=>{
//     console.log("error",error);
// });

// database.ref().update({
//     stressLevel:9,
//     'job/location': 'MUM',
//     'location/city': 'MUM'
// });

