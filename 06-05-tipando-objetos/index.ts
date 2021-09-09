type Person = {
    name: string,
    age: number,
    contacts?: string[],
    isAlive: boolean
} 

const person: Person = {
    age: 33,
    name: 'Fernando',
    contacts: ['Fernando', 'antonio'],
    isAlive: true
}

const person2: Person = {
    age: 33,
    name: 'Fernando',
    contacts: ['Fernando', 'antonio'],
    isAlive: false
}