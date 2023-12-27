<template>
  <div id="app">
    <DefaultHeader />
    <BodyContent />
  </div>
</template>

<script>
import DefaultHeader from '@/components/layout/components/header/header.vue';
import BodyContent from '@/components/layout/components/body/body.vue';
export default {
  name: 'app',
  components: {
    DefaultHeader,
    BodyContent,
  },
};
</script>

<style lang="scss">
@import 'Global.module.scss';

/* class="h-screen w-full flex justify-center items-center bg-[#dbeafe]" */
</style>
