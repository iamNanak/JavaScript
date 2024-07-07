class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){  //get and set are use in pair, here constructor setted password is get overwrite by get 
        return `${this._password}ghieon`
    }

    set password(value){    
        this._password = value   //setter will not use return ever
    }
}

const user1 = new User('nanak@google.com', 'adfhgkl')
console.log(user1)
console.log(user1.password);
console.log(user1.email);
