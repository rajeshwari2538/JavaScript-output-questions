const counter1 = {
    count: 0
}

const counter2 = counter1;
counter2.count = counter1.count++;

console.log(counter1.count);
console.log(counter2.count);