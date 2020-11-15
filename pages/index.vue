<template>
<div class="container">
  <BookList  
  :books="allBooks"
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
        allBooks :[]
      }
    },
  async created (){
      let result = await axios.get('http://localhost:3000/books');
      console.log(result.data);
      this.allBooks = result.data;
      console.log('books', this.allBooks);

    }
  }

</script>
<style scoped>
.container{
  display: flex;
  flex-flow: row;
  justify-content: center;
}
</style>

