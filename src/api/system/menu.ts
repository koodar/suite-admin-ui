import { http } from "/@/utils/http/request";

/**
 * @description: 根据用户id获取用户菜单
 */
export function adminMenus() {
  return http.request({
    url: "/menus",
    method: "GET",
  });
}
