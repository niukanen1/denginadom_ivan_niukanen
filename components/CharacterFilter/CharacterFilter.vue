<script setup lang="ts">
import { useCharacterStore } from '~/stores/CharacterStore';
const store=useCharacterStore();

</script>

<template>
    <div>
        {{store.filter.name}}
        <input v-model="store.filter.name" placeholder="Enter character name" />

        <div class="flex flex-col w-fit p-2 gap-1">
            <label for="status">Choose status</label>
            <select name="status" class="bg-zinc-200 rounded-md px-2 py-[0.5px] appearance-none"
                v-model="store.filter.status">
                <option disabled selected value="">Choose status</option>
                <option>Alive</option>
                <option>Dead</option>
                <option>unknown</option>
            </select>
        </div>

        <div class="flex flex-col w-fit p-2 gap-1">
            <label for="gender">Choose gender</label>
            <select name="gender" class="bg-zinc-200 rounded-md px-2 py-[0.5px] appearance-none"
                v-model="store.filter.gender">
                <option>Male</option>
                <option>Female</option>
                <option>Genderless</option>
                <option>unknown</option>
            </select>
        </div>

    </div>
</template>