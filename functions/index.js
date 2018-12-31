/*npm install --save firebase-functions firebase-admin express consolidate ejs firestore-store*/
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express= require('express');
const engines= require('consolidate');
const ejs =require('ejs');
admin.initializeApp(functions.config().firebase);
var db = admin.firestore();
const app=express();
app.set("view engine","ejs");
app.engine('ejs', ejs.__express);
app.set('views', './views');

app.get('/',(req,res)=>{
  res.send("Test");
});

exports.index = functions.https.onRequest(app);
