<template>

  <section class="books">
    <nuxt-link :to="`/${id}`">
    <article class="book" style="overflow-x:hidden">
    <div class="image" :style="{backgroundImage:'url(' + image + ')'}"></div>
    </article>
    </nuxt-link>
  </section>

  
</template>
<script>
export default {
  props:['id' , 'image']
}
</script>
<style>
.books{
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1024px;
}
.book{
  box-sizing: border-box;
  width:150px;
  border: 0.2 solid #ccc;
  padding: 4px;
  box-shadow: 2px 2px #aaa;
  margin : 2rem 1rem;
}
.image{
  background-position:center;
  background-size: cover;
  width:100%;
  height: 250px;
}
</style>
