<template>
  <div class="post-detail">
    <h2>this is a Post detail page</h2>
    <p>Display the content of our post with ID of <span>{{ $route.params.id }}</span> here</p>
    <div class="flex">
      <button @click="showPostId"  class="btn" >Show Post Id</button>
      &nbsp; &nbsp; 
      <button @click="goToPostOne" class="btn">Go to first post</button>
    </div>
<hr class="my-5">
    <RouterLink to="/posts" class="btn"><span>&#171;</span> Back</RouterLink>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const showPostId = () => {
  alert(` The ID of this post is: ${route.params.id}` )
}
const goToPostOne = () => {
  // setTimeout(() => {
    router.push({
      name: 'postDetail',
      params: {
        id: 'id1'
      }
    })
  // }, 1000)
}

</script>

<style scoped>
.btn {margin-left: 0; padding-left: 5px;}
.btn span {font-size: 24px; line-height: 1px;}
.post-detail p span {font-size: 22px; color: #00cf00;}
</style>