<template>
  <div id="app">
    <DefaultHeader />
    <BodyContent />
    <Footer />
  </div>
</template>

<script>
import DefaultHeader from '@/components/layout/components/header/header.vue';
import BodyContent from '@/components/layout/components/body/body.vue';
import Footer from '@/components/layout/components/footer/footer.vue';
import Login from '@/components/templates/login/login.vue';
import Register from '@/components/templates/register/register.vue';

export default {
  name: 'app',
  components: {
    DefaultHeader,
    BodyContent,
    Footer,
    Login,
    Register,
  },
};
</script>

<style lang="scss">
@import 'Global.module.scss';
</style>
