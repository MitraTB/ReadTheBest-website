<template>
<div class="container">
   <BookDetails
   :name="book.name"
   :author="book.author"
   :description="book.description"
   :image ="book.image"
   :genre ="book.genre"
   />
</div>
</template>
<script>
import axios from 'axios';
import BookDetails from '@/components/BookDetails';
export default {
    components:{
        BookDetails
    },
     data(){
        return {
            book:[]
        };
    },
    async created(){
        let result = await axios.get(`http://localhost:3000/books/${this.$route.params.id}`);
        console.log(result.data);
        this.book = result.data;
        console.log('book' , this.book);
    }
}
</script>
<style scoped>
.container{
display: flex;
justify-content: center;
align-content: center;
}
</style>