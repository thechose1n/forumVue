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
        props: {
            title: {
                type: String,
                required: true
            }
        },
        data() {
            return {
            }

        },
        computed: {
            threads() {
                return store.threads.find(
                    thread => thread.title === this.title
                );
            }
        }
    }
</script>

<style scoped>

</style>
