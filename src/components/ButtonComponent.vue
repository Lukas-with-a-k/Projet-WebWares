<template>
    <div>
        <button>{{ label }}</button>
    </div>
</template>

<script>
export default {
    props: {
        label: String,
        bcolor: String,
        hcolor: String
    }
}
</script>

<style scoped>
button {
    background-color: v-bind(bcolor);
    /* padding: 7px 20px;
                cursor: pointer; */
    color: #e6edeb;
    text-decoration: none;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    padding: 10px 20px;
    margin: 5px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: v-bind(hcolor);
    transition: all 0.3s ease-in-out;
}

@media only screen and (max-width: 600px) {
    button {
        font-size: 16px;
        margin: 5px;
        padding: 10px
    }
}
</style>