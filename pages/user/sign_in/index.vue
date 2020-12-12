<template>
    <div class="container">
        <b-row class="justify-content-center">
        <SignIn />
        </b-row>
    </div>
</template>
<script>
import SignIn from '@/components/SignIn.vue'
export default {
    components:{
        SignIn
    }
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
}
</style>