import { defineStore } from 'pinia'
import { reactive, computed, ref } from 'vue'
import api from '@/plugins/api'

export const useWordStore = defineStore('word', () => {
  const state = reactive({
    word: null,
    letters: null,
    selected: []
  })

  const word = computed(() => state.word)
  const letters = computed(() => state.letters)
  const selected = computed(() => state.selected)

  const posicao1 = ref(false)
  const posicao2 = ref(false)
  const posicao3 = ref(false)
  const posicao4 = ref(false)
  const posicao5 = ref(false)

  const existe1 = ref(false)
  const existe2 = ref(false)
  const existe3 = ref(false)
  const existe4 = ref(false)
  const existe5 = ref(false)

  const fetchWord = async () => {
    const response = await api.get('random')
    if (response.data.word.length !== 5) return fetchWord()
    state.word = response.data.word
    state.letters = response.data.word.split('')
  }

  function addWord(a, b, c, d, e) {
    state.selected = [a, b, c, d, e]

    posicao1.value = a === letters.value[0]
    posicao2.value = b === letters.value[1]
    posicao3.value = c === letters.value[2]
    posicao4.value = d === letters.value[3]
    posicao5.value = e === letters.value[4]

    existe1.value = !posicao1.value && letters.value.includes(a)
    existe2.value = !posicao2.value && letters.value.includes(b)
    existe3.value = !posicao3.value && letters.value.includes(c)
    existe4.value = !posicao4.value && letters.value.includes(d)
    existe5.value = !posicao5.value && letters.value.includes(e)
  }

  return {
    word,
    letters,
    selected,
    fetchWord,
    addWord,
    posicao1,
    posicao2,
    posicao3,
    posicao4,
    posicao5,
    existe1,
    existe2,
    existe3,
    existe4,
    existe5
  }
})
