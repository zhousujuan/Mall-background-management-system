<template>
  <div class="attrContainer">
    <!-- 三级联选 -->
    <CategorySelector></CategorySelector>
    <!-- 数据列表 -->
    <el-card class="box-card">
      <el-button
      type="primary"
      icon="el-icon-plus"
      style="margin-bottom: 20px;"
      >添加属性</el-button>

      <el-table
        
        border
        style="width: 100%">
        <el-table-column
        type="index"

          label="序号"
          width="80">
        </el-table-column>
        <el-table-column
          prop="name"
          label="属性名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="属性值列表">
        </el-table-column>
        <el-table-column
          label="操作">
        </el-table-column>
      </el-table>

    </el-card>

  </div>
</template>

<script>
export default {
  name:'Attr',
   data() {
      return {
        
      }
    },
    mounted(){
      
     
    },
    methods:{
      
    }
}
</script>

<style lang="scss" scoped>

</style>
