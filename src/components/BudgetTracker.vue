<template>
    <div>
        <div class="grey lighten-3 py-10">
            <div class="d-flex justify-center">
                <div class="display-4">{{budget}}</div>
            </div>
        </div>
        <div class="my-10">
            <div class="d-flex justify-center">
                <v-btn x-large class="my-3" minWidth="200" @click="budget++">ADD</v-btn>
            </div>
            <div class="d-flex justify-center">
                <v-btn x-large class="my-3" minWidth="200" @click="budget--">SUBTRACT</v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BudgetTracker',
    data() {
        return {
            budget: 0
        }
    }
}
</script>

<style>

</style>