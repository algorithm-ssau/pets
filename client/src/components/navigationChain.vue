<template>
    <div class="layout__row layout__row_navigation-chain">
        <div class="container box">
            <a class="navigation-chain-a" 
                @click="homePressed()" href="#"
            >Главная</a>

            <svg class="navigation-chain-em-dash" width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg"
                v-if="kindOfPets !== ''"
            >
                <line y1="0.6" x2="10" y2="0.6" stroke="#828282" stroke-width="0.8" />
            </svg>
            <a class="navigation-chain-a" href="#"
                v-if="kindOfPets !== ''"
                @click="kindPressed(kindOfPets)"              
            >{{ kindOfPets }}</a>  
                      
            <svg class="navigation-chain-em-dash" width="10" height="1" viewBox="0 0 10 1" fill="none" xmlns="http://www.w3.org/2000/svg"
                v-if="breedOfPets !== ''"
            >
                <line y1="0.6" x2="10" y2="0.6" stroke="#828282" stroke-width="0.8" />
            </svg>
            <a class="navigation-chain-a" href="#"
                v-if="breedOfPets !== ''"
                @click="breedPressed(kindOfPets, breedOfPets)"
            >{{ breedOfPets }}</a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'navigationChain',
    props: {
        kindOfPets: {
            type: String,
            default: ''
        }, 
        breedOfPets: {
            type: String,
            default: ''
        }
    },
    methods: {
        homePressed() {
            this.$emit('homePressed')
        },
        kindPressed(kind) {
            this.$emit('catalogPressed', {kind, breed: ''})
        },
        breedPressed(kind, breed) {
            this.$emit('catalogPressed', {kind, breed})
        }
    }
}
</script>