<template>
    <section id="search">
        <el-row>
            <el-col :span="16" :offset="1">
                <el-input
                        placeholder="search products"
                        v-model="searchContent"
                        @keyup.enter.native="getData"
                >
                </el-input>

            </el-col>
            <el-col :span="5" :offset="1">
                <el-button type="primary" @click="getData">search</el-button>
            </el-col>
        </el-row>
        <el-row>
            <div v-if="isSearch" id="searchResult">
                <ul>
                    <li v-for="(product,index) in result" :key="index">
                        <span class="brand bold">{{product.brand}}</span> - <span class="productName">{{product.name}}</span>
                    </li>
                </ul>
            </div>
            <div v-else-if="emptyResult" id="noResult">
               no result
            </div>
            <div v-else-if="error" id="errorSearch">
                error!
            </div>
        </el-row>
    </section>

</template>
<script>
    export default {
        name: 'search',
        data(){
            return{
                searchContent:"",
                result:[],
                emptyResult:false,
                error:false
            }
        },
        methods:{
            getData () {
                return this.$axios
                    .get('https://cors-anywhere.herokuapp.com/https://skincare-api.herokuapp.com/product?q='+this.searchContent)
                    .then(res => {
                        this.result = res.data;
                        if(res.data.length == 0){
                            this.emptyResult = true;
                        }
                    })
                    .catch(e => {
                        this.error = true;
                        console.log(e);
                    })
            }
        },
        computed:{
            isSearch(){
                return this.result.length>0;
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #search{
        margin-top:50px;
    }
    #searchResult,#noResult,#errorSearch{
        margin-top:20px;
        color:#ffffff;
        padding:0 50px;
    }
    #search button{
        color:#ffffff;
    }
</style>
