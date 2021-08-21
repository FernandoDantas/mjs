var person = {
    age: 17,
    name: 'Lucas'
}

//funcao pura
function getRemainingYearsToMajorty (person){
    return 18 - person.age;
}

//funcao inpura - gera efeitos colaterais
function increasePersonAge (person){
    person.age = person.age + 1;
}

// chamou um metódo impuro
increasePersonAge(person);


var remainingYears = getRemainingYearsToMajorty(person);

console.log(remainingYears);