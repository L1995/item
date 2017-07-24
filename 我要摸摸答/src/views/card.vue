<template>
    	<div class="card">
            <div class="card_info">
                <img src="../img/6.jpg" alt="">
                <p>光大“福”卡</p>
            </div>
            <main>
                <ul>
                    <li v-for="i in arr">
                        <h4>{{i.tit}}</h4>
                        <p>{{i.content}}</p>
                    </li>                 
                </ul>
            </main>
            <footer>
                <button>立即申请</button>
            </footer>
        </div>
</template>


<script>
	export default {
		name:'card',
        data(){
            return {
                list:[],
                id:0,
                arr:[]
            }
        },
        created:function(){
            this.list = this.$store.state.datas;
            this.id = this.$route.params.id;
            this.list.forEach((v)=>{
                 if(v.id == this.id){
                    this.arr = v.list;
                    // console.log(v.list)
                 }
            })
        }
	}
</script>


<style scoped>    
    .card_info{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .card_info img{
        width: 188px;height: 119px;
        margin: 16px 0;
    }
    main{
        display: flex;
        justify-content: center;       
    }
    ul{
        width: 90%;
        border-top: 1px solid #ccc;
        margin-top: 25px;
    }
    ul li{
        margin: 25px 0;
    }
    ul li h4{
        color: orange;
        margin-bottom: 5px;
    }
    ul li p{
        font-size: 14px;
    }
    footer{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: fixed;
        bottom: 20px;
    }
    button{
        outline: none;
        border: none;
        background: orange;
        color: #fff;
        border-radius: 5px;
        width: 80%;
        line-height: 36px;
        font-size: 16px;
    }
</style>