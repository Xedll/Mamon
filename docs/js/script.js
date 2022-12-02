// @ts-nocheck
/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/
"use strict";

const team = {
   count: 0,
   info: [
      {
         name: 'Vadim',
         description: 'Managing Director',
         img: './img/icons/teamPage/Group.png',
      }, {
         name: 'Sergey',
         description: 'Technology Director',
         img: './img/icons/teamPage/Group-1.png',
      }, {
         name: 'Andrey',
         description: 'Front-end Developer',
         img: './img/icons/teamPage/Group-2.png',
      }, {
         name: 'Alex',
         description: 'Front-end Developer',
         img: './img/icons/teamPage/Group-3.png',
      }, {
         name: 'Agneshka',
         description: 'Mobile Developer',
         img: './img/icons/teamPage/Group-4.png',
      }, {
         name: 'Dmitry',
         description: 'Back-end Developer',
         img: './img/icons/teamPage/Group-5.png',
      }, {
         name: 'Artyom',
         description: 'Back-end Developer',
         img: './img/icons/teamPage/Group-6.png',
      }, {
         name: 'Evgeny',
         description: 'Product Designer',
         img: './img/icons/teamPage/Group-7.png',
      }, {
         name: 'Tom',
         description: 'Product Designer',
         img: './img/icons/teamPage/Group-8.png',
      },
   ]
}
const clients = {
   count: 0,
   info: [
      { img: './img/icons/clientsPage/logo.png' },
      { img: './img/icons/clientsPage/logo-1.png' },
      { img: './img/icons/clientsPage/logo-2.png' },
      { img: './img/icons/clientsPage/logo-3.png' },
      { img: './img/icons/clientsPage/logo-4.png' },
      { img: './img/icons/clientsPage/logo-5.png' },
      { img: './img/icons/clientsPage/logo-6.png' },
      { img: './img/icons/clientsPage/logo-7.png' },
      { img: './img/icons/clientsPage/logo-8.png' },
      { img: './img/icons/clientsPage/logo-9.png' },
      { img: './img/icons/clientsPage/logo-10.png' },
      { img: './img/icons/clientsPage/logo-11.png' },
   ]
}
const windowWidth = window.matchMedia('(max-width:800px)')

const showSliders = function (width) {
   if (width.matches) {
      document.querySelector('.team__slider').classList.remove('disabled')
      document.querySelector('.team__grid').classList.add('disabled')

      document.querySelector('.clients__slider').classList.remove('disabled')
      document.querySelector('.clients__grid').classList.add('disabled')
   } else {
      document.querySelector('.team__grid').classList.remove('disabled')
      document.querySelector('.team__slider').classList.add('disabled')

      document.querySelector('.clients__grid').classList.remove('disabled')
      document.querySelector('.clients__slider').classList.add('disabled')
   }
}


const showTeam = function () { //Показ информации слайдера
   document.querySelector('.slider__title').textContent = team.info[team.count].name
   document.querySelector('.slider__description').textContent = team.info[team.count].description
   document.querySelector('.slider__img').setAttribute('src', team.info[team.count].img)
}

const showClients = function () {
   document.querySelector('.sliderClients__img').setAttribute('src', clients.info[clients.count].img)
}

document.querySelectorAll('.team__slider button').forEach((item, index) => { //Измение каунтера для слайдера команды
   if (item.className == 'slider__next') {
      item.onclick = () => {
         if (team.count >= team.info.length - 1) {
            team.count = 0
         } else {
            team.count += 1
         }
         showTeam()
      }
   }
   if (item.className == 'slider__previous') {
      item.onclick = () => {
         if (team.count < 1) {
            team.count = team.info.length - 1
         } else {
            team.count -= 1
         }
         showTeam()
      }
   }
})

document.querySelectorAll('.clients__slider button').forEach((item, index) => { //Измение каунтера для слайдера клиентов
   if (item.className == 'sliderClients__next') {
      item.onclick = () => {
         if (clients.count >= clients.info.length - 1) {
            clients.count = 0
         } else {
            clients.count += 1
         }
         showClients()
      }
   }
   if (item.className == 'sliderClients__previous') {
      item.onclick = () => {
         if (clients.count < 1) {
            clients.count = clients.info.length - 1
         } else {
            clients.count -= 1
         }
         showClients()
      }
   }
})


window.onload = () => {
   showTeam()
   showClients()
   showSliders(windowWidth)
   windowWidth.addEventListener('change', showSliders)
}