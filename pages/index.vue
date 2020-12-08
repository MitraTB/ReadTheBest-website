  <template>
<div>
  <p class="introduction"><strong>ReadTheBest helps you to get acquaintance with popular books and keep track of books you want to read.</strong></p>
  <div class="container">
  <BookList 
  v-for="book in allBooks"
  :key="book.id"
  :id="book.id" 
  :image="book.image"
  :name="book.name"
  :author="book.author"
  />
  </div>
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
      return {
        allBooks:[]
      }
    },
    async created(){
      let result = await axios.get('http://localhost:3000/books');
      this.allBooks = result.data;
      console.log('allBooks', this.allBooks);
    }
   
  }

</script>
<style scoped>
.container{
  display: flex;
  flex-flow: row;
  justify-content: center;
}
.introduction{
  text-align: center;
  border: 1rem solid black;
}
</style>

