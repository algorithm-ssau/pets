<template>
	<div class="layout__row layout__row_body">
        <div class="container box">
			<span
				v-if="findedPets.length === 0"
			>Ничего не найдено</span>
		</div>
		<div class="container">
			<div class="grid" v-cloak>
				<div class="pet"
				v-for="(pet, index) in findedPets"
				:item="pet"
				:index="index"
				:key="pet._id"				
				>
					<a class="cards-a-with-img" @click="cardPressed(pet)" href="#">
						<img :src="getImgPath(pet)">
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

export default {
	name: 'catalogTab',
	props: {
		pets: [],
		findedPets: []
	},
	methods: {
		cardPressed(pet) {
			this.$emit('cardPressed', pet)
		},
		getImgPath(pet) {
			var kind
			switch (pet.kind) {
				case 'Кошки': 
					kind = 'cats';
					break;
				case 'Собаки': 
					kind = 'dogs';
					break;
				case 'Попугаи': 
					kind = 'parrots';
					break;
				default: 
					kind = '';
			}
			return require(`../assets/images/${kind}/${pet._id}.jpg`)
		}
	}
}
</script>