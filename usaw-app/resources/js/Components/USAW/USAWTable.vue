<template>
    <div class="p-5 border-2 border-black rounded-2xl w-full">
        <div class="grid grid-cols-4 gap-2 border-b-2 border-black pb-2">
            <div class="font-bold">Name</div>
            <div class="font-bold">Color</div>
            <div class="font-bold">Consent Statement</div>
            <div class="font-bold">Actions</div>
        </div>
        <div v-for="data in usawData" class="grid grid-cols-4 gap-2 border-b-2 pb-2 border-black">
            <div>{{data.name}}</div>
            <div>{{data.color}}</div>
            <div>{{data.consent_statement ? 'yes' : 'no'}}</div>
            <div class="flex justify-evenly">
                <div class="pt-1">
                    <svg @click="usawStore.destroy(data.id);" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6 text-red-500">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useUsawStore} from "@/Store/Modules/usaw";

export default {
    name: "USAWTable",
    setup() {
        const usawStore = useUsawStore();
        return {
            usawStore
        }
    },
    mounted() {
        this.usawStore.index();
    },
    computed: {
        usawData: () => useUsawStore().getUsawData,
    }
}
</script>

<style scoped>

</style>
