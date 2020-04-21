document.querySelectorAll('.menu-click').forEach(function(item) {
    item.addEventListener('click', function(e) {
        let target = e.target;
        let targetPopup = target.nextElementSibling;
        let activePopup = document.querySelector('.popup-active');
        if (activePopup) {
            activePopup.classList.remove('popup-active');
        }
        if (targetPopup !== activePopup) {
            targetPopup.classList.add('popup-active');
        }
    });
});

document.querySelectorAll('.popup-info').forEach(function(item) {
    item.addEventListener('click', function(event) {
        if (event.target.classList.contains('popup-info__btn')) {
            item.classList.remove('popup-active');
        }
    })
})
const productInfo = [{
        imgUrl: '../images/imgCards/image 28.jpg',
        title: 'Кватро формаджіо',
        text: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        price: '200'
    },
    {
        imgUrl: '../images/imgCards/image 29.jpg',
        title: 'Філадельфія селмон',
        text: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        price: '300'
    },
    {
        imgUrl: '../images/imgCards/image 28.jpg',
        title: 'Карбонара',
        text: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        price: '400'
    },
    {
        imgUrl: '../images/imgCards/image 28.jpg',
        title: 'Кватро формаджіо',
        text: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        price: '200'
    },
    {
        imgUrl: '../images/imgCards/image 29.jpg',
        title: 'Філадельфія селмон',
        text: 'Dough, mozzarella, barrel, eggs, Parmesan cheese',
        price: '300'
    },
    {
        imgUrl: '../images/imgCards/image 28.jpg',
        title: 'Карбонара',
        text: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
        price: '300'
    },

];



function createCard() {
    const card = taskCard.querySelector('.card');
    const cardImg = taskCard.querySelector('.card__img');
    const cardTitle = taskCard.querySelector('.card__title');
    const cardText = taskCard.querySelector('.card__text');
    const cardPrice = taskCard.querySelector('.card__price');
    const cardBuy = taskCard.querySelector('.card__buy');

    cardImg.src = this.imgUrl;
    cardTitle.textContent = this.title;
    cardText.textContent = this.text;
    cardPrice.textContent = this.price;

    return card;
}
const cards = document.querySelector('.cards');
const taskCard = document.querySelector('#task-card').content;
// console.log(taskCard);
for (let i = 0; i < productInfo.length; i++) {
    const cardItem = createCard.bind(productInfo[i])();
    const cardCopy = cardItem.cloneNode(true);
    // cardCopy.addEventListener('click', (event) => {
    //     if (event.target.classList.contains('card__price')) event.target.textContent *= 2
    // })
    // cardCopy.addEventListener('click', addProduct);
    cards.appendChild(cardCopy)
        // console.log(cardCopy)
}

document.querySelectorAll('.card').forEach(function(item) {
        item.addEventListener('click', function(event) {
            let number = event.target.textContent
            const Price = taskCard.querySelector('.card__price');
            const addPrice = Price.textContent
            const enent = event.target.Price
            if (event.target.classList.contains('card__buy'))
                console.log(event.target.addPrice);
        });
    })
    // function addProduct(event) {
    //     const numberPrice = taskCard.querySelector('.card__price');

//     if (event.target.classList.contains('card__buy')) {
//         console.log(numberPrice.textContent)
//     }
// }


// var productInfo = {
//     imgUrl: '../images/imgCards/image 28.jpg',
//     title: 'Карбонара',
//     text: 'Dough, Mozzarella, Cheddar, Blue, Parmesan',
//     price: '400'
// };
// const cardItem = createCard(productInfo)
// cards.appendChild(cardItem);

// const clonedCard = cardItem.cloneNode(true);
// cards.appendChild(clonedCard)
// console.log(cards);



// function createCard(product) {
//     const card = document.createElement('div');
//     card.classList.add('card');
//     // cards.appendChild(card);
//     const cardImg = document.createElement('img');
//     cardImg.classList.add('card__img');
//     // cardImg.src = './images/imgCards/image 26.jpg';
//     cardImg.src = product.imgUrl
//     card.appendChild(cardImg);
//     const cardTitle = document.createElement('h2');
//     cardTitle.classList.add('card_title');
//     cardTitle.textContent = product.text
//     card.appendChild(cardTitle);
//     const cardPrice = document.createElement('p');
//     cardPrice.classList.add('card__price');
//     cardPrice.textContent = product.price;
//     card.appendChild(cardPrice);
//     const cardBuy = document.createElement('img');
//     cardBuy.classList.add('card__buy');
//     // cardBuy.addEventListener('click', addProduct)
//     cardBuy.src = './images/корзина.jpg';
//     card.appendChild(cardBuy);

//     return card
// }
// for (let i = 0; i < productInfo.length; i++) {
//     const cardItem = createCard(productInfo[i]);
//     cards.appendChild(cardItem);
// }
// const cardss = document.querySelector('.cards');
// const cardd = cardss.children
// console.log(cardd);


// function addProduct() {
//     const cardPrice = document.querySelector('.card__price')
//         // console.log(cardPrice.textContent)
// }
// console.log(cards)