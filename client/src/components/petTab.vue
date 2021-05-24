<template>
	<div class="layout__row layout__row_body">
		<div class="container card">
			<a class="card-a-with-img" href="">
				<img :src="getImgPath()">
			</a>
			<div class="card-info">			
				<span class="span-block card-info-name">{{ pet.name }}</span>		
				<div class="box-vert">
					<div class="box">
						<span class="span-block card-info-left-span">Порода:</span>
						<span class="span-block">{{ pet.breed }}</span>
					</div>
					<div class="box">
						<span class="span-block card-info-left-span">Владелец:</span>
						<span class="span-block">{{ pet.owner }}</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'petTab',
	props: {
		pet: {}
	},
	methods: {
		getImgPath() {
			var kind
			switch (this.pet.kind) {
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
			return require(`../assets/images/${kind}/${this.pet._id}.jpg`)
		}
	}
}
</script>