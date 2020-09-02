
function RemoveClass(element, className){
  element.classList.remove(className);
}

function AddClass(element, className){
  element.classList.add(className);
}

function ShowMore(elementToToggle, btn, title){
  if(elementToToggle.classList.contains('hide')){
    RemoveClass(elementToToggle, 'hide');
    let span = `Меньше`;
    btn.innerHTML = span;
    AddClass(btn, 'active');
  }else{
    AddClass(elementToToggle, 'hide');
    let span = `${title}`;
    btn.innerHTML = span;
    RemoveClass(btn, 'active');
  }
}


function tabs (tab, tabContents){

  let tabs = document.querySelectorAll(tab);
  let tabContent = document.querySelectorAll(tabContents);

  function abc (a) {
      for(let i = a; i < tabContent.length; i++){
          tabContent[i].classList.add('hide');
          tabs[i].classList.remove('active');      
      }
  }
  abc(1);

  for (let u = 0; u < tabs.length; u++){
      tabs[u].addEventListener('click', () => {
          abc(0);
          tabs[u].classList.add('active');      
          tabContent[u].classList.remove('hide');
      });
  }
}

tabs('.registration-page-tab', '.registration-page-tabs-content form');
tabs('.registration-page-tab', '.registration-page-tabs-content>div');



function spoiler(spoilerTitle, spoilerContent){

  let spoilerTitles = document.querySelectorAll(spoilerTitle);
  let spoilerContents = document.querySelectorAll(spoilerContent);

  for (let i = 0; i < spoilerTitles.length; i++){

    spoilerTitles[i].addEventListener('click', () => {
      
      for (let j = 0; j < spoilerTitles.length; j++){
        if(j==i){
          continue;
        }
        AddClass(spoilerContents[j], 'hide');
        RemoveClass(spoilerTitles[j], 'active');
      }

      if(spoilerTitles[i].classList.contains('active')){
        RemoveClass(spoilerTitles[i], 'active');
        AddClass(spoilerContents[i], 'hide');
      } else {
        AddClass(spoilerTitles[i], 'active');
        RemoveClass(spoilerContents[i], 'hide');
      }
      
    });
  }
}
spoiler('.agreement-page-spoiler-title', '.agreement-page-spoiler-content');

function addBlock(btn, block){

  let button = document.querySelector(btn);
  let blocktoclone = document.querySelector(block);

  button.addEventListener('click', () => {
    let clone = blocktoclone.cloneNode(true);
    let btn = document.createElement('img');
    btn.src = "./img/main/icons/close-icon.png";
    btn.alt = "delete";
    btn.classList.add('quantity-field-delete');
    
    clone.style.marginBottom = "50px";
    clone.insertAdjacentElement('beforeend', btn);
    button.insertAdjacentElement('beforebegin', clone);
    
    clone.addEventListener('click', (e)=>{
      if(e.target.classList.contains('quantity-field-delete')){
        clone.remove();
      }
    });
  });

}

function addSmallBlock(section, btn, parent, block){
    let sectionBlock = document.querySelector(section);
    let button = sectionBlock.querySelector(btn);
    let parentBlock = sectionBlock.querySelector(parent);
    let blocktoclone = parentBlock.querySelector(block);

    button.addEventListener('click', () => {
      let clone = blocktoclone.cloneNode(true);
      let btn = document.createElement('img');
      btn.src = "./img/main/icons/close-icon.png";
      btn.alt = "delete";
      btn.classList.add('quantity-field-delete');
      
      clone.insertAdjacentElement('beforeend', btn);
      parentBlock.insertAdjacentElement('beforeend', clone);

      clone.addEventListener('click', (e)=>{
        if(e.target.classList.contains('quantity-field-delete')){
          clone.remove();
        }
      });
    });
}




let closeSearchWindowBtn =document.querySelector('.close-search-window');
let searchWindow = document.querySelector('.search-window');
let searchBtn = document.querySelector('.search-btn');

searchBtn.addEventListener('click', () => {
  AddClass(searchWindow, 'active');
}); //открыть поле поиска

closeSearchWindowBtn.addEventListener('click', () => {
  RemoveClass(searchWindow, 'active');
}); //закрыть поле поиска







