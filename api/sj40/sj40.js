import request from "@/utils/request";

//查询数据列表
export function listZbmain(query) {
  return request({
    url: '/zbmain/zbmain/list',
    method: 'get',
    params: query
  })
}

// 查询主要焊缝施焊记录主表详细
export function getZbmain(id) {
  return request({
    url: '/zbmain/zbmain/' + id,
    method: 'get'
  })
}

// 修改主要焊缝施焊记录主表
export function updateZbmain(data) {
  return request({
    url: '/zbmain/zbmain',
    method: 'put',
    data: data
  })
}