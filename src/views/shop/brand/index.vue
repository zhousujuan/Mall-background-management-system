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
        <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加</el-button>
        <el-dialog title="添加品牌" :visible.sync="dialogFormVisible">
          <el-form :model="form">
            <el-form-item label="品牌名称：" :label-width="formLabelWidth">
              <el-input v-model="form.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="品牌LOGO：" :label-width="formLabelWidth">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
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
      label="品牌LOGO">
      <template slot-scope="{row}">
        <img
        :src="row.logoUrl"
        style="width:100px; height:80px"
        alt=""/>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="200">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="warning"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>

        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.row)">删除</el-button>
      </template>
    </el-table-column>
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
  name: "Brand",
  data() {
    return {
      //搜索功能
      searchName: "",
      searchList: [],
      //品牌列表
      brandList: [],

      //分页器的
      currentPage: 1,
      limit: 3,
      total: 15,
      //添加功能
      dialogFormVisible: true,
      form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '150px',
        //上传的logo
        imageUrl: ''
    };
  },
  mounted() {
    this.getBrandList();
  },
  methods: {
    //获取当前页的品牌的数据
    async getBrandList(currentPage) {
      const {
        data: { total, records },
      } = await this.$API.brand.getCurrentPageList(
        currentPage ? currentPage : this.currentPage,
        this.limit
      );
      //以上解构赋值相当于:const total = result.data.total;

      this.total = total;
      if (currentPage) {
        this.currPage = currentPage;
      }
      this.brandList = records;
      // console.log(this.brandList)
    },
    // 通过当前事件,可以知道用户点击了哪个条数选择器项
    handleSizeChange(val) {
      console.log("handleSizeChange", val);
      this.limit = val;

      //发送请求,获取对应页面的数据
      this.getBrandList();
    },
    // 通过当前事件,可以知道用户点击了哪个页数
    handleCurrentChange(val) {
      console.log("handleCurrentChange", val);
      this.currentPage = val;

      //发送请求,获取对应页面的数据
      this.getBrandList();
    },

    //获取搜索结果列表
    getSearchList(val) {},

    //编辑功能
    handleEdit(row) {
      console.log(row);
      const h = this.$createElement;
    },
    //删除操作
    handleDelete(row) {
      console.log(row);
      this.$confirm(
        `此操作将永久删除该品牌:  "${row.tmName}", 是否继续?`,
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning",
        }
      )
        .then(async () => {
          //点击确认
          try {
            //1.发送请求删除该品牌
            await this.$API.brand.deleteBrand(row.id);

            //2.弹窗提示用户删除成功
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          } catch (error) {
            //2.弹窗提示用户删除失败
            this.$message({
              type: "info",
              message: "删除失败!",
            });
          }
          //3.请求最新列表,并展示
          //3.1如果当前页面删除了该数据,还有数据需要展示,就请求当前页面
          //3.2如果当前页面删除了该数据,就没有数据了,就请求上一页
          // console.log(1,this.page)
          this.getBrandList(
            this.brandList.length > 1 ? this.currentPage : this.currentPage - 1
          );
        })
        .catch(() => {
          // 如果用户点击取消按钮,会执行.catch内部的代码
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },

    //上传logo
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
  },
};
</script>

<style lang="scss" scoped>
.brandContainer {
  padding: 20px;
  // 头部
  .top {
    display: flex;
    justify-content: space-between;
    .search {
      display: flex;
      width: 60;
      .searchBrand {
        margin-right: 10px;
      }
    }
  }
  // 中间品牌数据列表部分
  .middle {
    margin-top: 20px;
  }
  // 底部样式部分
  .bottom {
    margin-top: 20px;
    text-align: center;
  }

  //上传的图片样式
  .avatar-uploader{
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 178px;
    height: 178px;
    .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }

  }  
}
</style>
