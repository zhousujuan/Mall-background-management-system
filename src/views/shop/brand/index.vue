<template>
  <div class="brandContainer">
    <!-- 头部区域 -->
    <div class="top">
      <!-- 左边搜索框部分 -->
      <div class="search">
        <el-input
          class="searchBrand"
          placeholder="请输入想要搜索的品牌名称"
          v-model="searchName"
          clearable>
        </el-input>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </div>
      <!-- 右边添加品牌部分 -->
      <div class="addBrand">
        <el-button type="primary" icon="el-icon-plus">添加</el-button>
      </div>
    </div>
    <!-- 中间表格品牌数据列表部分 -->
    <div class="middle">
      <el-table
      :data="brandList"
    border
    style="width: 100%">
    <el-table-column
      type="index"
      align="center"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      label="品牌名称"
      prop="tmName"
     >
    </el-table-column>
    <el-table-column
      prop="logoUrl"
      label="品牌LOGO">
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
    </el-table-column>
  </el-table>
    </div>

    <!-- 底部分页器模块 -->
    <div class="bottom">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[3, 6, 9, 12]"
      :page-size="100"
      layout=" prev, pager, next, jumper,->, sizes,total"
      :total="total"
      style="text-align:center">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name:'Brand',
  data(){
    return{
      searchName:'',
      searchList:[],

      brandList:[],

      currentPage:1,
      limit:3,
      total:15,

    }
  },
  mounted(){
    this.getBrandList();  
  },
  methods: {
    //获取当前页的品牌的数据
    async getBrandList(currentPage){
      const {
        data: { total, records },
      } = await this.$API.brand.getCurrentPageList(currentPage?currentPage:this.currentPage, this.limit);
      //以上解构赋值相当于:const total = result.data.total;

      this.total=total;
      if(currentPage){
        this.currPage = currentPage;
      }
      this.brandList = records;
      // console.log(this.brandList)
    },
    // 通过当前事件,可以知道用户点击了哪个条数选择器项
      handleSizeChange(val) {
      
      console.log('handleSizeChange',val)
      this.limit=val;

      //发送请求,获取对应页面的数据
        this.getBrandList();   
      },
      // 通过当前事件,可以知道用户点击了哪个页数
      handleCurrentChange(val) {  
      console.log('handleCurrentChange',val)
        this.currentPage=val;

        //发送请求,获取对应页面的数据
        this.getBrandList();
      },
      
      
      //获取搜索结果列表
      getSearchList(val){
        
      }

    },
    
}
</script>

<style lang="scss" scoped>
  .brandContainer{
    padding: 20px;
    // 头部
    .top{
      display: flex;
      justify-content:space-between;
      .search{
        display: flex;
        width:60;
        .searchBrand{
          margin-right:10px;
        }
      }
    }
    // 中间品牌数据列表部分
    .middle{
      margin-top:20px ;

    }
    // 底部样式部分
    .bottom{
      margin-top:20px ;
      text-align: center;
    }
  }
</style>
