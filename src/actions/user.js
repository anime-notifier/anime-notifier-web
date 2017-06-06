import { socket } from 'websocket';

export function login(body) {
  return fetch('/api/login', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => {
    return response.json()
  })
}

export function register(body) {
  return fetch('/api/register', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then((response) => {
    return response.json()
  })
}

export function logout() {
  return fetch('/api/logout', {
    method: 'POST',
    credentials: 'same-origin',
  }).then((response) => {
    return response.json()
  })
}

export function checkSession() {
  socket.emit('user', {type: "checkSession"});
}

export function getMyUserData() {
  socket.emit('user', {type: "getMyUserData"});
}
