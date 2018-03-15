<template>
	<div class="xr">
		<button @click="cs">测试</button>
		<h1 v-if="parseInt(leavel)===1">
			标题1
			<slot name="s1"></slot>
		</h1>
		<h2 v-if="parseInt(leavel)===2">
			标题2
			<slot name="s2"></slot>
		</h2>
		<h3 v-if="parseInt(leavel)===3">
			标题3
			<slot name="s3"></slot>
		</h3>
		<h4 v-if="parseInt(leavel)===4">
			标题4
			<slot name="s4"></slot>
		</h4>
		<h5 v-if="parseInt(leavel)===5">
			标题5
			<slot name="s5"></slot>
		</h5>
		<h6 v-if="parseInt(leavel)===6">
			标题6
			<slot name="s6"></slot>
		</h6>
	</div>
</template>




<script>



export default({
	name:'xr',
	data(){
		return {

		}
	},
	methods:{
		cs(){
			console.log(parseInt(this.leavel) === 5)
		}
	},
	props:['leavel']
})



</script>


<style scoped>
	

</style>