let person = {
    name: "John",
    address: {
        city: "LA",
        country: "USA"
    }
}
let updated1 = Object.assign({}, person, { address: {
    city: "New York",
    country: "USA"
}})
console.log(updated1)

let updated2 = {...person, name: "thai", address: {
    ...person.address, city: "California"
}}

console.log(updated2)