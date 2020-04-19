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

function createCard() {

}

{
    /* <div class="card">
    <img src="./images/imgCards/image 26.jpg" alt="">
    <h3 class="card__title">Quattro formaggi</h3>
    <p class="card__text">Dough, Mozzarella, Cheddar, Blue, Parmesan</p>
    </div> */
}