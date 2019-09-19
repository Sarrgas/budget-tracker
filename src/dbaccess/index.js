import firebaseConfig from './firebaseConfig';
const firebase = require('firebase');

const app = firebase.initializeApp(firebaseConfig);
const database = app.database();

function setBudget(currentBuget){
    database.ref('budget').set(currentBuget);
}

function getBudget(){
    return database.ref('budget').once('value');
}

export {setBudget, getBudget};