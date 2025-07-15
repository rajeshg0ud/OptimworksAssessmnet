

function Shimmer(){

    return(
        <div className="s-card">
            {

                Array(16).fill('').map((e)=>(<div className="shimmer-card"></div>))
            }
        </div>
    )
}

export default Shimmer;