<template>
    <div class="container-fluid">
            <p class="lead">
                Tashreeq's portfolio &copy; <span>{{ currYear }}</span>
            </p>
        </div>
</template>

<script>
    export default {
        name: 'FooterComp',
        data() {
            return{
                currYear: new Date().getFullYear()
            }
        }
    }
</script>

<style scoped>


</style>