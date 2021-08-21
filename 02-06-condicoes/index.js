var me = {
    name: 'Fernando',
    age:  33
}

function ckeckAge (person){
    console.log('A idade da pessoa é: ' + person.age);

    if(person.age > 17){
        console.log('A pessoa é maior de idade');
    }else {
        console.log('A pessoa é menor de idade');
    }
    
}

ckeckAge(me);