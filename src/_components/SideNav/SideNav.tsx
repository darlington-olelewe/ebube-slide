import { useContext } from "react"
import style from "./SideNav.module.css"
import { NavContext } from "../../_context/NavShowContextProvider"
import {Icons} from "../../_assets/Icons";
import {PageContext} from "../../_context/PageContextProvider";


const SideNav=()=>{

    const {updateNavState} = useContext(NavContext)
    const {curr, setCurr} = useContext(PageContext)

    return(
        <div className={style.nav_container}>
            <div className={style.nav_flex_img}>
                <img onClick={updateNavState} src={Icons.close} alt="cancel button" className={style.close_img}/>
            </div>
            <ul className={style.nav_ul}>
                <li className={curr == 1 ? "active" : ""} onClick={()=>setCurr(1)}>Introduction</li>
                <li className={curr == 2 ? "active" : ""} onClick={()=>setCurr(2)}>What is it?</li>
                <li className={curr == 3 ? "active" : ""} onClick={()=>setCurr(3)}>Origin</li>
                <li className={curr == 4 ? "active" : ""} onClick={()=>setCurr(4)}>How dangerous is it</li>
                <li className={curr == 5 ? "active" : ""} onClick={()=>setCurr(5)}>How does it spread</li>
                <li className={curr == 6 ? "active" : ""} onClick={()=>setCurr(6)}>Symptoms</li>
                <li className={curr == 7 ? "active" : ""} onClick={()=>setCurr(7)}>Treatment</li>
            </ul>
        </div>
    )
}

export default SideNav