// Найти нужные узлы
const popupButton = document.querySelector('.popup-menu__button');
// const popupWrapper = document.querySelector('popup-menu')
const popupMenu = document.querySelector('.popup-menu__list');

console.log(popupButton);
//Выполним функцию клика по кнопке

popupButton.addEventListener ('click', handleMenu);

//Функция, которая показывает и скрывает поп-ап
function handleMenu () {
    popupMenu.classList.toggle('hide-popup');
}

// Функция при клике на любое место экрана
// document.addEventListener('click', hidePopup);

// function hidePopup(el) {
//     //Проверяем, есть ли внутри того, по чему кликнули поп-ап меню или кнопка
//     let targetInside = popupWrapper.contains(el.target);
//     //Если нет, то прячем меню
//     if(!targetInside) {
//         popupMenu.classList.add('hide-popup');
//     }
//     else {
//         return;
//     }
// }