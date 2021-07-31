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
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="date"
      label="序号"
      width="80">
    </el-table-column>
    <el-table-column
      prop="brandName"
      label="品牌名称"
     >
    </el-table-column>
    <el-table-column
      prop="brandLogo"
      label="品牌LOGO">
    </el-table-column>
    <el-table-column
      prop="do"
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
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout=" prev, pager, next, jumper,->, sizes,total"
      :total="400">
    </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name:'Brand',
  data(){
    return{
      searchName:''
    }
  }
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
    .bottom{
      margin-top:20px ;
      text-align: center;
    }
  }
</style>
