
<script setup lang="ts">
import { useCharacterStore } from '~/stores/CharacterStore';

const route=useRoute();
const id=route.params.id 
const characterStore = useCharacterStore(); 

const currentCharacter = characterStore.getCharacterById(parseInt(id as string)); 
</script>

<template>
    <div>
        <h1>ID : {{ id }}</h1>
        <p>{{ currentCharacter?.name }}</p>
        <div v-for="episode in currentCharacter.episode">
            <p>{{ episode }}</p>
        </div>
    </div>
</template>