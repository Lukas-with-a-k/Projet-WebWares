<template>
    <div>
        <button>{{ label }}</button>
    </div>
</template>

<script>
    export default {
        props:{
            label: String,
            color: String,
            hcolor: String
        }
    }
</script>

<style scoped>
    button{
        background-color: v-bind(color);
        padding: 7px 20px;
        cursor: pointer;
}
button:hover{
    background-color: v-bind(hcolor);
}
</style>