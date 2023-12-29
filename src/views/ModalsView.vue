<template>
  <div class="modals">
    <h1>Modals</h1>
    <button class="btn" @click="showModal1 = true">Show modal 1</button>
    <button class="btn" @click="showModal2 = true">Show modal 2</button>

    <Modal v-if="showModal1"
      @hideModal="showModal1 = false"
      title="Turn on notifications"
      cta="Allow notifications"
      text="Get the most out of Twitter by staying up to date with what's happening"
    />

    <Modal v-if="showModal2"
      @hideModal="showModal2 = false"
      title="Nam libero tempore"
      cta="impedit quo minus"
      text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident"
    />

    
  </div>
</template>



<script setup>
import Modal from '../components/Modal.vue'
import { ref } from 'vue'

const showModal1 = ref(false)
const showModal2 = ref(false)

</script>
<style scoped>

</style>