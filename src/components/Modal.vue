<script setup>
import { inject } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'No title specified'
  },
  text: {
    type: String,
    default: 'No text specified'
  },
  cta: {
    type: String,
    default: 'close'
  }
})

/* emits */
const emit = defineEmits(['hideModal'])

/* handle button click */
const handleButtonClick = () => { emit('hideModal') }


const userData = inject('userData')


console.log(props.title)
</script>

<template>
<Transition name="fade">
<div class="modals-container">
  <div class="modal">
    <button @click="$emit('hideModal')" class="close">❌</button>  
    <div class="w-full">
      <div class="m-8  max-w-[400px] mx-auto">

        <div class="mb-8">
          <h1 class="mb-4 text-3xl font-extrabold">{{title}}</h1>
          <p class="text-gray-600">{{text}}</p>
          <span class="user">username: {{ userData.username }}</span>
        </div>
        <div class="space-y-4">
          <button class="cta">{{cta}}</button>
        </div>
      </div>
    </div>
  </div>
</div>
</Transition>
</template>



<style scoped>
.modals-container {
  position: initial;
  @apply fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10;
  transition: background-color .5s ease;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.modal {
  position: relative;
  @apply max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white;
}
.close {
  position: absolute;
  right: 5px;
  margin: 5px;
  border-radius: 30px;
    background-color: #000;
    padding: 0 4px 1px 5px;
    width: 35px;
    height: 35px;
    opacity: .5;
}
.close:hover {opacity: 1;  box-shadow: 0 0 10px #f00;}

.cta {
  @apply p-3 bg-black rounded-full text-white w-full font-semibold;
  border: 2px #000 solid;
}
.cta:hover {
  border: 2px #f00 solid;
  box-shadow: 0 0 15px #f00;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}


</style>