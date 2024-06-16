<template>
    <div class="flex justify-center">
        <div class="w-1/2  rounded-2xl border-2 border-black mt-5">
            <div class="flex justify-center mt-3">USAW Form</div>
            <div class="mt-3">
                <div>Name</div>
                <div>
                    <input type="text" class="w-1/2 rounded-2xl border-2 border-black" />
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
    }
}
</script>

<style scoped>

</style>
