<template>
  <div id="header">
    <div class="container">
      <div class="top-bar">
        <div class="header-logo">
          <div class="logo-icon">
            <img src="@/assets/icons/logo.svg" alt="" />
          </div>
          <div class="logo-content">
            <h1>grocerymart</h1>
          </div>
        </div>
        <div class="nav-bar">
          <ul>
            <li>
              <a href="#">
                Departments
                <img src="@/assets/icons/arrow-down.svg" alt="" />
              </a>
            </li>

            <li>
              <a href="#">
                Grocery
                <img src="@/assets/icons/arrow-down.svg" alt="" />
              </a>
            </li>
            <li>
              <a href="#">
                Beauty
                <img src="@/assets/icons/arrow-down.svg" alt="" />
              </a>
            </li>
          </ul>
        </div>
        <div class="Sign">
          <router-link to="/home/login">Sign In</router-link>
          <router-link to="/home/register">Sign Up</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped></script>

<style lang="scss">
@import 'header.module.scss';
</style>