if (window.location.href.indexOf("index") > -1){

  let cookie = document.querySelector('.cookie');
  let cookieBtn = document.querySelector('.cookie .btn');

  let interval = setInterval(() => {
      RemoveClass(cookie, 'hide');
    }, 2000); // появление куки оповещания 

  cookieBtn.addEventListener('click', () => {
    AddClass(cookie, 'hide');
    clearInterval(interval);
  }); // скрытие куки оповещания



  let seeMoreBtn = document.querySelector('.see-more');
  let hiddenBlocks = document.querySelector('.cryosauna-hidden-blocks');

  seeMoreBtn.addEventListener('click', () => { //смотреть больше блоков
    ShowMore(hiddenBlocks, seeMoreBtn, 'Посмотреть еще');
  });

  let swiper = new Swiper('.swiper-container', {
    scrollbar: {
      el: '.swiper-scrollbar',
      hide: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    slidesPerView: 2
  });

}


let upBtn = document.querySelectorAll('.button-up');

if(upBtn){
  document.addEventListener('scroll', () => {

    if(document.documentElement.getBoundingClientRect().y < -550){ // определяем кооординаты когда показывать кнопку button-up
      upBtn.forEach((btn) => {
        RemoveClass(btn,'hide');
        btn.addEventListener('click', (e) => { //перелистываем страничку наверх
          e.preventDefault();
          document.documentElement.scrollTo(0,0);
        });
      });
    }
  });
}



if (window.location.href.indexOf("/news.html") > -1){
  let seeMoreBtn = document.querySelector('.see-more');
  let hiddenBlocks = document.querySelector('.news-hidden-blocks');

  seeMoreBtn.addEventListener('click', () => { //смотреть больше блоков
    ShowMore(hiddenBlocks, seeMoreBtn, 'Еще новости');
  });
}


if (window.location.href.indexOf("/articles.html") > -1){
  let seeMoreBtn = document.querySelector('.see-more');
  let hiddenBlocks = document.querySelector('.articles-hidden-blocks');

  seeMoreBtn.addEventListener('click', () => { //смотреть больше блоков
    ShowMore(hiddenBlocks, seeMoreBtn, 'Еще статьи');
  });
}

if(document.querySelector('#map')){
  ymaps.ready(function () {
    let map = new ymaps.Map('map', {
        center: [55.726315, 37.399399],
        zoom: 13,
        controls: []
    });
  
    let mark = ymaps.templateLayoutFactory.createClass('<img src="img/contacts/mark-icon.png" alt="mark">');
  
    let markonmap = new ymaps.Placemark(
        [55.726315, 37.399399], {
            hintContent: 'Наш офис'
        }, {
            iconLayout: mark,
            iconShape: {
                type: 'Rectangle',
                coordinates: [
                    [-25, -25], [25, 25]
                ]
            }
        }
    );
  
    map.geoObjects.add(markonmap);
    map.panes.get('ground').getElement().style.filter = 'grayscale(100%)';
  
  });
}



let InputsToToggle =  (px) => {

  let inputDivs = document.querySelectorAll('.input-class');
  let hiddenInput = document.querySelectorAll('.shown-on-input');
  let showninput = document.querySelectorAll('.hidden-on-input');
  let inputs = document.querySelectorAll('.input-class input');

  if(hiddenInput){
    for(let i = 0; i < inputs.length; i++){
      inputDivs[i].addEventListener('click', () => {
        AddClass(showninput[i], 'hide');
        inputDivs[i].style.padding = `10px 10px 10px ${px}`;
        if(hiddenInput[i]){
          RemoveClass(hiddenInput[i], 'hide');
        }
      });
    }
  }
} // инпуты на страничке контакты
try{
  InputsToToggle('70px');
}catch(error){
  false
}

if(document.documentElement.offsetWidth < 992){
  InputsToToggle('40px');
}

try{
  inputBorderColor('.input-class input','.input-class');
}catch(error){
  false
}

if ((window.location.href.indexOf("/autorization") > -1) || (window.location.href.indexOf("/agreement") > -1) || (window.location.href.indexOf("/registration") > -1)){
  let password = document.querySelectorAll('input[name="password"]');
  let eye = document.querySelectorAll('.see-password');
  let u = "";

  for(let i = 0; i< password.length; i++){
    password[i].addEventListener('input', function(){
      if(eye[i].classList.contains('doNotShow')){
        u += password[i].value;
        password[i].value = password[i].value.replace(/./g, '*');
      }
    });
  }

}

if (window.location.href.indexOf("/autorization") > -1){

  let login = document.querySelector('input[type="email"]');
  let password = document.querySelectorAll('input[name="password"]');
  let check = document.querySelector('input[type=checkbox]');
  let button = document.querySelector('.autorization-page form .btn');
  let u = "";


  if (localStorage.getItem('user')){
      check.setAttribute('checked', 'checked');
      let person = JSON.parse(localStorage.getItem('user'));
      login.value = person.login;
      password.value = person.password;
  }

  button.addEventListener('click', function(){
      if(check.checked){
          let object = {
          login: login.value,
          password: u
          }
          let json = JSON.stringify(object);
          localStorage.setItem('user', json);
      } else {
          localStorage.clear();
      } 
  });
}



if ((window.location.href.indexOf("agreement") > -1) 
|| (window.location.href.indexOf("registration") > -1)){

  let tab = document.querySelectorAll('.registration-page-tab')
  if(document.documentElement.offsetWidth < 450){
    tab[0].textContent = "Физ. лицо"
    tab[1].textContent = "Юр. лицо"
  }

  let file = document.querySelector('.file-attach-input');
  file.addEventListener('change', (e) => {
    document.getElementById("file-name").innerHTML = e.target.files[0].name;
  });
  
}


if (window.location.href.indexOf("/choosen") > -1){
 
  if(document.documentElement.offsetWidth > 992){
    let swiper = new Swiper('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      slidesPerView: 4
    });
  } else if(document.documentElement.offsetWidth < 992 && document.documentElement.offsetWidth >= 767) {
    let swiper = new Swiper('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      slidesPerView: 3
    });
  }else if(document.documentElement.offsetWidth < 767 && document.documentElement.offsetWidth > 576) {
    let swiper = new Swiper('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      slidesPerView: 2
    });
  }
  else if(document.documentElement.offsetWidth < 576) {
    let swiper = new Swiper('.swiper-container', {
      scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
      },
      slidesPerView: 1
    });
  }

  let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  let galleryTop = new Swiper('.gallery-top', {
    spaceBetween: 10,
    thumbs: {
      swiper: galleryThumbs
    }
  });

}

