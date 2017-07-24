<template>
    	<div class="home_page">
    		<router-link to="/question/1"><span>我要答</span></router-link>
    	</div>
</template>


<script>
	export default {
		name:'home'
	}
</script>


<style scoped>    
    .home_page{
    	background: url(../img/1.jpg)no-repeat center;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        text-align: center;
    }
    .home_page span{
        font-size: 25px;
        display: inline-block;
        margin-top: 82%;
        color: #000;
    }
</style>