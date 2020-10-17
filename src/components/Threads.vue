<template>
    <div>
        <b-button class="create" variant="primary" v-b-modal.modal-prevent-closing>Erstellen</b-button>
        <b-card-group deck>
            <div class="threads" v-for="thread in threads" :key="thread.title">
                <router-link
                        :to="{
            name: 'ThreadDetail',
            params: { title: thread.title }
          }"
                >
                    <b-card bg-variant="default" text-variant="black" :header="thread.title" class="text-center">
                        <b-card-text>{{thread.content}}</b-card-text>
                    </b-card>
                </router-link>
            </div>
        </b-card-group>
        <b-modal
                id="modal-prevent-closing"
                ref="modal"
                title="Submit Your Name"
                @show="resetModal"
                @hidden="resetModal"
                @ok="handleOk"
        >
            <form ref="form" @submit.stop.prevent="handleSubmit">
                <b-form-group
                        :state="titleState"
                        label="Titel"
                        label-for="title-input"
                        invalid-feedback="Titel wird benötigt"
                >
                    <b-form-input
                            id="title-input"
                            v-model="title"
                            :state="titleState"
                            required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        :state="contentState"
                        label="Inhalt"
                        label-for="content-input"
                        invalid-feedback="Inhalt wird benötigt"
                >
                    <b-form-input
                            id="content-input"
                            v-model="content"
                            :state="contentState"
                            required
                    ></b-form-input>
                </b-form-group>
            </form>
        </b-modal>
    </div>
</template>

<script>
    import store from "@/store"

    export default {
        name: "Threads",
        data () {
            return {
                title: '',
                content: '',
                titleState: null,
                contentState: null,
                threads: store.threads,
            }
        },
        methods: {
            checkFormValidity() {
                const valid = this.$refs.form.checkValidity()
                this.titleState = valid
                this.contentState = valid
                return valid
            },
            resetModal() {
                this.title = ''
                this.content = ''
                this.titleState = null
                this.contentState = null
            },
            handleOk(bvModalEvt) {
                // Prevent modal from closing
                bvModalEvt.preventDefault()
                // Trigger submit handler
                this.handleSubmit()
            },
            handleSubmit() {
                // Exit when the form isn't valid
                if (!this.checkFormValidity()) {
                    return
                }
                // Push the name to submitted names
                this.threads.push({id: this.id, title: this.title, content: this.content})
                // Hide the modal manually
                this.$nextTick(() => {
                    this.$bvModal.hide('modal-prevent-closing')
                })
            }
        }
    }
</script>

<style scoped>

    .create {
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .threads {
        width: 30%;
        margin-left: 10px;
        margin-bottom: 20px;
    }

    a {
        color: black;
        text-decoration: none;
    }

</style>
