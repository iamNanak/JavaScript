function User(username, password){
    this._username = username
    this._password = password

    Object.defineProperty(this, 'username', {
        get: function(){
            return this._username.toUpperCase()
        },
        set: function(value){
            this._username = value
        }
    })
}

const user1 = new User("Nanak", 'abgidhtn')
console.log(user1.username)