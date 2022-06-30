<template>
  <div class="area-work">
    <div class="page-top">
      <h3 class="pathname">{{ pagePathName }}</h3>
      <div class="button-wrap">
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </div>
    </div>
    <div class="box-wrap">
      <div
        v-for="(item, idx) in box.items"
        :key="'box' + idx"
        class="box"
      >
        <p>{{ item.name }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import 'scss/pages/work.scss';

export default {
  name: 'Work',
  props: {
    box: {
      type: Object,
      default() {
        return this.$store.state.ui.box;
      }
    }
  },
  computed: {
    pagePathName() {
      return 'page path: ' + this.$route.path;
    }
  }
};
</script>
