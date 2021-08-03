// 引入 request
import request from '@/utils/request';
export default{
// GET /admin/product/get/category1/{id}
// 获取一级分类
  getCategory1_list(id){
    return request.get(`/admin/product/get/category1/${id}`)
  },

// GET /admin/product/get/category2/{id}
// 获取二级分类
getCategory2(id){
  return request.get(`/admin/product/get/category2/${id}`)
},

// GET /admin/product/get/category3/{id}
// 获取三级分类
getCategory3(id){
  return request.get(`/admin/product/get/category3/${id}`)
},

// GET /admin/product/getCategory1
// getCategory1
getCategory1(){
  return request.get('/admin/product/getCategory1')
},


// GET /admin/product/getCategory2/{category1Id}
// getCategory2

// GET /admin/product/getCategory3/{category2Id}
// getCategory3

// POST /admin/product/inner/findBaseCategory3ByCategory3IdList
// findBaseCategory3ByCategory3IdList

// DELETE /admin/product/removeCategory1/{id}
// 删除一级分类
removeCategory1(id){
  return request.delete(`/admin/product/removeCategory1/${id}`)
},

// DELETE /admin/product/removeCategory2/{id}
// 删除二级分类
removeCategory2(id){
  return request.delete(`/admin/product/removeCategory2/${id}`)
},

// DELETE /admin/product/removeCategory3/{id}
// 删除三级分类
removeCategory3(id){
  return request.delete(`/admin/product/removeCategory3/${id}`)
},

// POST /admin/product/saveCategory1
// 新增一级分类
saveCategory1(){
  return request.post(`/admin/product/saveCategory1`)
},

// POST /admin/product/saveCategory2
// 新增二级分类
saveCategory2(){
  return request.post(`/admin/product/saveCategory2`)
},

// POST /admin/product/saveCategory3
// 新增三级分类
saveCategory3(){
  return request.post(`/admin/product/saveCategory3`)
},

// PUT /admin/product/updateeCategory1
// 修改一级分类
updateeCategory1(){
  return request.put('/admin/product/updateeCategory1')
},
// PUT /admin/product/updateeCategory2
// 修改二级分类
updateeCategory2(){
  return request.put('/admin/product/updateeCategory2')
},

// PUT /admin/product/updateeCategory3
// 修改三级分类
updateeCategory3(){
  return request.put('/admin/product/updateeCategory3')
}

}

