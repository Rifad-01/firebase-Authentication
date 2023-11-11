const admin = require('firebase-admin');
const firebase = require('firebase')
import firebase from 'firebase/app'; 
import 'firebase/auth';
const serviceAccount = require('./AIzaSyC6YHIwTmzWjvEVDXMkGQuXwGD7UDjNQkI.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: '/signin/EeUPXKJFjHd8hXFUSpBS',
});

module.exports = admin;
