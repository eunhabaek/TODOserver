import { API_BASE_URL } from "../app-config";

//클라이언트 요청 처리 할 함수
//api=작업, method=전송방식, request=파라미터
export function call(api,method,request){
    let options={
        headers:new Headers({
            "Content-Type":"application/json"
        }),
        url:API_BASE_URL+api,
        method:method,
        
    };
    //GET 방식일 때 파라미터 생성
    if (request){
        options.body=JSON.stringify(request);
    }

    //요청
    return fetch(options.url,options)
    .then((response)=>response.json()
    .then((json)=>{
        if(!response.ok){
            return Promise.reject(json);
        }
        return json;
    })
);
}
