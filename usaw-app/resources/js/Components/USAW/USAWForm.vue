<template>
    <div class="flex justify-center">
        <div class="w-1/2  rounded-2xl border-2 border-black mt-5">
            <div class="flex justify-center mt-3">USAW Form</div>
            <div class="mt-3 p-3">
                <div>Name</div>
                <div>
                    <input required v-model="usaw.name" type="text" class="w-1/2 rounded-2xl border-2 border-black" />
                </div>
                <div>Favorite Color</div>
                <div>
                    <select required v-model="usaw.color" class="w-1/2 rounded-2xl border-2 border-black">
                        <option>Black</option>
                        <option>Blue</option>
                        <option>Red</option>
                        <option>Orange</option>
                    </select>
                </div>
                <div>I acknowledge I am submitting this for:</div>
                <div>
                    <input v-model="usaw.consent_statement" type="checkbox" class="w-8 h-8 rounded-lg border-2 border-black" />
                </div>
                <div class="flex justify-center">
                    <button @click="usawStore.store(usaw)" class="px-12 py-3 border-2 rounded-2xl text-center bg-black text-white">Submit</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useUsawStore} from "@/Store/Modules/usaw.js";
export default {
    name: "USAWForm",
    setup() {
        const usawStore = useUsawStore();
        return {
            usawStore
        }
    },
    data() {
        return {
            usaw: {
                name: null,
                color: null,
                consent_statement: null,
            }
        }
    }
}
</script>

<style scoped>

</style>
