<template>
  <div class="about">
    <h1 class="my-5">This is an about page</h1>
    <textarea v-autofocus></textarea>
<br>
    	<button @click="show = !show" class="btn" >Toggle</button>
<br>
<div class="counter-box my-5" @click="increase(1)"
:class="{ 'yellow' : oddOrEven === 'odd' }">
  {{ counterData.count }}
</div>

  </div>
</template>

<script setup>
import {vAutofocus} from '../directives/vAutofocus'
import { ref } from 'vue'
import { useCounter } from '@/use/useCounter'

const { counterData, increase, oddOrEven } = useCounter()
</script>
<style>
textarea, .counter-box {border: 1px #0f0 solid;}
.counter-box {padding: 10px; width: 50px; background-color: #f3f3f3;}
.yellow {background-color: #ff3;}
/*  @media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}   */
</style>
