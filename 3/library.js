var a = 10;
var b = 20;
var c = 30;
export {a, b}; // 여러 개 내보내기?
export default c; // export default 내보낼 거 => export default는 파일 당 1회

export var d = 40; // 변수/함수 정의할 때 바로 내보내기