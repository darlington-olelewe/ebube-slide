import {useContext, useEffect, useState} from "react";
import style from "./ProgressBar.module.css"
import {PageContext} from "../../_context/PageContextProvider";
const ProgressBar=()=>{

    const[fill, setFill] = useState("0%")
    const {curr} = useContext(PageContext)
    useEffect(()=>{
        const per = `${curr * 100 / 11}%`;
        setFill(per)

    },[curr])

    return(<div className={style.progress_bar}>
        <div 
            className={style.progress_filler} 
            style={{ width: fill}}
            ></div>
    </div>);
}

export default ProgressBar