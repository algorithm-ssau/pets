<template>
	<div class="layout__row layout__row_body">
		<div class="container">
			<div class="grid">
				<div class="pet"
				v-for="(pet, index) in filteredPets"
				:item="pet"
				:index="index"
				:key="pet._id"
				>
					<a class="cards-a-with-img" @click="cardPressed(pet)" href="#">
						<img :src="getImgPath(pet._id)">
					</a>
					<div class="box cards-div-name">
						<a class="cards-name" @click="cardPressed(pet)" href="#">{{ pet.name }}</a>
					</div>
				</div>
				<p class="error" v-if="error">{{ error }}</p>
			</div>
		</div>
	</div>
</template>

<script>
import PetsImport from '../api/PetsImport.js'

export default {
	name: 'catalogTab',
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
	data() {
		return {
			pets: [],
			error: ''
		}
	},
	methods: {
		cardPressed(pet) {
			this.$emit('cardPressed', pet)
		},
		getImgPath(id) {
			var kind
			switch (this.kindOfPets) {
				case 'Кошки': 
					kind = 'cats';
					break;
				case 'Собаки': 
					kind = 'dogs';
					break;
				default: 
					kind = '';
			}
			return require(`../assets/images/${kind}/${id}.jpg`)
		}
	},
	computed: {
		filteredPets() {
			return this.pets.filter(pet => {
				if (pet.kind === this.kindOfPets) return true;
				if (pet.breed === this.breedOfPets) return true;
				return false;
			})
		}
	},
	async created() {
		try {
			this.pets = await PetsImport.getPets()
		} catch (error) {
			this.error = error.message
		}
	}
}
</script>