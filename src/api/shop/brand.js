// 引入 request
import request from '@/utils/request';
import { method } from 'bluebird';

//GET /admin/product/baseTrademark/findBaseTrademarkByKeyword/{keyword}
// GET /admin/product/baseTrademark/get/{id}
// 获取BaseTrademark

// GET /admin/product/baseTrademark/getTrademarkList
// getTrademarkList

// POST /admin/product/baseTrademark/inner/findBaseTrademarkByTrademarkIdList
// findBaseTrademarkByTrademarkIdList

// DELETE /admin/product/baseTrademark/remove/{id}
// 删除BaseTrademark
/*

*/

// POST /admin/product/baseTrademark/save
// 新增BaseTrademark

// PUT /admin/product/baseTrademark/update
// 修改BaseTrademark
/*
{
  "id": 0,
  "logoUrl": "string",
  "tmName": "string"
}
*/

// GET /admin/product/baseTrademark/{page}/{limit}
//分页列表


export default{
  // POST /admin/product/baseTrademark/save
  // 新增BaseTrademark
  //增加品牌/修改品牌
  updataBrand(trademark){
    if(trademark.id){
      // 有id说明在修改品牌
      // 请求的时候,传参一定要传第二个参数(代表需要传过去的请求体参数)
      return request.put(`/admin/product/baseTrademark/update`,trademark);
  }else{
      // 没有id说明在新增品牌
      return request.post(`/admin/product/baseTrademark/save`,trademark);
  }
    
  },
  // DELETE /admin/product/baseTrademark/remove/{id}
  // 删除BaseTrademark
  //删除品牌
  deleteBrand(id){
    return request.delete(`/admin/product/baseTrademark/remove/${id}`)
  },
  // GET /admin/product/baseTrademark/getTrademarkList
  // getTrademarkList
  //获取品牌列表
  getBrandList(){
    return request.get(`/admin/product/baseTrademark/getTrademarkList`)
  },

  // GET /admin/product/baseTrademark/{page}/{limit}
  //分页列表
  getCurrentPageList(page,limit){
    return request.get(`/admin/product/baseTrademark/${page}/${limit}`)
  }

}
