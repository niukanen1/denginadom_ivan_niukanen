<script setup lang="ts">
import getCharacters from '../../services/getCharacters';
import { ref } from 'vue'

const list=ref<character[]>();
const error = ref<string>("");


onMounted(async () => {
    const result=await getCharacters();
    const characters = result?.results; 
    if (characters) { 
        console.log(characters);
        list.value = characters
        error.value = ""; 
    } else { 
        error.value = "Failed to load"
    }
   
})

</script>

<template>
    <div v-show="error.trim().length > 1">
        {{ error }}
    </div>
    <div class=""></div>
    <div class="flex flex-col gap-3">
        <div v-for="character in list">
            <CharacterCard :data="character" />
        </div>
    </div>
</template>