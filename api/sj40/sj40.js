import request from "@/utils/request";

//查询数据列表
export function listZbmain(query) {
  return request({
    url: '/zbmain/zbmain/list',
    method: 'get',
    params: query
  })
}