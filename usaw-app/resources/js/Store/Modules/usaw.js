import {defineStore} from "pinia";
import axios from "axios";
export const useUsawStore = defineStore('usaw', {
    state: () => ({

    }),
    getters: {

    },
    actions: {
        store(usaw) {
            axios.post('/api/usaw', {
                usaw: usaw
            }).then(response => {

            }).catch(error => {

            });
        }
    }
})
