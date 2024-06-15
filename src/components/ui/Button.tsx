import "@/styles/button.scss"

type Props ={
    text:string
    width:number
    color:string
}

const WhiteButton = ({text,width,color}:Props) =>{
    const style ={
        width: width,
    }

    return(
        <div style={style} className={`${color == "black" ? "black" : "white"} button`}>
            <p>{text}</p>
        </div>
    )
}

export default WhiteButton