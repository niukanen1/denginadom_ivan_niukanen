<script setup lang="ts">
import { getEpisode } from '~/services/getEpisodes';
import { useEpisodeStore } from '~/stores/EpisodeStore';

const route=useRoute();
const id=route.params.id
const failedToGetEpisode=ref<boolean>(false);
const episodesStore=useEpisodeStore();
const currentEpisode=ref<episode>();

onMounted(async () => {
    let storedEpisode=episodesStore.getEpisodeById(parseInt(id as string));
    if (!storedEpisode) {
        let fetchedEpisode=await getEpisode(`https://rickandmortyapi.com/api/episode/${id}`);
        if (fetchedEpisode) {
            currentEpisode.value=fetchedEpisode;
        } else {
            failedToGetEpisode.value=true;
        }
    } else {
        currentEpisode.value=storedEpisode
    }
})


</script>

<template>
    <div class="flex flex-col mx-auto mt-2 w-fit border-[0.5px] p-2 rounded-md">
        <div v-if="currentEpisode">
            <div class="flex flex-col gap-5">
                <div>
                    <h1 class="text-4xl font-bold">{{currentEpisode?.name}}</h1>
                    <p>{{currentEpisode?.air_date}}</p>
                </div>
                <div>
                    <p>Characters in that episode: </p>
                    <div class="flex flex-row gap-1 max-lg:max-w-lg max-md:max-w-md max-sm:max-w-[300px] overflow-scroll">
                        <div v-for="characterUrl in currentEpisode.characters">
                            <MiniCharacterCard :url="characterUrl" />
                        </div>
                    </div>

                </div>
            </div>


        </div>



        <div v-if="failedToGetEpisode">
            <h1>There was an error getting an episode information</h1>
            <p>Try reloading the page...</p>
        </div>


    </div>
</template>