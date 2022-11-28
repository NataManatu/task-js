//PROMIS
//1
const coffee = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("ваш кофе готов")
    }, 1500)
});

coffee.then(data => {
    console.log(data)
})

//2
const tee = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(error("ваш чай готов!"))
    }, 2000)
});

tee.catch(data => {
    console.log(data)
})


//Coffee API - виды кофе + ингредиенты
//3

const family = [
    { member: "mother", id: 111, coffee: "Latte" },
    { member: "father", id: 222, coffee: "Espresso" },
    { member: "son", id: 333, coffee: "Cappucino" },
]

const getCoffee = (member) => {
    const coffeePromise = fetch("https://api.sampleapis.com/coffee/hot")
    return coffeePromise
        .then(data => data.json())
        .then(list => {
            const coffee = list.find(res => res.title === member.coffee);
            return {
                ...member,
                coffee: coffee
            }
        })
}

const getFamilyMember = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const member = family.find(res => res.id === id);
            if (member) {
                resolve(member);
            }
            else {
                reject(Error("Член семьи не найден!"))
            }
        }, 2000)
    })
}

getFamilyMember(111)
    .then(data => getCoffee(data))
    .then(newMember => {
        console.log("newMember>", newMember)
    })
    .catch(err => {
        console.log(err)
    })