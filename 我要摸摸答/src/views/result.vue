<template>
    	<div class="result">
            <div class="share" v-if="show"><img src="../img/share.png" alt="" @click="hide"></div>
            <p class="tit">
                <span>恭喜你</span>
                <span>你在模拟考试中答对了 <label>{{num}}</label> 道题</span>
            </p>
            <p class="scores">{{total}}</p>
            <router-link to="/card/6"><span class="award">拿走奖励</span></router-link>
            <span class="show_off" @click="show_off">嘚瑟一下</span>
        </div>
</template>


<script>
	export default {
		name:'result',
        data(){
            return {
                show:false,
                total:0,
                num:0
            }
        },
        methods:{
            show_off:function(){
                this.show = true;
            },
            hide:function(){
                this.show = false;
            }
        },
        created:function(){
            this.total = this.$store.state.sum;
            this.num = this.$store.state.cnt;
            if(this.total==100){
                this.total = '100元看大片'
            }else if(this.total >=50 && this.total <100){
                this.total = '50元看大片'
            }else if(this.total <50 && this.total >0){
                this.total = '20元看大片'
            }else if(this.total == 0){
                this.total = '仍需努力'
            }
        }
	}
</script>


<style scoped>    
    .result{
        background: url(../img/5.jpg)no-repeat center;
        width: 100%;
        height: 100%;
        background-size: 100% 100%;
        text-align: center;
        display: flex;
        justify-content: center;
        position: relative;
    }
    .result .tit{
        display: flex;
        flex-direction: column;
        margin-top: 35%;
        line-height: 30px;
    }
    .result .tit label{
        color:red;
        font-weight: bold;
        font-size: 20px;
    }
    .award{
        position: absolute;
        top: 62%;
        color: #fff;
        font-size: 20px;
        left: 50%;
        margin-left: -40px;
    }
    .show_off{
        position: absolute;
        top: 75%;
        color: #fff;
        font-size: 20px;
        left: 50%;
        margin-left: -40px;
    }
    .share{
        background: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        z-index: 100;
        display: flex;
        justify-content: center;
        position: absolute;
        top: 0;
        left:0;
    }
    .share img{
        width: 177px;
        height: 170px;
        margin-top: 86px;
    }
    .scores{
        font-size: 25px;
        position: absolute;
        top: 37%;
        color: #fff;
    }
</style>