<template>
  <div id="user-place-holder">
    <img src="https://placewaifu.com/image/713" alt="">
    <div class="detail-user">
      <div>
        <h3>My Card</h3>
        <p>3D artist</p>
      </div>
      <div>
        <p>4.7 rating</p>
        <p>4.447 views</p>
        <p>478 students</p>
      </div>
      <p v-show="isShow">David Grant has been making video games for a living for more than 14 years as a Designer, Producer, Creative
        Director, and Executive Producer, creating games for console, mobile, PC and Facebook. </p>
      <div class="showmore" @click = "isShow = !isShow">
        <p>Show more</p>
      </div>
    </div>
  </div>
</template>
  
<script>

export default {
  data() {
    return {
      isShow: false
    }
  }
}

</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

* {
  font-family: 'poppins';
}

#user-place-holder {
  display: inline-flex;
  background-color: #fff;
  width: 32rem;
  padding: 3rem;
  gap: 1rem;
  align-items: flex-start;
}

img {
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  border: 11px solid #E6EFFA;
}

.detail-user {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 1.75rem;
}

.detail-user div,
.detail-user p {
  color: #1C2B62;
}

.detail-user div:first-child {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.detail-user div:nth-child(2) {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
}

.detail-user div h3 {
  margin: 0;
  font-size: 1.625rem;
  font-weight: 700;
  line-height: normal;
}

.detail-user div p {
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
}

.detail-user p {
  width: 20.75rem;
  margin: 0;
  font-size: 1.125rem;
  font-weight: 500;
}

.detail-user div:last-child p {
  width: fit-content;
  border-radius: 0.25rem;
  border: 2px solid #C4CADF;
  padding: 0.625rem;
  display: flex;
  align-items: flex-start;
  gap: 0.625rem;
  cursor: pointer;
}</style>
  