interface face{
    x: number;
    y: number;
    z: string
}

const test : face = {
    x : 5,
    y : 6,
    z : "hello"
}

function test1(avarible : face){
    
    console.log(avarible.x)
}

test1(test)