<template>
  <v-app>
    <v-content>
      <BudgetTracker/>
    </v-content>
  </v-app>
</template>

<script>
import BudgetTracker from './components/BudgetTracker';

export default {
  name: 'App',
  components: {
    BudgetTracker,
  }
};
</script>
