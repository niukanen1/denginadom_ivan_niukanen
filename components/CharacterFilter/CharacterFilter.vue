<script setup lang="ts">
import { useCharacterStore } from '~/stores/CharacterStore';
const store=useCharacterStore();


const clearFilters=() => {
    console.log("Clear");
    store.updateFilter({
        gender: undefined,
        status: undefined,
        name: undefined
    })
}

</script>

<template>
    <div class="flex mx-auto flex-col items-center w-fit mb-8">
        <div class="flex flex-row px-5 items-center">
            <div class="flex flex-col gap-1">
                <!-- <label for="name">Character name</label> -->
                <input type="search" name="name" v-model="store.filter.name" class="border rounded-md px-3"
                    placeholder="Enter character name" />
            </div>

            <div class="flex flex-col w-fit p-2 gap-1">
                <!-- <label for="status">Choose status</label> -->
                <select name="status" class="appearance-none border rounded-md px-2 py-[0.5px] "
                    v-model="store.filter.status">
                    <option disabled selected value=undefined>Choose status</option>
                    <option>Alive</option>
                    <option>Dead</option>
                    <option>unknown</option>
                </select>
            </div>

            <div class="flex flex-col w-fit p-2 gap-1">
                <!-- <label for="gender">Choose gender</label> -->
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
            <div @click="clearFilters" class=" w-fit px-5 rounded-md py-[2px] bg-red-600 text-sm cursor-pointer text-white">
                CLEAR
            </div>
        </div>


    </div>
</template>