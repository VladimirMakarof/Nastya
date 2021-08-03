<template>
  <div class="main-contacts">
    <ul class="breadcrumb">
      <li><a href="#">Главная</a></li>
      <li>Контакты</li>
    </ul>
    <h1 class="comment-h1">Контакты.</h1>
    <div class="section-contacts">
      <div class="contacts mr-25">
      <div @click="click_spb" class="spb contacts-city">
      <h2 class="contacts-h2">Санкт-Петербург.</h2>
      <p class="contacts-number mb-15">+ 7 (123) 123-45-67</p>
      </div>
      <div @click="click_msk" class="msk contacts-city">
      <h2 class="contacts-h2">Москва.</h2>
      <p class="contacts-number mb-15">+ 7 (123) 123-45-67</p>
      </div>
      <div @click="click_kaz" class="kaz contacts-city">
      <h2 class="contacts-h2">Казань.</h2>
      <p class="contacts-number mb-15">+ 7 (123) 123-45-67</p>
      </div>
      <p class="contacts-p">
      <i class="far fa-clock mb-15"></i>Прием звонков: с 9:00 до 20:00 (Пн-Пт)
      </p>
      <div class="contacts-requisites ">
      <h2 class="contacts-h2">Реквизиты компании.</h2>
      <p class="contacts-address-p">
      ООО "Название компании" Юридический адрес: 196247, Россия, Санкт-Петербург, Ленинский просп.,
      151 ОГРН 5130021071233
      </p>
      </div>
      </div>

      <div id="spb" class="contacts-map">
          <div class="contacts-address">
              <h2 class="contacts-h2">Адрес.</h2>
              <p class="contacts-address-p mb-15">
                  196247, Россия, Санкт-Петербург, Ленинский просп.,
                   151, офис 711. Местный телефон: 509
              </p>
          </div>
          <iframe
              src="https://yandex.ru/map-widget/v1/?um=constructor%3A5ddbb98ff02298755f
              56af6c1dcd7f1cfac1e417b6ffb2969b302365efa68050&amp;source=constructor"
              width="500" height="400" frameborder="0"></iframe>
      </div>

      <div id="msk" class="contacts-map">
          <div class="contacts-address">
              <h2 class="contacts-h2">Адрес.</h2>
              <p class="contacts-address-p mb-15">
                  196247, Россия, Москва, ул. Николаевская,
                   4/5, офис 203. Местный телефон: 509
              </p>
          </div>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Aeb0b10d2e0cc9d43a04d2
          a5bbe55bee24d52b31ae67e1b26c8b8c8d9818cd602&amp;source=constructor" width="500"
           height="400" frameborder="0"></iframe>
      </div>

      <div id="kaz" class="contacts-map">
          <div class="contacts-address">
              <h2 class="contacts-h2">Адрес.</h2>
              <p class="contacts-address-p mb-15">
                  196247, Россия, Казань, ул. Яруллина,
                   51кГ, офис 203. Местный телефон: 509
              </p>
          </div>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A21f5858
          72f07aef393fa1f7df7a223cc884c8f2be1450da8bec2069b4b8c68da&amp;source=constructor" 
          width="500" height="400" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      click_spb: function(){
        document.querySelector('#msk').style.display = 'none';
        document.querySelector('#kaz').style.display = 'none';
        return document.querySelector('#spb').style.display = 'block';
      },
      click_msk: function(){
        document.querySelector('#spb').style.display = 'none';
        document.querySelector('#kaz').style.display = 'none';
        return document.querySelector('#msk').style.display = 'block';
      },
      click_kaz: function(){
        document.querySelector('#spb').style.display = 'none';
        document.querySelector('#msk').style.display = 'none';
        return document.querySelector('#kaz').style.display = 'block';
      },
    };
  }
};
</script>

<style scoped>
#spb{
  display:block;
}
#msk, #kaz{
  display:none;
}
</style>