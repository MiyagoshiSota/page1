import NextImg from "next/image"

type Props ={
    imgURL:string
    size:number
}

const Icon= ({imgURL,size}:Props) => {
    const style = {
        borderRadius: 50,
    }

    return(
        <NextImg style={style} width={size} height={size} src={imgURL} alt="" />
    )
}

export default Icon