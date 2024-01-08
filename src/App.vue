<template>
  <div id="app">
    <!-- <DefaultHeader />
    <BodyContent />
    <Footer /> -->
    <login />
  </div>
</template>

<script>
import DefaultHeader from '@/components/layout/components/header/header.vue';
import BodyContent from '@/components/layout/components/body/body.vue';
import Footer from '@/components/layout/components/footer/footer.vue';
import login from '@/components/templates/login/login-form.vue';
export default {
  name: 'app',
  components: {
    DefaultHeader,
    BodyContent,
    Footer,
    login,
  },
};
</script>

<style lang="scss">
@import 'Global.module.scss';
</style>
