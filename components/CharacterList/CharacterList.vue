<script setup lang="ts">

import axios from 'axios';
import { ref } from 'vue'

const list=ref<character[]>();
const getCharacters=async () => {
    try {
        const result=await axios.get("https://rickandmortyapi.com/api/character")
        list.value=(result.data as apiResponse<character>).results;
    } catch (err) {
        let error=err as Error;
        console.log("Error in getCharacters()");
        console.log(error.message);
    }
}
onMounted(() => {
    getCharacters()
})

</script>

<template>
    <div class="flex flex-col gap-3">
        <div v-for="character in list">
            <CharacterCard :data="character" />
        </div>
    </div>
</template>