var decare ={
    key1:"value1",
    key2:"value2",
    key3:"value3",
    key4:"value4",
    key5:"value5",
    key6:"value6",

}

console.log(decare);

var person = {
    name: "John",
    age: 30,
    city: "New York",
    greet: function(){
        console.log("Hello");
        console.log("My name is " + this.name);
        
    }
}
console.log(person);
person.greet();
