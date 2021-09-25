// Перед вами находится массив с продуктами в интернет-магазине. Вам нужно:
// 1. Получить все товары, у которых есть фотографии
// 2. Отсортируйте товары по цене (от низкой цены к высокой)

'use strict';
const products = [
    {
        id: 3,
        price: 127,
        photos: [
        "1.jpg",
        "2.jpg",
    ]
    },
    {
        id: 5,
        price: 499,
        photos: []
    },
    {
        id: 10,
        price: 26,
        photos: [
        "3.jpg"
    ]
    },
    {
        id: 8,
        price: 78,
    },
];

// отбор товаров с фотографиями:
let withPhotos = products.filter(function (item) {
    return 'photos' in item && item['photos'].length >0
});
console.log(withPhotos)

// сортировка по возрастанию цены:
products.sort(function (item_1, item_2) {
    if (item_1.price > item_2.price) {
        return 1;
    }
    if (item_1.price < item_2.price) {
        return -1;
    }
    return 0;
})
console.log(products)
