<script setup lang="ts">
import { useCharacterStore } from '~/stores/CharacterStore';
const store=useCharacterStore();


const clearFilters=() => {
    store.clearFilter()
}

</script>

<template>
    <div class="flex mx-auto flex-col items-center w-fit mb-8">
        <div class="flex flex-row flex-wrap px-5 items-center">
            <form @submit.prevent="" class="flex flex-row gap-1 items-center">
                <input type="text" name="name" v-model="store.filter.name" class="border rounded-md px-3"
                    placeholder="Enter character name" />
                <div class="flex flex-col w-fit p-2 gap-1">
                    <select name="status" class="appearance-none border rounded-md px-2 py-[0.5px] "
                        v-model="store.filter.status">
                        <option disabled selected value=undefined>Choose status</option>
                        <option>Alive</option>
                        <option>Dead</option>
                        <option>unknown</option>
                    </select>
                </div>
                <div class="flex flex-col w-fit p-2 gap-1">
                    <div class="flex gap-1">
                        <select name="gender" class="appearance-none border rounded-md px-2 py-[0.5px] "
                            v-model="store.filter.gender">
                            <option disabled selected value=undefined>Choose gender</option>
                            <option selected>Male</option>
                            <option>Female</option>
                            <option>Genderless</option>
                            <option>unknown</option>
                        </select>
                    </div>
                </div>
                <!-- <button class="px-2 rounded-md bg-blue-400 h-fit text-white" type="submit">Search</button> -->
                <div @click="clearFilters"
                    class=" w-fit px-5 rounded-md py-[2px] bg-red-600 text-sm cursor-pointer text-white">
                    CLEAR
                </div>
            </form>





        </div>


    </div>
</template>