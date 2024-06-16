<template>

</template>

<script>
import {useUsawStore} from "@/Store";
export default {
    name: "USAWForm",
    setup() {
        const usawStore = useUsawStore();
        return {
            usawStore
        }
    }
}
</script>

<style scoped>

</style>
