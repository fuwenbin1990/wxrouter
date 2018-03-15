<template>
	<div class="appnav">
		<router-link to="/appnav1" class="routerLink">首页1</router-link>
		<router-link to="/appnav2" class="routerLink">首页2</router-link>
		<router-link to="/appnav3" class="routerLink">首页3</router-link>
		<router-link to="/appnav4" class="routerLink">首页4</router-link>
	</div>
</template>




<script>
	
export default({
	name:'appnav',
	data(){
		return{
			num:''
		}
	},
	methods:{

	},
	created(){
		// let routerLink = document.getElementsByClassName('routerLink');
		// this.num = Array.from(routerLink).length;
		// console.log(this.num)
		// console.log(this.$route)
	}
})

</script>

<style scoped>
	

</style>