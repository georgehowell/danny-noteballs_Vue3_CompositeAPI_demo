<script setup>
import { reactive, provide, computed } from 'vue'
import { useOnline } from '@vueuse/core'


const userData = reactive({
  name: 'Jorge',
  username: 'geohow'
})
provide('userData', userData)


const online = useOnline()
const clazz = computed(() => online.value ? 'text-primary' : 'text-gray')
const text = computed(() => online.value ? 'online' : 'offline')


</script>

<template>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
    <RouterLink to="/posts">Posts</RouterLink>
    <RouterLink to="/modals">Modals</RouterLink>
</nav>


  <RouterView />

  <!-- <router-view v-slot="{ Component }">
  <keep-alive>
    <component :is="Component" />
  </keep-alive>
</router-view> -->
  
          <span class="user">username: <b>{{ userData.username }}</b> | status: <b :class="clazz">{{ text }}</b></span>

</template>

<style>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.btn {
  border: 1px #163805 solid;
  border-radius: 5px;
  background-color: #cfc;
  padding: 2px 15px 3px 15px;
  margin: 0 5px
}
.btn:hover {
  background-color: blue;
  color: #fff;
}

hr {margin: 20px auto;}

@media (min-width: 1024px) {
 
}


span.user {position: absolute; right: 50px; top: 5px;}
.text-gray {color: #999;}
.text-primary {color: #009900;}
</style>
