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
      <div class="content__header">
        <div class="content__title">
          <h3>Browse Categories</h3>
        </div>
        <div class="content__listItem">
          <div class="content__item">
            <a href="#">
              <article>
                <div class="content__imgItem">
                  <img src="@/assets/img/product/item-1.png" alt="" />
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
              <article>
                <div class="content__imgItem">
                  <img src="@/assets/img/product/item-1.png" alt="" />
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
              <article>
                <div class="content__imgItem">
                  <img src="@/assets/img/product/item-1.png" alt="" />
                </div>
                <div class="content__infoItem">
                  <h3>$24-$150</h3>
                  <p>New sumatra mandeling coffe blend</p>
                </div>
              </article>
            </a>
          </div>
        </div>
      </div>
      <div class="content__body"></div>
    </div>
  </div>
</template>

<script scoped></script>

<style lang="scss">
@import 'body.module.scss';
</style>
