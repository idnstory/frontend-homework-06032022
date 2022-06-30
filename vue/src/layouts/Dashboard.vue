<template>
  <div class="dashboard-wrap">
    <header />
    <div class="dashboard">
      <gnb />
      <router-view
        name="area"
      />
    </div>
  </div>
</template>
<script>
import 'scss/layouts/dashboard.scss';

export default {
  name: 'DashboardLayout',
  data() {
    return {};
  }
};
</script>
