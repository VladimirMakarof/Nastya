<template>
    <section class="footer__section">
            <div class="main">
                <ul class="footer__list">
                    <li>
                        <a class="footer__list-link" href="#">Главная</a>
                    </li>
                    <li>
                        <a class="footer__list-link" href="#">О компании</a>
                    </li>
                    <li>
                        <a class="footer__list-link" href="#">Услуги</a>
                    </li>
                    <li>
                        <a class="footer__list-link" href="#">Отзывы о нас</a>
                    </li>
                    <li>
                        <a class="footer__list-link" href="#">Контакты</a>
                    </li>
                    <li>
                        <a class="footer__list-link" href="#">Войти</a>
                    </li>
                </ul>
                <div class="sign_up-block">
                    <div class="sign_up-form">
                        <h1 class="footer-h1">Запишитесь на диагностику</h1>
                        <label for="name"></label>
                        <input class="sign_up-input" type="text" placeholder="*Ваше имя:"
                         name="name" required>
                        <label for="name"></label>
                        <input class="sign_up-input" type="number" placeholder="*Телефон:"
                         name="phone" required>
                        <button type="submit" class="registerbtn">Отправить заявку</button>
                    </div>
                    <div class="callback">
                        <h3 class="callback-h3">Или позвоните по телефону:</h3>
                        <a class="header__phone" href="tel:+78142332211">+7(814)-233-22-11</a>
                        <a class="header__phone" href="tel:+78142332211">+7(814)-233-22-11</a>
                        <p class="callback-p">Пн-Пт с 9:00 до 18:00</p>

                        <div class=" social__media-icons">
                            <a class="facebookBtn smGlobalBtn" href="#">
                                <i class="fab fa-facebook-f"></i></a>
                            <a class="VkBtn smGlobalBtn" href="#"><i class="fab fa-vk"></i></a>
                            <a class="InstagramBtn smGlobalBtn" href="#">
                                <i class="fab fa-instagram"></i></a>
                            <a class="YoutubeBtn smGlobalBtn" href="#">
                                <i class="fab fa-youtube"></i></a>

                        </div>

                    </div>
                </div>

            </div>
        </section>
</template>
