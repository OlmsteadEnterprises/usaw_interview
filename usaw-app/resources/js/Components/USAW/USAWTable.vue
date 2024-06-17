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
            <div></div>
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
