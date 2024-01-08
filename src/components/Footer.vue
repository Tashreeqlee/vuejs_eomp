<template>
    <div class="container">
        <div class="row">
            <p class="lead">
                Tashreeq's portfolio &copy; <span>{{ currYear }}</span>
            </p>
        </div>
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