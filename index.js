function receivesAFunction(callbackFun){
    callbackFun();
}

function returnsANamedFunction(){
    function namedFunction(){

    }    return namedFunction;
}

function returnsAnAnonymousFunction(){
    return function () {
        console.log(`hello world`);
    };
}