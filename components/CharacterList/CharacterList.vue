<script setup lang="ts">
import getCharacters from '~/services/getCharacters';
import { ref } from 'vue'
import { useCharacterStore } from '~/stores/CharacterStore';

const error=ref<string>("");
const page=ref<number>(1);
const characterStore=useCharacterStore();

onMounted(async () => {
    const result=await getCharacters();
    const characters=result?.results;
    if (characters) {
        characterStore.addCharacters(characters);
        error.value="";
    } else {
        error.value="Failed to load"
    }
})

watch(characterStore.filter, async () => {
    characterStore.clearCharacters();
    const result=await getCharacters(page.value, characterStore.filter.status, characterStore.filter.gender, characterStore.filter.name);
    const characters=result?.results;
    if (characters) {
        characterStore.addCharacters(characters);
        error.value="";
    } else {
        error.value="Failed to load"
    }
})
</script>

<template>
    <div v-show="error.trim().length>1">
        {{error}}
    </div>
    <div class=""></div>
    <div class="flex flex-col gap-3">
        <div v-for="character in characterStore.list">
            <CharacterCard :data="character" />
        </div>
    </div>
</template>
