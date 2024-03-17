import {Icons} from "../../_assets/Icons";
import {useContext} from "react";
import {PageContext} from "../../_context/PageContextProvider";

import style from "./FloatingButtons.module.css"
const FloatingButtons=()=>{
    const {curr, setCurr} = useContext(PageContext)

    return(

        <div className={style.fl_flex}>
            <div> { curr > 1 && <button onClick={()=>{setCurr(curr - 1)}} className={style.fl_btn}> <img src={Icons.left} className={style.fl_img}/>prev</button>}</div>
            <div> { curr < 11 && <button onClick={()=>{setCurr(curr + 1)}} className={style.fl_btn}> next <img src={Icons.right} className={style.fl_img}/></button>}</div>
        </div>
    )
}

export default FloatingButtons