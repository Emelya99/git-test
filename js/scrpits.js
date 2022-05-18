function bind(context, func) {
    return function(...args){
        func.apply(context,func)
    }
}

function logPerson() {
    console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
}

const person1 = {name: 'Jack', age: '22', job: 'Driver'}
const person2 = {name: 'Dimuch', age: '21', job: 'FrontEnd'}

bind(person1,logPerson)()
bind(person2,logPerson)()