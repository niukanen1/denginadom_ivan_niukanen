
<script setup lang="ts">
import { getEpisode } from '~/services/getEpisodes';

const { episodesUrls }=defineProps<{
    episodesUrls: string[]
}>()

const episodes=ref<episode[]>([]);

const fetchEpisodes=() => {
    episodesUrls.slice(0, 5).forEach(async (url) => {
        try {
            const episode=await getEpisode(url);
            if (episode!=undefined) {
                episodes.value?.push(episode)
            }
        } catch (err) {
            console.log(err);
        }
    })
}

onMounted(() => {
    fetchEpisodes()
})
</script>

<template>
    <div class="flex flex-col justify-start">
        <div v-for="episode in episodes">
            <NuxtLink active-class="none" :to="`/episode:${episode.id}`" class="text-xs  h-fit hover:text-blue-400 cursor-pointer">{{episode.name}}</NuxtLink>
        </div>
    </div>
</template>