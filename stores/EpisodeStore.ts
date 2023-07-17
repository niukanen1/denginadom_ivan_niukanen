import { defineStore } from "pinia";




export const useEpisodeStore = defineStore('episodes', { 
    state: () => ({ 
        episodes: [] as episode[]
    }),

    actions: { 
        addEpisodes(episodeList: episode[]) { 
            for (let episode of episodeList) { 
                let alreadyExists = this.episodes.find(el => el.id == episode.id);
                if (!alreadyExists) { 
                    this.episodes.push(episode)
                }
            }
        },
    }, 
    getters: { 
        getEpisodeById: (state) => { 
            return (id: number) => state.episodes.filter(el => el.id == id)[0]; 
        }
    }
})