<template>
    <div>
      <b-card :title=thread.title>
        <b-card-text>
          {{ thread.content }}
        </b-card-text>
        <b-button class="button" variant="light" v-on:click="goBack()">Zurück</b-button>
        <b-button class="button" variant="danger" v-on:click="deleteThread(thread.id)">Löschen</b-button>
      </b-card>
    </div>
</template>

<script>
    import store from "@/store";

    export default {
        name: "ThreadDetail",
        data() {
            return {
              threadId: this.$route.params.id,
            }

        },
        computed: {
          //Funktion zur Filterung der Threads anhand des übermittelten Parameters 'id'
            thread() {
                return store.threads.find(
                    thread => thread.id == this.threadId
                );
            }
        },
        methods: {
          deleteThread (id) {
            store.threads = store.threads.filter(function(obj) {
              return obj.id !== id;
            });
            this.$router.push('/')
          },
          goBack() {
            this.$router.push('/')
          }
      }
    }
</script>

<style scoped>

.button {
  margin-right: 20px;
}

</style>
