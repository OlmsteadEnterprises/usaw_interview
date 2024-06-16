<template>
    <AppLayout>
        <USAWForm />
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import USAWForm from "@/Components/USAW/USAWForm.vue";
export default {
    name: "Usaw",
    components: {USAWForm, AppLayout}
}
</script>

<style scoped>

</style>
