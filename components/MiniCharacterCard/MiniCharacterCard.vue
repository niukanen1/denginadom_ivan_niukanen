
<script setup lang="ts">
import { useCharacterStore } from '~/stores/CharacterStore';
import { getSingleCharacterByUrl } from '~/services/getCharacters'

const { url }=defineProps<{
    url: string
}>()

const characterStore=useCharacterStore();
const character=ref<character>();
const failedToGetCharacter=ref<boolean>(false);

onMounted(async () => {
    let storedCharacter=characterStore.getCharacterByUrl(url);
    if (!storedCharacter) {
        let fetchedCharacter=await getSingleCharacterByUrl(url);
        if (fetchedCharacter) {
            character.value=fetchedCharacter;
        } else {
            failedToGetCharacter.value=true;
        }
    } else {
        character.value=storedCharacter;
    }
})




</script>

<template>
    <div class="flex flex-col p-2 border-[0.5px] rounded-md w-[200px]">
        <div>
            <NuxtLink :to="`/character:${character?.id}`">
                <img :src="character?.image" class="" />
                <p class="text-lg font-bold">{{character?.name}}</p>
            </NuxtLink>
        </div>
        <div v-if="failedToGetCharacter">
            <h1>There was an error getting an character information</h1>
            <p>Try reloading the page...</p>
        </div>
    </div>
</template>