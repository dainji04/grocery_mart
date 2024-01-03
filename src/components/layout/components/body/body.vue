<template>
  <div id="body">
    <div class="body__home">
      <div class="slide">
        <div class="slide__inner">
          <div class="slide__item">
            <a href="#">
              <picture>
                <source media="(max-width: 767.98px)" srcset="@/assets/img/slideshow/item-1-md.png" />
                <img src="@/assets/img/slideshow/item-1.png" alt="" class="slide__img" />
              </picture>
            </a>
          </div>
        </div>
        <div class="slide__page">
          <span class="slide__num">1</span>
          <span class="slide__line"></span>
          <span class="slide__num">5</span>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="content__heading">
        <div class="content__title">
          <h3>Browse Categories</h3>
        </div>
        <div class="content__listItem">
          <div class="content__item">
            <a href="#">
              <article class="content__itemCard">
                <div class="content__imgItem">
                  <img src="@/assets/img/category-item/item-1.png" alt="" />
                </div>
                <div class="content__infoItem">
                  <h3>$24-$150</h3>
                  <p>New sumatra mandeling coffe blend</p>
                </div>
              </article>
            </a>
          </div>
          <div class="content__item">
            <a href="#">
              <article class="content__itemCard">
                <div class="content__imgItem">
                  <img src="@/assets/img/category-item/item-2.png" alt="" />
                </div>
                <div class="content__infoItem">
                  <h3>$37-$160</h3>
                  <p>Espresso arabica and robusta beans</p>
                </div>
              </article>
            </a>
          </div>
          <div class="content__item">
            <a href="#">
              <article class="content__itemCard">
                <div class="content__imgItem">
                  <img src="@/assets/img/category-item/item-3.png" alt="" />
                </div>
                <div class="content__infoItem">
                  <h3>$32-$160</h3>
                  <p>Lavazza top class whole bean coffee blend</p>
                </div>
              </article>
            </a>
          </div>
        </div>
      </div>
      <div class="content__body">
        <div class="body__title">
          <h3 class="heading">Total LavAzza 1320</h3>
        </div>
        <div class="items">
          <div class="item">
            <article class="item__productCard">
              <div class="item__product">
                <img src="@/assets/img/product/item-1.png" alt="product-card_thumb" />
                <button class="item__heartIcon">
                  <img src="@/assets/icons/heart.svg" alt="" />
                </button>
              </div>
              <h3 class="item__heading"></h3>
              <p class="item__subHeading"></p>
              <div class="item__feedback">
                <span class="item__price">$47.00</span>
                <img src="@/assets/icons/star.svg" alt="star" class="item__star" />
                <span class="item__score">4.3</span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped></script>

<style lang="scss">
@import 'body.module.scss';
</style>
