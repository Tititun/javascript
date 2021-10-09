"use strict";
/* 
Разметка товара:

<div class="product">
    <div>${здесь_название_товара}</div>
    <img src="${здесь путь до картинки}" alt="">
    <div>${здесь_цена}</div>
    <a href="https://example.com/producs/${здесь_id_товара}">Подробнее</a>
</div>
*/

const products = {
    phones: [
        {
            id: 1,
            name: "Смартфон 1",
            price: "23,99 р.",
            imageUrl: "https://picsum.photos/seed/1/200",
        },
        {
            id: 2,
            name: "Смартфон 2",
            price: "11,99 р.",
            imageUrl: "https://picsum.photos/seed/2/200",
        },
        {
            id: 3,
            name: "Смартфон 3",
            price: "22,99 р.",
            imageUrl: "https://picsum.photos/seed/3/200",
        },
    ],

    tablets: [
        {
            id: 4,
            name: "Планшет 4",
            price: "99,99 р.",
            imageUrl: "https://picsum.photos/seed/4/200",
        },
        {
            id: 5,
            name: "Планшет 5",
            price: "44,99 р.",
            imageUrl: "https://picsum.photos/seed/5/200",
        },
    ],

    tv: [
        {
            id: 6,
            name: "Телевизор 6",
            price: "199,99 р.",
            imageUrl: "https://picsum.photos/seed/6/200",
        },
        {
            id: 7,
            name: "Телевизор 7",
            price: "244,99 р.",
            imageUrl: "https://picsum.photos/seed/7/200",
        },
        {
            id: 8,
            name: "Телевизор 8",
            price: "399,99 р.",
            imageUrl: "https://picsum.photos/seed/8/200",
        },
        {
            id: 9,
            name: "Телевизор 9",
            price: "444,99 р.",
            imageUrl: "https://picsum.photos/seed/9/200",
        },
    ],
};

let buttons = document.querySelectorAll('button');
let container = document.querySelector('.products');

buttons.forEach(function (but) {
    but.addEventListener('click', clickHandler)
})

/**
 * Эта функция должна вызываться при клике по кнопкам.
 * @param {MouseEvent} event
 */
function clickHandler(event) {
    //вам нужно очищать содержимое .products
    
    //в showCategory надо передать строку с типом категории, тип берите
    //из атрибута data-type у кнопки, по которой кликнули.
    container.innerHTML = '';
    let category = event.target.dataset.type;
    let content = showCategory(category);
    container.innerHTML = content;
    
}

// объединил showCategory и renderMarkUp в одну функцию, чтобы укоротить код

function showCategory(category) {
    let innerContent = '';
    for (let item of products[category]) {
        innerContent += `<div className="product">
                        <div>${item.name}</div>
                        <img src="${item.imageUrl}" alt="">
                        <div>${item.price}</div>
                        <a href="https://example.com/producs/${item.id}">Подробнее</a>
                        </div>`
    }
    return innerContent;
}

