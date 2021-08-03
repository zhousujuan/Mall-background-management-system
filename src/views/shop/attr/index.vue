<template>
  <div class="attrContainer">
    <!-- 三级联选 -->
    <el-card class="box-card ">
      <!-- 一级分类 -->
      <span class="text">一级分类</span class="text">
      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- 二级分类 -->
      <span class="text">二级分类</span>
      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <!-- 三级分类 -->
      <span class="text">三级分类</span>
      <el-select v-model="value" filterable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </el-card>
    <!-- 数据列表 -->
    <el-card class="box-card">
      <el-button 
      type="primary" 
      icon="el-icon-plus"
      style="margin-bottom: 20px;"
      >添加属性</el-button>

      <el-table
        :data="attrList"
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

        //三级
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        //数据表格
         attrList: []
      }
    },
    mounted(){
      this. get()
    },
    methods:{
      //获取属性列表
      async get(){
        const result=await this.$API.attr.getCategory1()
        console.log(result)
      },
    }
}
</script>

<style lang="scss" scoped>
.attrContainer{
  .box-card{
    margin-bottom: 20px;
    .text{
      margin:0 10px;
    }
  }
}

</style>