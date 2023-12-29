import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const fetchCurrency = defineStore('currency', () => {

const options = [
    { id: 1, name: "Admin"  , value: '$' },
    { id: 2, name: "Member" , value: '€' },
    { id: 3, name: "Guest"  , value: '£' },
    { id: 4, name: "Admin"  , value: '¥' },
    { id: 5, name: "Member" , value: '₣' },
    { id: 6, name: "Guest"  , value: '₹' }
]


  return { currency }
})
