<template>
   <div style="margin-top:3rem;">
  <b-card no-body class="overflow-hidden; ml-5" style="max-width:700px;  text-align:center;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="image" alt="Image" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body :title="name" :sub-title="'by ' + author">
          <b-card-text>
            {{description}}
            <hr>
            <p>Genre : {{genre}}</p>
            <p class="text-secondary">Rate This Book</p>
            <b-form-rating v-model="value" variant="warning" class="mt-"></b-form-rating>
          </b-card-text>
          <b-button variant="primary" class="mt-2">Want To Read</b-button>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</div>
</template>
<script>
export default {
   props:['name' , 'image', 'description', 'author' , 'genre']
}
</script>
<style scoped>

</style>