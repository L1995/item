<template>
    	<div class="question">      
             <div class="box">
                 <p>{{arr.question}}</p>
                 <ul v-for="i in arr.options">
                     <li @click="ok($event,i)" :class="{'col':ind==i}">{{i.opt}}</li>
                 </ul>
             </div>
             <span class="grade" @click="grade">查看成绩</span>
        </div>
</template>


<script>

	export default {
		name:'last',
        data(){
            return {
                data_list:[],
                arr:{},
                id:0,
                answer:[],
                ind:0,
                num:0,
                text:''
            }
        },
        created:function(){
            this.data_list = this.$store.state.datas;
            this.id = this.$route.params.id;
            //console.log(this.id)      
            this.data_list.forEach((v,i)=>{
                if(this.id == v.id){
                    this.arr = v;
                }
                this.answer.push(v.answer);
            })
                      
        },
        methods:{         
            grade:function(){
                if(this.text == ''){
                    alert('您还没有选择')
                }else{
                    this.$router.push('/result')
                    //console.log(this.answer)
                    this.answer.forEach((v)=>{
                        if(this.text == v){
                           this.$store.dispatch('sums',20)
                           this.$store.dispatch('counts')
                           //console.log(this.$store.state.sum)
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
        background:url(../img/4.jpg)no-repeat center;
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
    .grade{
        font-size: 20px;
        position: absolute;
        bottom: 8%;       
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