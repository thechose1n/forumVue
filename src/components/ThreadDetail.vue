<template>
    <div>
        <h1>{{ thread.id }}</h1>
        <h2>{{ thread.title }}</h2>
        <h3>{{ thread.content }}</h3>
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
            thread() {
                return store.threads.find(
                    thread => thread.id === this.threadId
                );
            }
        }
    }
</script>

<style scoped>



</style>
