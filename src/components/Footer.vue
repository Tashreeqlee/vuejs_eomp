<template>
    <div class="container-fluid fixed-bottom">
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
.container {
    text-align: center;
    padding: 20px;
    background-color: #9fb4c9;
}

.row {
    display: flex;
    justify-content: center;
}

.lead {
    font-size: 18px;
    color: #333;
}

span {
    font-weight: bold;
}

</style>