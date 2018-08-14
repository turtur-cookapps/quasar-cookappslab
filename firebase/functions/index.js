const functions = require('firebase-functions')
const admin = require('firebase-admin')

const settings = {timestampsInSnapshots: true};

admin.initializeApp(functions.config().firebase)
admin.firestore().settings(settings);

exports.createUserDB = functions.auth.user().onCreate((user) => {
  userDoc = {'email' : user.email,
              'name' : user.displayName}
  return admin.firestore().collection('users').doc(user.uid)
  .set(userDoc).then(writeResult => {
      return writeResult
  }).catch(err => {
      return err
  })
})

exports.removeUserDB = functions.auth.user().onDelete((user) => {
  return admin.firestore().collection('users').doc(user.uid)
  .delete().then((deleteResult) => {
      return deleteResult
  }).catch(err => {
      return err
  })
})

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
