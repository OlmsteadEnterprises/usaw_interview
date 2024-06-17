import {defineStore} from "pinia";
import axios from "axios";
import {toast} from "vue3-toastify";
export const useUsawStore = defineStore('usaw', {
    state: () => ({
        usaw_data: []
    }),
    getters: {
        getUsawData: state => state.usaw_data,
    },
    actions: {
        index() {
            axios.get(`/api/usaw`)
                .then(response => {
                    this.usaw_data = response.data;
                }).catch(error => {
                    this.toast.error(error.message, {
                        position: "top-center",
                        theme: "colored"
                    });
            });
        },
        store(usaw) {
            axios.post('/api/usaw', {
                usaw: usaw
            }).then(response => {
                this.toast.success(response.data['message'], {
                    position: "top-center",
                    theme: "colored"
                });
            }).catch(error => {
                this.toast.error(error.message, {
                    position: "top-center",
                    theme: "colored",
                })
            });
        },
        destroy(usaw_id) {
            axios.delete(`/api/usaw`)
                .then(response => {
                    this.toast.warning(response.data['message'], {
                        position: "top-center",
                        theme: "colored"
                    });
                }).catch(error => {
                    this.toast.error(error.message, {
                        position: "top-center",
                        theme: "colored"
                    });
            });
        }
    }
})
