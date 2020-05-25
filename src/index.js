const person = { name: "John", address: {
    city: "LA",
    country: "USA"
}};
const updated = {...person, name: "thai", address: {
    ...person.address,
    city: "New York"
}}
console.log(person);