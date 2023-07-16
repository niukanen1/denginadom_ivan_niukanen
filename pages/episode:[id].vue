<script setup lang="ts">
import { useEpisodeStore } from '~/stores/EpisodeStore';

const route=useRoute();
const id=route.params.id
const episodesStore=useEpisodeStore();

const currentEpisode=episodesStore.getEpisodeById(parseInt(id as string));

</script>

<template>
    <div>
        <h1>Episode: {{id}}</h1>
        <p>{{currentEpisode?.name}}</p>
    </div>
</template>