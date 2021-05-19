<template>
<div class="layout__row layout__row_body">
	<div class="container card">
	<!--TODO обработчик-->
		<a class="card-a-with-img" href="">
			<img :src="require(`../assets/images/${petInfo.imgPath}`)">
		</a>
		<div class="card-info">			
			<span class="span-block card-info-name">{{petInfo.name}}</span>		
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
    props: ['petInfo']
}

</script>
