interface face{
    x: number;
    y: number;
    z: unknown;
    k: unknown;
}   

const test : face = {
    x : 5,
    y : 6,
    z : 3,
    k : "hello nè"

}

function test1(avarible : face){
    if(typeof(avarible.z)==="number"){
        // console.log("là số : " + avarible.z)
        // console.log("kết quả là :" +)
    }
    // console.log(typeof(avarible.y))
    let chieudai = (avarible.k as string)
    console.log("chuyển đổi thành  : " + typeof(chieudai))
}

test1(test)