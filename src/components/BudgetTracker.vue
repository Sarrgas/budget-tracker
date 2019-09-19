<template>
    <div>
        <div class="grey lighten-3 py-10">
            <div class="d-flex justify-center">
                <div class="display-4">{{budget}}</div>
            </div>
        </div>
        <div class="my-10">
            <div class="d-flex justify-center">
                <InputDialog mode="Add" />
            </div>
            <div class="d-flex justify-center">
                <InputDialog mode="Subtract" />
            </div>
        </div>
    </div>
</template>

<script>
import InputDialog from './InputDialog'

export default {
    name: 'BudgetTracker',
    components: { InputDialog },
    computed: {
        budget() {
            return this.$store.getters.getBudget;
        }
    }
}
</script>

<style>

</style>