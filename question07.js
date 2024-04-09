const people = [
    {
        name: "John",
        age: 30
    }
];

const employees = [...people];
employees[0].age = 35;
console.log(people);

/**
 * when we create the employees array, we have spread the elements of the person array 
 * so this create a shallow copy. it means that the reference of the initial object is copied
 * to the emloyee object. now both of these arrays have a reference that points to the same
 * object value. so thats why when we try to modify this object's property it updates the 
 * original value/object
 * output:
 * [{name: "John", age: 35}]
 */