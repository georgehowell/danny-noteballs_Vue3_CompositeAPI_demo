import { ref, reactive, computed, watch, onBeforeMount, onUnmounted, onBeforeUnmount, onMounted, onBeforeUpdate, onUpdated, nextTick } from 'vue'

// by moving (below) outside, it becomes Global:
const counterData = reactive({
  count: 0,
  title: 'My Counter', 
})
// above is short vers. (reactive)
// const counter = ref(0),
//       counterTitle = ref('My Counter')

export function useCounter() {  
  // Option A:
  const increaseC = amount => { counterData.count += amount }
  const decreaseC = amount => { counterData.count -= amount }
  
  const oddOrEven = computed(() => {
    if (counterData.count % 2 === 0) return 'even'
    return 'odd'  //can omit 'else'
  })
  
  // watcher
  watch(() => counterData.count, (newCount) => {
    if (newCount >= 20) { alert("you've reached 20") }
  })
   
  // option B:
  const increase = () => { counterData.count++ }
  const decrease = () => { counterData.count-- }
  
  // LifeCycle hooks:
  onBeforeMount(() => {console.log('onBeforeMount')})
  onMounted(() => {console.log('onMounted')})
  onBeforeUnmount(() => {console.log('onBeforeUnmount')})
  onUnmounted(() => {console.log('onUnmounted')})
  onBeforeUpdate(() => {console.log('onBeforeUpdate')})
  onUpdated(() => {console.log('onUpdate')})

  return {
    counterData, 
    oddOrEven,
    increase,
    decrease,
    increaseC,
    decreaseC
  }
}