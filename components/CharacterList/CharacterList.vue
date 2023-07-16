<script setup lang="ts">
import getCharacters from '~/services/getCharacters';
import { ref } from 'vue'
import { useCharacterStore } from '~/stores/CharacterStore';
import { storeToRefs } from 'pinia';
import { resourceLimits } from 'worker_threads';

const error=ref<string>("");
const page=ref<number>(1);
const reachedTheEnd=ref<boolean>(false)
const count=ref<number>();
const characterStore=useCharacterStore();

const { list, filter }=storeToRefs(characterStore);

const fetchCharacters=async () => {
    try {
        const result=await getCharacters(page.value, filter.value);
        const { info, results: characters }=result;
        if (!info.next) {
            reachedTheEnd.value=true
        } else {
            reachedTheEnd.value=false
        }
        count.value=info.count;

        characterStore.addCharacters(characters);
        error.value=""
    } catch (_) {
        count.value=0
        error.value="Nothing was found";
    }
}
onMounted(async () => {
    await fetchCharacters()
    window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})
const handleScroll=async () => {
    let bottomOfWindow=document.documentElement.scrollTop+window.innerHeight===document.documentElement.offsetHeight;
    if (bottomOfWindow) {
        page.value+=1;
        if (!reachedTheEnd.value) {
            await fetchCharacters()
        }

    }
}

watch(filter, async () => {
    characterStore.clearCharacters();
    await fetchCharacters();
}, { deep: true })

</script>

<template>
    <div class="max-w-lg mx-auto flex flex-col gap-3 px-5">
        <div v-if="count">
            Results: {{count}}
        </div>
        <div v-if="error.length>=1">
            <p class="p-1">{{error}}</p>
        </div>
        <div v-for="character in list">
            <CharacterCard :data="character" />
        </div>
        <div v-if="reachedTheEnd&&error.length<1">
            <p class="text-xl font-medium">Nothing more to load</p>
        </div>
    </div>
</template>
