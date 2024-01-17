
let CurrentTime = ()=>{
    let time = new Date();
    return <div>
        <p className="text-primary">
            Current Time is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </p>
    </div>
}
export default CurrentTime;
