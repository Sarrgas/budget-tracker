<template>
  <v-dialog
        v-model="dialog"
        width="500"
      >
        <template v-slot:activator="{ on }">
          <v-btn x-large class="my-3" minWidth="200" v-on="on">
            {{title}}
          </v-btn>
        </template>
  
        <v-card>
          <v-card-title
            class="headline grey lighten-2"
            primary-title
          >
            {{title}}
          </v-card-title>
  
          <v-card-text>
            <v-text-field type="number" label="Amount" v-model="amount"></v-text-field>
          </v-card-text>
  
          <v-divider></v-divider>
  
         <v-card-actions>
            <div class="flex-grow-1"></div>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="save">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
export default {
    props: ["mode"],
    data(){
        return {
            dialog: false,
            amount: '',
        }
    },
    computed: {
        title() {
            return this.mode;
        }
    },
    methods: {
        save(){
            this.dialog = false;
            let amount = parseInt(this.amount);
            if (this.mode === "Add") {
                this.add(amount);
            }
            else if (this.mode === "Subtract") {
                this.subtract(amount);
            }
            this.amount = 0;
        },
        add(amount){
            this.$store.dispatch('add', amount);
        },
        subtract(amount){
            this.$store.dispatch('subtract', amount);
        }
    }
}
</script>

<style>

</style>