let backendHost;

//이전에 IE와 다른 브라우저들이 자바스크립트에서 BOM이 달라서 
//값을 대입하기 위해 사용하던 문법 (cross browsing)
//이를 해결하기 위해 jquery 등장
const hostname=window && window.location && window.location.hostname;

if (hostname==="localhost"){
    backendHost="http://localhost:8000"
}
//backtick을 이용하여 변수를 문자열로 삽입 가능함
export const API_BASE_URL=`${backendHost}` 