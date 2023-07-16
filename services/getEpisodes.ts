import axios from "axios";
import { useEpisodeStore } from "~/stores/EpisodeStore";

export async function getEpisode(url: string) {
    const episodeStore = useEpisodeStore();
    try { 
        const result = await axios.get(url);
        episodeStore.addEpisodes([result.data as episode]);
        return Promise.resolve(result.data as episode);
    } catch (err) { 
        console.log("Error in getEpisode()");
        console.log(err);
    }
}   