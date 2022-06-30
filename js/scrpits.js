// function bind(context, func) {
//     return function(...args){
//         func.apply(context,func)
//     }
// }

// function logPerson() {
//     console.log(`Person: ${this.name}, ${this.age}, ${this.job}`);
// }

// const person1 = {name: 'Jack', age: '22', job: 'Driver'}
// const person2 = {name: 'Dimuch', age: '21', job: 'FrontEnd'}

// bind(person1,logPerson)()
// bind(person2,logPerson)()


// Salary task
const salaryInput = document.querySelector('#salary-input');
const salaryBtn = document.querySelector('#salary-btn');
const salaryText = document.querySelector('#salary-text');

salaryBtn.addEventListener('click', () => {
    salaryText.style.display = 'none';

    if(salaryInput.value === ""){
        salaryText.style.display = 'block';
        salaryText.innerHTML = "Введите число";
    } else if(salaryInput.value == 0){
        salaryText.style.display = 'block';
        salaryText.innerHTML = "Число должно быть больше чем 0";
    } else{
        let res = Number(salaryInput.value);
        // res += res / 100 * 15;
        alert("Добавка в виде премии в сумме 15% от зарплаты: " + (res += res / 100 * 15));
        alert("Налоги в сумме 10% от суммы всех начислений: " + (res -= res / 100 * 10));
        alert("Трата в магазине на сумму 190: " + (res -= 190));
        alert("Разделяете оставшуюся сумму между пользователем и его женой/мужем " + (res /= 2));
        salaryInput.value = '';
    }
});