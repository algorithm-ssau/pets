<template>
	<div class="layout__row layout__row_body">
		<div class="layout__row_catalog">
			<div class="container box">
				<a class="catalog-a" @click="kindPressed('Кошки')" href="#">Кошки</a>
				<a class="catalog-a" @click="kindPressed('Собаки')" href="#">Собаки</a>
				<a class="catalog-a" @click="kindPressed('Попугаи')" href="#">Попугаи</a>
			</div>
		</div>
		<video class="main-video" autoplay loop muted playsinline> 
			<source src="../assets/video/main-cat.mp4" type="video/mp4"> 
			<source src="../assets/video/main-cat.webm" type="video/webm"> 
		</video>
	</div>
</template>

<script>
export default {
	name: 'homeTab',
	methods: {
        kindPressed(kind) {
            this.$emit('catalogPressed', {kind, breed: ''})
        }
	}
}
</script>