import {defineStore} from "pinia";
import axios from "axios";
import {toast} from "vue3-toastify";
import 'vue3-toastify/dist/index.css';
export const useUsawStore = defineStore('usaw', {
    state: () => ({
        usaw_data: [],
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
                    toast.error(error.message, {
                        position: "top-center",
                        theme: "colored"
                    });
            });
        },
        store(usaw) {
            axios.post('/api/usaw', {
                usaw: usaw
            }).then(response => {
                this.index();
                toast.success(response.data['message'], {
                    position: "top-center",
                    theme: "colored"
                });
            }).catch(error => {
                toast.error(error.message, {
                    position: "top-center",
                    theme: "colored",
                })
            });
        },
        destroy(usaw_id) {
            axios.delete(`/api/usaw/${usaw_id}`)
                .then(response => {
                    this.index();
                    toast.warning(response.data['message'], {
                        position: "top-center",
                        theme: "colored"
                    });
                }).catch(error => {
                    toast.error(error.message, {
                        position: "top-center",
                        theme: "colored"
                    });
            });
        }
    }
})
