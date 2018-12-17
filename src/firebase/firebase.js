import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATBASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };


// database.ref().on('value',(snapshot)=>{//this returns value whenever the database is updated its like subscribe with database updates
//     const val = snapshot.val();//we are using callback pattern as we want it run everytime
        //whereas then and catch runs only once so not useful while Read operations.
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

// // database.ref().off(); //will unsubscribe the user with database;

// const onChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
// })
// database.ref().off(onChange); //will unsubscribe only for this and other subscriptions will work;



//------ Array ops with firebase

//firebase doesn't support arrays 

// const notes = [
//     {
//         id: 'ewie23',
//         note: 'first note',
//         cratedOn: '17 dec'
//     },
//     {
//         id: 'ewie24',
//         note: 'first note',
//         cratedOn: '17 dec'
//     }
// ];

// database.ref('notes').set(notes);//make root entry with notes and save on it passed notes

/**
 * Expected OP:
 *  notes :  [
                {
                    id: 'ewie23',
                    note: 'first note',
                    cratedOn: '17 dec'
                },
                {
                    id: 'ewie24',
                    note: 'first note',
                    cratedOn: '17 dec'
                }
            ]


    what firebase gives back:
    notes :  [
                0:{ id: 'ewie23', note: 'first note', cratedOn: '17 dec' },

                1: { id: 'ewie24', note: 'first note', cratedOn: '17 dec' }
            ]

    in that case how to access??
    database.ref('notes/12')

    -->
    database.ref('notes').push({
        note: 'first note',
        cratedOn: '17 dec'
    });

    // use push() by passin obj we want in list without id-> in return it will store it this object as value on a unique key generated by push()
 */

// database.ref('expense').push({
//     description: 'Dec JIO bill',
//         note: 'This was the gas bill payment for the feb month #SO1256.',
//         amount: 499,
//         createdAt: 2601
// });
// database.ref('expense').push({
//     description: 'Nov JIO bill',
//         note: 'This was the gas bill payment for the feb month #SO1256.',
//         amount: 399,
//         createdAt: 2605
// });
// database.ref('expense').push({
//     description: 'Jan JIO bill',
//         note: 'This was the gas bill payment for the feb month #SO1256.',
//         amount: 599,
//         createdAt: 2603
// });

//how to read list in firebase

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

// reading list data on different update events

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



// database.ref()
//     .once('value')
//         .then((snapshot) => {//we get data on snapshot obj
//             const val = snapshot.val();//calling val() will return val of rqusted obj
//             console.log(val);
//         })
//         .catch((e)=> {
//                 console.log(e);
//             });