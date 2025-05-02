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
    let test : (string | number | boolean)[] = ["hello", 1, true];
    let num : readonly Number[] = [1,2,3,4]
    let num1 : Number = num[0]
    test.push("hello nè")
    // console.log(test);
    console.log(num);
    // console.log(num1);
    if(typeof(avarible.z)==="number"){
    }
    let chieudai = (avarible.k as string)
    // console.log("chuyển đổi thành  : " + typeof(chieudai))
}

test1(test)