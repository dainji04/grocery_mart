<template>
  <div class="login">
    <div class="login__form-left padding center">
      <img src="@/assets/img/auth/intro.svg" alt="" />
      <p class="login__sub-script">The best of luxury brand values, high quality products, and innovative services</p>
    </div>
    <div class="login__form-right padding">
      <div class="login__inner-content center">
        <router-link to="/home" class="login__logo-heading">
          <img src="@/assets/icons/logo.svg" alt="" class="login__logo" />
          <h3 class="login__heading">grocerymart</h3>
        </router-link>
        <h1 class="login__sign-up center">Sign Up</h1>
        <p class="login__sub-sign-up center">Let's create your account and Shop like a pro and save money.</p>
        <form action="./index-logined.html" class="login__form-sign-up">
          <div class="login__email input-form">
            <input type="email" class="login__type-email" placeholder="Email" />
            <img src="@/assets/icons/message.svg" alt="" class="login__email-icon" />
          </div>
          <div class="login__password input-form">
            <input type="password" class="login__type-password" placeholder="Password" />
            <img src="@/assets/icons/lock.svg" alt="" class="login__password-icon" />
          </div>
          <div class="login__confirm-password input-form">
            <input type="password" class="login__type-confirm-password" placeholder="Confirm Password" />
            <img src="@/assets/icons/lock.svg" alt="" class="login__confirm-password-icon" />
          </div>
          <div class="login__confirm-default">
            <label class="login__form-checkbox">
              <input type="checkBox" class="login__check-box" />
              <p class="login__text-default">Set as default card</p>
            </label>
          </div>
          <div class="login__form-btn">
            <button class="login__signUp-btn btn">Sign up</button>
            <button class="login__signUp-google btn">
              <img src="@/assets/icons/google.svg" alt="" />
              <p class="login__text-google-signUp">Sign in with Google</p>
            </button>
          </div>
        </form>
        <div class="login__have-a-account">
          <p class="login__question">You have an account yet?</p>
          <router-link to="/home/login">Sign In</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import 'register.scss';
</style>
