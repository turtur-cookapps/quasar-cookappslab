import firebase from 'firebase'

export const initFirebase = (dispatch, config) => {
  return new Promise((resolve, reject) => {
    firebase.initializeApp(config)
    resolve()
  })
}

export const redirectLoginFirebase = (dispatch) => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch.state.currentUser = user
        setTimeout(() => {
          resolve()
        }, 1000)
      } else {
        reject(new Error('not logined'))
      }
    })
  })
}

export const loginFirebase = (dispatch) => {
  return new Promise((resolve, reject) => {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider).then((result) => {
      dispatch.currentUser = result.user
      resolve(dispatch.currentUser)
    }).catch((reason) => {
      reject(reason)
    })
  })
}

export const getUsers = (dispatch) => {
  return new Promise((resolve, reject) => {
    var db = firebase.firestore()
    firebase.firestore().settings({ timestampsInSnapshots: true })
    db.collection('users').get().then((snap) => {
      dispatch.state.users = []
      let user
      snap.forEach(element => {
        user = element.data()
        user['uid'] = element.id
        dispatch.state.users.push(user)
      })
      resolve(dispatch.state.users)
    })
  })
}

export const setUser = (dispatch, data) => {
  return new Promise((resolve, reject) => {
    var db = firebase.firestore()
    firebase.firestore().settings({ timestampsInSnapshots: true })
    db.collection('users').add(data).then((snap) => {
      resolve(snap)
    })
  })
}
