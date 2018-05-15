import User from './../../class/userClass/index'

const newUser = new User()
document.querySelector('.send-name').addEventListener('click', (event) => {
  event.preventDefault
  newUser.setUserName = ''
})
