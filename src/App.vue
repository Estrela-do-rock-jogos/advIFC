<script setup>
import { onMounted, ref } from 'vue'
import { useWordStore } from '@/stores/word.js'
import Loading from 'vue-loading-overlay'

const isLoading = ref(false)
const wordStore = useWordStore()

onMounted(async () => {
  isLoading.value = true
  await wordStore.fetchWord()
  isLoading.value = false
})

const um = ref('')
const dois = ref('')
const tres = ref('')
const quatro = ref('')
const cinco = ref('')
</script>

<template>
<section id="main">
  <h1>AdvIFC pt-pt</h1>

  <form class="quadrado" @submit.prevent>
    <input type="text" maxlength="1" v-model="um"
      :class="{
        green: wordStore.posicao1,
        yellow: wordStore.existe1
      }">

    <input type="text" maxlength="1" v-model="dois"
      :class="{
        green: wordStore.posicao2,
        yellow: wordStore.existe2
      }">

    <input type="text" maxlength="1" v-model="tres"
      :class="{
        green: wordStore.posicao3,
        yellow: wordStore.existe3
      }">

    <input type="text" maxlength="1" v-model="quatro"
      :class="{
        green: wordStore.posicao4,
        yellow: wordStore.existe4
      }">

    <input type="text" maxlength="1" v-model="cinco"
      :class="{
        green: wordStore.posicao5,
        yellow: wordStore.existe5
      }">

    <button
      v-if="um && dois && tres && quatro && cinco"
      @click="wordStore.addWord(um, dois, tres, quatro, cinco)"
    >
      Enviar
    </button>
  </form>
</section>

<loading v-model:active="isLoading" is-full-page />
</template>

<style scoped>
#main {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#main h1 {
  font-size: 2rem;
  text-align: center;
}
#main .quadrado {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}
#main .quadrado input {
  width: 55px;
  height: 55px;
  font-size: 2rem;
  text-align: center;
  border-radius: 8px;
}
#main .quadrado input:focus {
  outline: auto;
}
.green {
  background-color: green;
  color: white;
}
.yellow {
  background-color: gold;
  color: black;
}
</style>