let requestBtn = document.querySelectorAll('.cart-page-choosen-item-navigation-block .blue-button');
if(requestBtn){
  requestBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      btn.parentElement.style.padding = '120px 30px';
      btn.parentElement.style.textAlign = 'center';
      btn.parentElement.innerHTML = " Менеджер по продажам получил ваш заказ. На ваш e-mail (render.ya@gmail.com) отправлено письмо с подтверждением. Спасибо!"
    });
  });
}


if ((window.location.href.indexOf('personal-cabinet') > -1) || (window.location.href.indexOf('delivery') > -1)){
  let seeMoreBtn = document.querySelectorAll('.see-more');
  let hiddenBlocks = document.querySelectorAll('.personal-cabinet-hidden-notes');

  for(let i = 0; i < hiddenBlocks.length; i++){
    seeMoreBtn[i].addEventListener('click', () => { //смотреть больше блоков
      ShowMore(hiddenBlocks[i], seeMoreBtn[i], 'Посмотреть еще');
    });
  }


}


//menu
let slinky = $('.js-menu').slinky({
  title: true
});

document.querySelector('.burger').addEventListener('click', (e)=>{
  e.preventDefault();
  document.querySelector('.menu__wrapper').classList.add('active');
});

function closeMenu(btn, parent){
  let button = document.querySelectorAll(btn);
  let parentBlock = document.querySelector(parent);

  button.forEach(b=>{
    b.addEventListener('click', ()=>{
      parentBlock.classList.remove('active');
    });
  })
}

closeMenu('.close-menu', '.menu__wrapper');
//menu


function inputBorderColor(input, border = "input"){
  let inputs = document.querySelectorAll(input);
  let borderBlock = document.querySelectorAll(border);


  if(inputs){
    for(let i = 0; i < inputs.length; i++){
      inputs[i].setAttribute('autocomplete', 'off');
      inputs[i].addEventListener('input', () => {
        borderBlock[i].style.borderColor = "#008de3";
        if(inputs[i].value === ""){
          borderBlock[i].style.borderColor = "#ff9a00";
        }
      });
    }
  }
}
inputBorderColor('input');


if (window.location.href.indexOf('delivery') > -1) {
  
    addSmallBlock('.delivery-page', '.add-quantity-field', '.quantity-fields-adding', '.quantity-field');

    try{
      addSmallBlock('.delivery-page', '.add-quantity-field', '.quantity-fields-adding-mobile', '.quantity-field');
    }catch(error){
      false
    }


    // inputBorderColor('.flatpickr','.input-class-calendar');

    let parent = document.querySelector(".input-class-calendar-1");
    let parent2 = document.querySelector(".input-class-calendar-2");
    
    document.querySelectorAll('.input-class-calendar').forEach(calendar => {
      calendar.addEventListener('click', () => {
        calendar.classList.add('active');
      });
    });
    
    flatpickr.localize(flatpickr.l10ns.ru);
    if(document.documentElement.offsetWidth > 576){
      flatpickr(".flatpickr-1",{
        positionElement: parent
      });
      flatpickr(".flatpickr-2",{
        positionElement: parent2
      });
    }else{
      flatpickr(".flatpickr-1");
      flatpickr(".flatpickr-2");
    }



}




