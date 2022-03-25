function Abc(name, email) {

    console.log(this)

    console.log(this.age)
    console.log(this.city)
    
    console.log(name)
    console.log(email)

}

var Obj = {
    age: 20,
    city: "Pune",
    mob: 76865754
}

Abc.call(Obj, "Ak", "email")
Abc.apply(Obj, ["Ak", "email@g.com"])
var xyz = Abc.bind(Obj, "Ak", "email")
xyz()