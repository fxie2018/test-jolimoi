<template>
    <div>
        <el-row class="main-row main-row-top">
            <el-col :sm="24" :lg="12" class="top-part top-left"><h1>this is a page for<br/> beauty product search</h1></el-col>
            <el-col :sm="24" :lg="12" class="top-part top-right"></el-col>
        </el-row>
        <el-row class="main-row main-row-bottom">
            <el-col :lg="{span:12,offset:6}" :sm="24"><search/></el-col>
        </el-row>
    </div>

</template>

<script>
    import Search from '../components/Search.vue'
    export default {
        name: 'home',
        data(){
            return {
            }
        },
        components:{
            Search
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .main-row .top-part{
        height: 50vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .main-row .top-left{
        background: #55D7FF;
    }
    .main-row .top-left h1{
        text-align: center;
    }
    .main-row .top-right{
        background: url("../assets/beauty-products.jpg") 100% 100% no-repeat;
        background-size:cover ;
    }
    .main-row-bottom{
        background: #DB0992;
        min-height: 50vh;
    }
</style>
