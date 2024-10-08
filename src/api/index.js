import axios from "axios";

export const getUserName = async () => {
  const [error, res] = await to(request.get("http://gitee.com/oauth/token"));
  if (error) return console.log("请求出错！");
  console.log(res);
  return res.data;
};
// export const getUserName = () => {
//   return axios.get("http://gitee.com/oauth/token");
// };

// export const goToWare = () => {
//   this.$router.push("/test");
// };
