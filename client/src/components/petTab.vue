<template>
	<div class="layout__row layout__row_body">
		<div class="container card">
			<a class="card-a-with-img" href="">
				<img :src="getImgPath(petInfo._id)">
			</a>
			<div class="card-info">			
				<span class="span-block card-info-name">{{ petInfo.name }}</span>		
				<div class="box-vert">
					<div class="box">
						<span class="span-block card-info-left-span">Порода:</span>
						<span class="span-block">{{ petInfo.breed }}</span>
					</div>
					<div class="box">
						<span class="span-block card-info-left-span">Владелец:</span>
						<span class="span-block">{{ petInfo.owner }}</span>
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
		petInfo: {},
		kindOfPets: String,
		breedOfPets: String
	},
	methods: {
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
	}
}
</script>