<template>
  <el-card class="box-card ">
      <!-- 一级分类 -->
      <span class="text">一级分类</span class="text">
      <el-select v-model="item" filterable placeholder="请选择">
        <el-option
          v-for="item in category1List"
          :key="item.id"
          :value="item.name">
        </el-option>
      </el-select>
      <!-- 二级分类 -->
      <span class="text">二级分类</span>
      <el-select v-model="item" filterable placeholder="请选择">
        <el-option
          v-for="item in category2List"
          :key="item.id"
          :value="item.name">
        </el-option>
      </el-select>
      <!-- 三级分类 -->
      <span class="text">三级分类</span>
      <el-select v-model="item" filterable placeholder="请选择">
        <el-option
          v-for="item in category3List"
          :key="item.id"
          :value="item.name">
        </el-option>
      </el-select>
    </el-card>
</template>

<script>
export default {
  name:'CategorySelector',
  data(){
    return{
      //三级分类数据列表
        category1List:[],
        category2List:[],
        category3List:[],
        Category1Id:'',
        Category2Id:'',
        Category3Id:'',
        item:{},
        //数据表格
         attrList: []
    }
  },
  mounted(){
      this.getCategoryList()
     
    },
    methods:{
      //获取一级分类列表
      async getCategoryList(){
        const category1Data=await this.$API.category.getCategory1List()
        this.category1List=category1Data.data;
        // console.log('一级分类列表：',this.category1List);

        //获取二级分类列表
        const category2Data=await this.$API.category.getCategory2List(Category1Id)
        this.category2List=category2Data.data;
      },
}
</script>

<style lang="scss" scoped>
.box-card{
    margin-bottom: 20px;
    .text{
      margin:0 10px;
    }
  }
</style>