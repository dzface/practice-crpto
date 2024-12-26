// crypto : NodeJs 내장 암호화 모듈
const crypto = require("crypto");

// 랜덤UUID 생성
const UUID = crypto.randomUUID();

// 랜덤 value 생성 : Int32Array, Uint8Array 등의 ypedArray를 파라미터로 전달해야함
const arr = new Int32Array(1,2,3,5);
console.log(crypto.getRandomValues(arr).toString("hex")); // toString(몇진수로 변환할 것인지) 8, 16, 32, base64

// 랜덤 문자열 생성 randomBytes(byte size)
console.log(crypto.randomBytes(1).toString("hex")); // // 1바이트 생성 예: '8a'
console.log(crypto.randomBytes(4).toString("hex")); // // 4바이트 생성예: '1a2b3c4d'








// 단방향 암호화 : 암호화한 후 다시 해독 할 필요가 없는 경우, 비밀번호를 암호화 할경우 다시 알 수 없음
// 사용가능한 알고리즘 목록들 : console.log(crypto.getHashes());

// 사용방법
crypto.createHash('sha3-256');


// 양방향암호화 : 암호화한 데이터를 해독하여(복호화) 재사용 할 필요성이 있는 경우
// 사용가능한 알고리즘 목록들 : console.dir(crypto.getCiphers());
// 사용방법 (키는 환경변수로 설정해야 보안가능)
// crypto.createCipher(알고리즘, 키)





// reference
// https://okdevtv.com/mib/nodejs/textbook
// https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-crypto-%EB%AA%A8%EB%93%88-%EC%95%94%ED%98%B8%ED%99%94