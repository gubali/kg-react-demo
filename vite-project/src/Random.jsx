function RandomKey (){
    let number = Math.random()*100;
    return <h3 style={{'color':'red'}}>Random Number is :{Math.round(number)}</h3>;
}
export default RandomKey;