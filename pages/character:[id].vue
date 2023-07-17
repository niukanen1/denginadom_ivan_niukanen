
<script setup lang="ts">
import { getSingleCharacterById } from '~/services/getCharacters';
import { useCharacterStore } from '~/stores/CharacterStore';

const route=useRoute();
const id=route.params.id
const characterStore=useCharacterStore();
const failedToGetCharacter=ref<boolean>(false);
const currentCharacter=ref<character>();
onMounted(async () => {
    let storedCharacter=characterStore.getCharacterById(parseInt(id as string));
    if (!storedCharacter) {
        let fetchedCharacter=await getSingleCharacterById(parseInt(id as string));
        if (fetchedCharacter) {
            currentCharacter.value=fetchedCharacter;
        } else {
            failedToGetCharacter.value=true;
        }
    } else {
        currentCharacter.value=storedCharacter;
    }
})


</script>

<template>
    <div class="flex flex-col justify-start items-start mt-3 mx-auto w-fit p-2 rounded-lg border-[0.5px]">
        <div v-if="currentCharacter">
            <img class="rounded-md" :src="currentCharacter.image" />
            <div class="flex flex-col justify-start">
                <h1 class="text-4xl font-bold">{{currentCharacter.name}}</h1>
                <div class="flex flex-row gap-2">
                    <p class="font-light">Species:</p>
                    <p>{{currentCharacter.species}}</p>
                </div>
                <div class="flex flex-row gap-2">
                    <p class="font-light">Location:</p>
                    <p>{{currentCharacter.location.name}}</p>
                </div>
            </div>
        </div>

        <div v-if="failedToGetCharacter">
            <h1>There was an error getting an character information</h1>
            <p>Try reloading the page...</p>
        </div>
    </div>
</template>