// 引入 request
import request from '@/utils/request';
export default{
  // GET /admin/product/attrInfoList/{category1Id}/{category2Id}/{category3Id}
  // attrInfoList
  //获取属性信息列表
  getAttrInfoList(category1Id,category2Id,category3Id){
    return request.get(`/admin/product/attrInfoList/${category1Id}/${category2Id}/${category3Id}`)
  } ,
  
  // DELETE /admin/product/deleteAttr/{attrId}
  // deleteAttr
  //删除属性
  deleteAttr(attrId){
    return request.delete(`/admin/product/deleteAttr/${attrId}`)
  },
  
  // GET /admin/product/getAttrValueList/{attrId}
  // getAttrValueList
  //获取属性值列表
  getAttrValueList(attrId){
    return request.get(`/admin/product/getAttrValueList/${attrId}`)
  },

  
  // POST /admin/product/saveAttrInfo
  // saveAttrInfo
  //保存添加属性
  saveAttrInfo(){
    return request.post(`/admin/product/saveAttrInfo`)
  }

}