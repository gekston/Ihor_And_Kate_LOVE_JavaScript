import User from './../../class/userClass/index'

const newUser = new User()

document.addEventListener('change', (event) => {
  if (event.target.classList.contains('input-name')) {
    newUser.setUserName = event.target.value
  } else {}
})