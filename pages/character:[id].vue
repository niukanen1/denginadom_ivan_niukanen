
<script setup lang="ts">
import { useCharacterStore } from '~/stores/CharacterStore';

const route=useRoute();
const id=route.params.id 
const characterStore = useCharacterStore(); 

const currentCharacter = characterStore.getCharacterById(parseInt(id as string)); 
</script>

<template>
    <div class="flex flex-col justify-start items-start mt-3 mx-auto w-fit p-2 rounded-lg border-[0.5px]">
            <img class="rounded-md" :src="currentCharacter.image" />
            <div class="flex flex-col justify-start">
                <h1 class="text-4xl font-bold">{{ currentCharacter.name }}</h1>
                <div class="flex flex-row gap-2">
                    <p class="font-light">Species:</p>
                    <p>{{ currentCharacter.species }}</p>
                </div>
                <div class="flex flex-row gap-2">
                    <p class="font-light">Location:</p>
                    <p>{{ currentCharacter.location.name }}</p>
                </div>
            </div>
    </div>
</template>