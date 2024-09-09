// const a = 'amir'
// const b = 'galiyev'
// const c = 16


// const d = 'max'
// const e = 'shermatov'
// const f = 32

const obj1 = {

    name: 'amir',
    surname: 'galiyev',
    age: 16,
    address: 'tashkent'


}

const product1 = {
    img: 'https://cdn.lepodium.com/images/167/508/167508998-3.jpg',
    title: 'сумка ARMANI EXCHANGE',
    rate: 4.9,
    reviews: 50000,
    oldPrice: 550000,
    newPrice: 450000

}

const product2 = {
    img: 'https://cdn.lepodium.com/images/167/508/167508998-3.jpg',
    title: 'сумка gucci',
    rate: 3.9,
    reviews: 2050,
    oldPrice: 350000,
    newPrice: 299000

}

const product3 = {
    img: 'https://cdn.lepodium.com/images/167/508/167508998-3.jpg',
    title: 'чайник',
    rate: 1.9,
    reviews: 100,
    oldPrice: 200000,
    newPrice: 100000

}

product3.rate = 4.8

product3.newPrice = 100000000

product3.oldPrice = 10000

product3.stock = 52 + 'товаров'

delete product3.oldPrice



console.log(product1['title'], product1['newPrice']);
console.log(product2['title'], product2['newPrice']);
console.log(product3['title'], product3['newPrice'], product3['rate'], product3['stock']);





const cardImg = document.querySelector('.card img').src = product1.img
const cardTitle = document.querySelector('.card h3').innerText = product1.title
const cardRating = document.querySelector('#rating').innerText = product1.rate
const cardReviews = document.querySelector('#reviews').innerText = product1.reviews
const cardOldPrice = document.querySelector('.card s').innerText = product1.oldPrice
const cardNewPrice = document.querySelector('.card b').innerText = product1.newPrice






