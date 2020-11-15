<template>
  <div>
    <b-card-group deck>
      <b-card
        v-for="book in books"
        :key="book.id"
        overlay
        :img-src="book.image"
        tag="article"
        style="max-width: 20rem;"
        class="m-4"
        >
      </b-card>
    </b-card-group>
  </div>
</template>
<script>
export default {
    props:['books']
}
</script>