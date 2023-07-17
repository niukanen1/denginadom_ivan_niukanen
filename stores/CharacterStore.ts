import { defineStore } from "pinia"


const initialFilter: filter = { 
    name: undefined, 
    gender: undefined, 
    status: undefined, 
}

export const useCharacterStore = defineStore("characters", { 
    state: () =>( { 
        list: [] as character[],
        filter: {...initialFilter}
    }), 
    actions: { 
        addCharacters(characterList: character[]) { 
            for (let character of characterList) { 
                let alreadyExists = this.list.find(el => el.id == character.id);
                if (!alreadyExists) { 
                    this.list.push(character)
                }
            }
        }, 
        clearCharacters() { 
            this.list = []
        },
        updateFilter(updatedFilterObject: filter) { 
            this.filter = updatedFilterObject; 
        }, 
        clearFilter() { 
            Object.assign(this.filter, initialFilter)
        }
    }, 
    getters: { 
        getCharacterById: (state) => {
            return (id: number) => state.list.filter(el => el.id == id)[0]; 
        }, 
        getCharacterByUrl: (state) => {
            return (url: string) => state.list.filter(el => el.url == url)[0]; 
        }, 
    }, 
    persist: true
})