<template>
<div class="container">
    <b-row class="justify-content-center">
    <SignUp />
    </b-row>
    </div>
</template>
<script>
import SignUp from '@/components/SignUp'
export default {
    components:{
        SignUp
    }
}
</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
}
</style>