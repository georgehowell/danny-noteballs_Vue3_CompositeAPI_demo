<script setup>
import { ref } from 'vue'

const selected = ref('A')

const options = ref([
  { id: 0, text: 'Currency', value: 'A' },
  { id: 1, text: 'Dollar', value:  '$' },
  { id: 2, text: 'Euro  ', value:  '£' },
  { id: 3, text: 'Yen   ', value: '¥' },
  { id: 4, text: 'Franc ', value: '₣' },
  { id: 5, text: 'Rupee ', value: '₹' },
])

</script>

<template>
  <select v-model="item.id">
    <option value="">Select</option>
    <option v-for="{choice, id} in choices" :value="choice.id" :key="id">{{ choice.name }}</option>
  </select>
  <p>Model: {{ item.id }}</p>


</template>


