<template>
    <article>
        <div class="imagecol">
            <img src="" >
            <b-button variant="primary">want to read</b-button>
        </div>
        <div class="namecol">
            <h1>{{book.title}}
        </div>
    </article>
</template>
<script>
export default {
    props:['books']
}
</script>