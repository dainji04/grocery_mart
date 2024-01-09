<template>
  <div id="app">
    <DefaultHeader />
    <BodyContent />
    <Footer />
    <h1>Hello world</h1>
  </div>
</template>

<script>
import DefaultHeader from '@/components/layout/components/header/header.vue';
import BodyContent from '@/components/layout/components/body/body.vue';
import Footer from '@/components/layout/components/footer/footer.vue';
import login from '@/components/templates/login/login-form.vue';
import signIn from '@/components/templates/sign-in/sign-in.vue';

export default {
  name: 'app',
  components: {
    DefaultHeader,
    BodyContent,
    Footer,
    login,
    signIn,
  },
};
</script>

<style lang="scss">
@import 'Global.module.scss';
</style>
