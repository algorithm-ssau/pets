<template>
<div class="layout__row layout__row_body">
			<div class="container">
				<div class="grid">
					<!--TODO обработчик-->
						<div class="pet"
						v-for="(pet, index) in pets"
						v-bind:item="pet"
						v-bind:index="index"
						v-bind:key="pet._id"
						>
							<a class="cards-a-with-img" @click="$emit('cardPressed', pet)" href="#">
								<img :src="require(`../assets/images/${pet.imgPath}`)">
							</a>
							<div class="box cards-div-name">
								<a class="cards-name" href="#">{{pet.name}}</a>
							</div>
						</div>
					<p class="error" v-if="error">{{ error }}</p>
				</div>
			</div>
		</div>
</template>

<script>
import PetsImport from '../PetsImport.js'

export default {
  name: 'PetsImport',
  data(){
    return {
		pets: [],
		error: ''
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

<style scoped>
@import '../assets/css/style.css';
@import '../assets/css/reset.css';
</style>
