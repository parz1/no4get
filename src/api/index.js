import axios from 'axios'; // 引入axios

axios.defaults.timeout = 5000;
axios.defaults.baseURL ='http://49.234.177.29:3001';

//http request 拦截器
axios.interceptors.request.use(
    config => {
      // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
      config.data = JSON.stringify(config.data);
      config.headers = {
        "content-type": "application/json" // 默认转为json格式
      }
      // if(token){
      //   config.params = {'token':token}
      // }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );
  
  
  //http response 拦截器
  axios.interceptors.response.use(
    response => {
      // if(response.data.errCode ==2){
      //   router.push({
      //     path:"/login",
      //     querry:{redirect:router.currentRoute.fullPath}//从哪个页面跳转
      //   })
      // }
      return response;
    },
    err => {
      return Promise.reject(err)
    }
  )
  
  
  /**
   * 封装get方法
   * @param url
   * @param data
   * @returns {Promise}
   */
  
  export function fetch(url,params={}){
    return new Promise((resolve,reject) => {
      axios.get(url,{
        params:params
      })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
    })
  }
  
  
  /**
   * 封装post请求
   * @param url
   * @param data
   * @returns {Promise}
   */
  
   export function post(url,data = {}){
     return new Promise((resolve,reject) => {
       axios.post(url,data)
            .then(response => {
              resolve(response.data);
            },err => {
              reject(err)
            })
     })
   }