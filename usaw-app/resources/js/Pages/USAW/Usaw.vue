<template>
    <AppLayout>
        <USAWForm />
        <div class="mt-3">
            <USAWTable />
        </div>
    </AppLayout>
</template>

<script>
import AppLayout from "@/Layouts/AppLayout.vue";
import USAWForm from "@/Components/USAW/USAWForm.vue";
import USAWTable from "@/Components/USAW/USAWTable.vue";
export default {
    name: "Usaw",
    components: {USAWTable, USAWForm, AppLayout}
}
</script>

<style scoped>

</style>
