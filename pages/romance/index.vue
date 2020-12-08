<template>
<div class="container">
    <BookList
     v-for="book in romanceBooks"
    :key="book.id"
    :id="book.id" 
    :image="book.image"
    />
</div>
</template>
<script>
import BookList from '@/components/BookList.vue'
import axios from 'axios'
export default {
    components:{
        BookList
    },
    data(){
        return{
            romanceBooks:[]
        }
    },
    async created(){
        let result = await axios.get('http://localhost:3000/books');
        this.romanceBooks = result.data.filter(el => el.genre === "Romance");
    }
    }

</script>
<style scoped>
.container{
    display: flex;
    justify-content: center;
}
</style>
