<template>
	<div class="page">
		<div class="main">
			soundrecord
			<Record/>
		</div>
	</div>
</template>

<script>
	import Record from '~/components/Record'
	export default {
		components: {
			Record
		}
	}
</script>

<style>
.page {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

}
.title {
	height: 10%;
	display: flex;
	justify-content: center;
	align-items: center;
}
.main {
	width: 100%;
	height: 60%;
	display: flex;
	justify-content: center;
	align-items: center;
}

</style>
