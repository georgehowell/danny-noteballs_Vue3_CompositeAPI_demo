<script setup>
import { useCounter } from '@/use/useCounter'

import SelectCurrency from '@/components/SelectCurrency.vue'
import {vAutofocus} from '@/directives/vAutofocus'


const { counterData, oddOrEven, increase, decrease, increaseC, decreaseC } = useCounter()

// filter example (Experimental / w.i.p.):
// const currencyUSD = computed(() => { '$' + counterData.count })


//   N o t   W o r k i n g   i n   " useCounter "  c o m p o s a b l e :
import { ref, nextTick, onMounted } from 'vue'
// multiple arguments:
  const increaseMultiFn = async (amount, e) => { 
    await nextTick(console.log("nextTick async await and this.element = " + e))
    counterData.count += amount
   }

  const countTitleRef = ref(null)
  onMounted(() => {
    console.log(`This title is ${countTitleRef.value.offsetWidth}px wide`)
  })
  const appTitle = "<h2>Danny Connell&rsquo;s Amazing Tutorial #1</h2>"

</script>

<template>
  
  <div class="home">
  <div v-html="appTitle" class="my-5"></div>
    <h3 ref="countTitleRef">{{ counterData.title }}</h3>
 
    <div class="button-group">
      <button @click="decreaseC(2)" class="btn">- -</button>
      <button @click="decreaseC(1)" class="btn">-</button>
      <button @click="increaseC(1)" class="btn">+</button>
      <button @click="increaseC(2)" class="btn">+ +</button>
      <button @click="increaseMultiFn(2, $event)" class="btn">+ + C</button>
    </div>
    <div class="edit-block">
      <div class="counter">
       {{ counterData.count }}
      </div>
    </div>
    <h3>The counter amount is {{oddOrEven}}</h3>

    <div class="edit-block">
      <h4>Edit title:</h4> &nbsp; 
      <input v-model="counterData.title"  type="text" v-autofocus/>
    </div>
  </div>
</template>






<style scoped>
.home {text-align: center;}
.button-group {display: flex; justify-content: center;}
.button-group span.count {margin: 5px;}
.edit-block {display: flex; flex-direction: row; justify-content: center;  width: 280px; margin: 10px auto;}
.counter {margin: 0 10px;}
</style>