for (const dropdown of document.querySelectorAll(".custom-select-wrapper")) {
  dropdown.addEventListener('click', function() {
      this.querySelector('.custom-select').classList.toggle('open');
  })
}

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener('click', function() {
      if (!this.classList.contains('selected')) {
          this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
          this.classList.add('selected');
          this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      }
  });
}

window.addEventListener('click', function(e) {
  for (const select of document.querySelectorAll('.custom-select')) {
      if (!select.contains(e.target)) {
          select.classList.remove('open');
      }
  }
});






try{
  let storageFormat = document.querySelector('.storage-format-quantity-fields');
  let hiddenBlock = document.querySelector('.quantity-fields-adding-mobile');
  

  if(storageFormat){
    addBlock('.item-page .add-quantity-field', '.storage-format-quantity-fields');
  }else{
    addBlock('.item-page .add-quantity-field', '.item-page form .bordered');
  }


  if(document.documentElement.offsetWidth < 991){
    console.log(hiddenBlock)
    addBlock('.item-page .add-quantity-field', '.quantity-fields-adding-mobile');
  } 

} catch(error){
    false
}


$(document).ready(function () {
  $('#cssmenu li.has-sub > a').on('click', function(){
      $(this).removeAttr('href');
      var element = $(this).parent('li');
      if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('li').removeClass('open');
          element.find('ul').slideUp();
      }
      else {
          element.addClass('open');
          element.children('ul').slideDown();
          element.siblings('li').children('ul').slideUp();
          element.siblings('li').removeClass('open');
          element.siblings('li').find('li').removeClass('open');
          element.siblings('li').find('ul').slideUp();
      }
  });

  $('#cssmenu>ul>li.has-sub>a').append('<span class="holder"></span>');
});


document.querySelector('.desktop-menu').addEventListener('click', (e)=> {
  e.preventDefault();
  document.querySelector('#cssmenu').classList.add('active');
})


closeMenu('.close-menu', '#cssmenu');

if ((document.documentElement.offsetWidth < 992) && (document.querySelector('#cssmenu').classList.contains('active'))){
  document.querySelector('#cssmenu').classList.remove('active');
  document.querySelector('.menu__wrapper').classList.add('active');
}


document.querySelectorAll('.trash').forEach(trash=>{
  trash.addEventListener('click', ()=>{
    if(document.documentElement.offsetWidth > 576){
      trash.parentNode.parentNode.parentNode.remove();
    } else {
      trash.parentNode.parentNode.remove();
    }
  });
}); //УДАЛЕНИЕ АЙТЕМА ИЗ КОРЗИНЫ


let personalCabinetInfoParent = document.querySelectorAll('.personal-cabinet-page .bordered>.personal-cabinet-note');
let personalCabinetInfoHiddenBlock = document.querySelectorAll('.personal-cabinet-page .bordered .personal-cabinet-note-hidden-change-info');
let  personalCabinetInfoEditBtn = document.querySelectorAll('.personal-cabinet-page .bordered .change-info');

for(let i = 0; i < personalCabinetInfoParent.length; i++){
  personalCabinetInfoEditBtn[i].addEventListener('click', () => {
    personalCabinetInfoEditBtn[i].src = "./img/main/icons/close-icon.png";
    RemoveClass(personalCabinetInfoHiddenBlock[i], 'hide');
    let saveBtn = personalCabinetInfoHiddenBlock[i].querySelector('.btn');
    let input = personalCabinetInfoHiddenBlock[i].querySelector('input');
    input.addEventListener('change',() => {
      let value = input.value;
      saveBtn.addEventListener('click', () => {
        let newValue = personalCabinetInfoParent[i].querySelector('.value');
        newValue.textContent = value;
        personalCabinetInfoEditBtn[i].src = "./img/edit.png";
        AddClass(personalCabinetInfoHiddenBlock[i], 'hide');
      });
    });
  });
}


let eye = document.querySelectorAll('.see-password');

eye.forEach(eyeball => {
  eyeball.addEventListener('click', () => {
    if(eyeball.classList.contains('doNotShow')){
      eyeball.src = "./img/profile/eye-icon.png"
      eyeball.classList.remove('doNotShow');
    }else{
      eyeball.src = "./img/profile/closed-eye-icon.png"
      eyeball.classList.add('doNotShow');
    }
  });
});

if ((document.documentElement.offsetWidth < 576) && document.querySelector('input.calendar')){
    $(function() {
      $('input.calendar').pignoseCalendar({
        lang: 'ru',
        buttons: true,
        modal: true, 
        week: 1
      });
    });
}