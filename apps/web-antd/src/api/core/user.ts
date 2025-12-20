import type { UserInfo } from '@vben/types';

import { requestClient } from '#/api/request';

/**
 * 获取用户信息
 */
export async function getUserInfoApi() {
  return requestClient.get<UserInfo>('/user/info');
}
export async function saveUserApi(user: UserInfo) {
  return requestClient.post<UserInfo>('/user', user);
}
export async function deleteUserApi(userId: number) {
  return requestClient.delete<boolean>(`/user/${userId}`);
}

// export async function saveUserApi(user: UserInfo) {
//   return requestClient.put<UserInfo>('/user', user);
// }

// export async function saveUserApi(user: UserInfo) {
//   const url = user.id ? `/user/${user.id}` : '/user/';
//   return requestClient.request<UserInfo>(url, {
//     data: user,
//     // OR PUT
//     method: user.id ? 'PUT' : 'POST',
//   });
// }
