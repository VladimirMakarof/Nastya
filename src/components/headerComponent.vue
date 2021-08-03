<template>
<header class="header"
 style="background-image: linear-gradient(to bottom, rgba(18, 22, 48, 0.52),
 rgba(106, 80, 175, 0.73)), url('assets/img/1.jpg')">
<div class="container">
<div class="header__inner">
<a class="logo_name" href="#" alt="logo">
Анастасия Макарова
</a>
<nav class="header__menu">
<ul class="menu__list">
<li class="menu__list-item">
    <router-link class="menu__list-link" to="/">Главная</router-link>
</li>
<li class="menu__list-item">
     <router-link class="menu__list-link" key="/about" to="/about">О компании</router-link>
</li>
<li class="menu__list-item">
    <!-- <a class="menu__list-link" href="pages/uslugi.html">Услуги</a> -->
    <router-link class="menu__list-link" to="">Услуги</router-link>
</li>
<li class="menu__list-item">
    <!-- <a class="menu__list-link" href="pages/otzyvy.html">Отзвы</a> -->
    <router-link class="menu__list-link" to="">Отзвы</router-link>
</li>
<li class="menu__list-item">
    <!-- <a class="menu__list-link" href="pages/kontakty.html">Контакты</a> -->
    <router-link class="menu__list-link" to="/contact">Контакты</router-link>
</li>
<li class="menu__list-item" type="button"
    data-toggle="modal" data-target="#login-modal">
<a class="menu__list-link"
 onclick="document.getElementById('id01').style.display='block'">Войти</a>
</li>
</ul>
<!-- form -->
<div class="modal fade" id="login-modal" tabindex="-1"
 role="dialog" aria-labelledby="myModalLabel" aria-hidden="true"
  style="display: none;">
<div class="modal-dialog">
    <div class="loginmodal-container">
        <h1>Login to Your Account</h1><br>
        <form>
            <input type="text" name="user" placeholder="Username">
            <input type="password" name="pass" placeholder="Password">
            <input type="submit" name="login"
            class="login loginmodal-submit" value="Login">
        </form>
        <div class="login-help">
            <a href="#">Register</a> - <a href="#">Forgot Password</a>
        </div>
    </div>
</div>
</div>
</nav>
<div id="id01" class="modal">
<form class="modal-content animate">
<div class="imgcontainer">
    <span onclick="document.getElementById('id01').style.display='none'"
    class="close" title="Close Modal">×</span>
</div>
<div class="container-form">
    <label for="uname"><b>Имя пользователя</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required>

    <label for="psw"><b>Пароль</b></label>
    <input type="password"
        placeholder="Enter Password" name="psw" required>

    <button class="button" type="submit">Войти</button>
    <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
        <span class="psw">Forgot <a href="#">password?</a></span>
    </label>
</div>
<!-- <div class="container-form" style="background-color:#f1f1f1">
    <button type="button" onclick="document.getElementById('id01').style.display='none'"
        class="cancelbtn">Отмена</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
</div> -->
</form>
</div>
<!-- </nav> -->

<!-- <div class="user-nav">
<a class="user-nav__link" href="#">Войти</a>
<a class="user-nav__link" href="#">Зарегистрироваться</a>
</div> -->
</div>

</div>

</header>
</template>
