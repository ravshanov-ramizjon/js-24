const cars = [
    {
        id: 1,
        model: "malibu",
        price: 10000,
        year: 2023
    },
    {
        id: 2,
        model: "Onix",
        price: 14000,
        year: 2024
    },
    {
        id: 3,
        model: "Monza",
        price: 17000,
        year: 2023
    },
    {
        id: 4,
        model: "Gentra",
        price: 13500,
        year: 2022
    },
    {
        id: 5,
        model: "Captiva",
        price: 26000,
        year: 2024
    },
    {
        id: 6,
        model: "Equinox",
        price: 32000,
        year: 2024
    },
]
let max = cars[0]
let min = cars[0]

for (let car of cars) {
    if (car.price > max.price) {
        max = car;
    }
    if (car.price < min.price) {
        min = car;
    }
}
console.table(max)
console.table(min)

const Data = new Date().getFullYear()

for (let car of cars) {
    let exp = 0

    for (let i = car.year; i < Data; i++) {
    
        if (car.year < Data) {
            exp += 1

        }

    }
    car.exploitation = exp
}
console.table(cars)