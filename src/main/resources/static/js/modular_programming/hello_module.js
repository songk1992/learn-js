// ES6 이후로는 이렇게 관리

const localVal = "global에서는 접근 불가";
const localVal2 = "여기서만 사용가능";


export const outsider = "밖에서 노는 친구";

function helloLocally(){
	console.log("이함수는 export가 없어서 여기서만 이용");
}




// export는 외부에서 접근 가능
export function jump(){
	return "jump";
}

// export는 외부에서 접근 가능
export function hello(){
	return "hello";
}

