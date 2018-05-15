class User {
  constructor(name, age, proffesion, gender) {
    this.name = name
    this.age = age
    this.proffesion = proffesion
    this.gender = gender
  }
  sayName() {
    console.log(this.name)
  }
  get getUserName() {
    console.log(this.name)
  }
  set setUserName(val) {
    this.name = val
  }
}

export default User
