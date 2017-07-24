<template>
    	<div class="question">
        <div class="share" v-if="show"><img src="../img/share.png" alt="" @click="hide"></div>
             <div class="box">
                 <p>{{arr.question}}</p>
                 <ul v-for="i in arr.options">
                     <li @click="ok($event,i)" :class="{'col':ind==i}">{{i.opt}}</li>               
                 </ul>
             </div>
             <span class="help" @click="help">求助</span>
             <span class="next" @click="next">下一题</span>
        </div>
</template>


<script>

	export default {
		name:'question',
        data(){
            return {
                data_list:[],
                arr:{},
                id:0,
                show:false,
                ind:0,
                answer:[],
                text:''
            }
        },
        created:function(){
            this.data_list = this.$store.state.datas;
            //console.log(this.data_list)
            this.id = this.$route.params.id;
            //console.log(this.id)      
            this.data_list.forEach((v,i)=>{
                if(this.id == v.id){
                    this.arr = v;
                    //console.log(this.arr)
                }
                this.answer.push(v.answer);
            })
        },
        methods:{
            help:function(){
                this.show = true;
            },
            hide:function(){
                this.show = false;
            },
            next:function(){
                //console.log(this.text)
                if(this.text == ''){
                    alert('您还没有选择') 
                }else{
                    this.id++;
                    this.data_list.forEach((v,i)=>{
                        if(this.id == v.id){
                            this.arr = v;
                        }
                    })
                    //console.log(this.id)
                    if(this.id < 5){
                        this.$router.push('/question/'+this.id)
                    }
                    
                    if(this.id == 5){
                        this.$router.push('/last/5')
                    }

                    this.answer.forEach((v)=>{
                        if(this.text == v){
                            this.$store.dispatch('sums',20)
                            this.$store.dispatch('counts')
                            //console.log(this.$store.state.sum)
                            //console.log(this.$store.state.cnt)
                        }
                    })
                    this.text = '';
                 }
                
            },
            ok:function(e,i){
                //console.log(e.target.innerHTML)
                this.text = e.target.innerHTML;
                this.ind = i;
            }
        }
	}
</script>


<style scoped>
    .col{color:pink;}  
    .question{
        width: 100%;
        height: 100%;
        background:url(../img/2.png)no-repeat center;
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        position: relative;
    }
    .box{
        width: 243px;
        position: absolute;
        top:25%;
    }
    .box ul li{
        margin-top: 22px;
    }
    .box ul li input{
        margin-right: 10px;
    }
    .help{
        font-size: 20px;
        position: absolute;
        bottom: 10%;
        left: 25%;
        color: #fff;
    }
    .next{
        font-size: 20px;
        position: absolute;
        bottom: 10%;
        right: 18%;
        color: #fff;
    }
    .share{
        background: rgba(0,0,0,.5);
        width: 100%;
        height: 100%;
        z-index: 100;
        display: flex;
        justify-content: center;
    }
    .share img{
        width: 177px;
        height: 170px;
        margin-top: 86px;
    }
</style>