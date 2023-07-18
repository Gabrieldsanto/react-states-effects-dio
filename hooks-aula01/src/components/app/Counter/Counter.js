function Counter(){

    let quantily=10;

    function upQuantily(){
            
        quantily= quantily + 1;
        document.getElementById("counter-box").innerHTML= quantily;

        console.log(quantily);
    }

    return(
        <>
        <h1 id="counter-box">{quantily}</h1>
        <button onClick={upQuantily}>Aumentar</button>
        </>
    )
}

export default Counter;