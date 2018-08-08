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

export const setUsers = (state, user) => {
  state.users = user
}
