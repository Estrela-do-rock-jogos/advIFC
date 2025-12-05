import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import api from "@/plugins/api";

export const useWordStore = defineStore('word', () => {
    const state = reactive({
        word: null,
        letters: null,
    })

    const word = computed(() => state.word)
    const letters = computed(() => state.letters)

    const fetchWord = async () => {
        const response = await api.get('random')

        if (response.data.word.length !== 5) {
            return fetchWord()
        }

        state.word = response.data.word
        state.letters = response.data.word.split('')
    }

    return {
        word,
        fetchWord,
        letters,
    }
})
