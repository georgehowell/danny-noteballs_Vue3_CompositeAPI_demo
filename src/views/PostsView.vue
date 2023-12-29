<template>
  <div class="posts">
    <h1>hello Posts</h1>

    <div class="container">
    
      <ul>
        <li v-for="post in posts" :key="post.id" class="wrapper" :style="{ 'background-image': `url(${post.bgImg})` }">
          <img :src="post.img" :alt="post.title" class="thumbnail">
          <RouterLink :to="`/postDetail/${post.id}`" class="btn" >{{ post.title }} </RouterLink>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {id: 'id1', title: 'Post One',   img: './src/assets/img/one.jpg',  bgImg: './src/assets/img/bgImg/one.jpg',   desc: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis'},
  {id: 'id2', title: 'Post Two',   img: './src/assets/img/two.jpg',  bgImg: './src/assets/img/bgImg/two.jpg',   desc: 'praesentium voluptatum deleniti atque corrupti quos dolores'},
  {id: 'id3', title: 'Post Three', img: './src/assets/img/three.jpg',bgImg: './src/assets/img/bgImg/three.jpg', desc: 'et quas molestias excepturi sint occaecati cupiditate non provident'},
  {id: 'id4', title: 'Post Four',  img: './src/assets/img/four.jpg', bgImg: './src/assets/img/bgImg/four.jpg',  desc: 'Similique sunt in culpa qui officia deserunt mollitia animi'},
  {id: 'id5', title: 'Post Five',  img: './src/assets/img/five.jpg', bgImg: './src/assets/img/bgImg/five.jpg',  desc: 'id est laborum et dolorum fuga'},
  {id: 'id6', title: 'Post Six',  img: './src/assets/img/Elon.webp', bgImg: './src/assets/img/bgImg/six.jpg',  desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem'},
])

function getImageUrl(name, ext) {
  return new URL(`./src/assets/img/bgImg/${name}`, import.meta.url).href
}


</script>


<style scoped>
.container {
  /* display: grid;
  /* grid-template-columns: 1fr 1fr 1fr; */
  
  gap: 30px;
  columns: 3;
}

.container .wrapper:last-child {
  border: 3px #f00 dashed;
}

h1, ul {margin: 0 0 30px 0; padding-left: 0;}
li {list-style: none;}

.wrapper {
  height: 80px;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  margin-bottom: 30px;
  border-radius: 7px;
  box-shadow: 0 0 10px #666;
  border: 1px #999 solid;
  overflow: hidden;
}



.thumbnail {
  width: auto;
  height: 80px;
  float: left;
  border-top-left-radius: 7px;
  border-bottom-left-radius: 7px;
}
.btn {
  float: right;
  margin: 5px 5px 0 0;
}


@media screen and (max-width: 1024px) {
  .container {
    columns: 2;
  }
}

@media screen and (max-width: 599px) {
  .container {
    columns: 1;
  }
}

@media screen and (min-width: 1200px) {
.container {width: 1000px;}
}

</style>