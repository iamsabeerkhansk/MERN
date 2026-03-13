const person = {
    name:"Sonu",
    age:21,
    greet: function(){
        return `Hello,my name is ${this.name}`;
    },
};
console.log(person.name);
console.log(person.greet());