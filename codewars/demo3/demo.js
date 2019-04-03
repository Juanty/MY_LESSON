const people = [
    {age: 46, name: 'roger'},
    {age: 99, name: 'vinny'},
    {age: 26, name: 'lisi'},
    {age: 74, name: 'wangwu'},
]

var oderPeople = function(people){
    return people.sort((a, b) => {
        return a.age - b.age;
    })
}
console.log(oderPeople(people));