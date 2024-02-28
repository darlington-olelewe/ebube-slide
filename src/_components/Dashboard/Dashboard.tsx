import ProgressBar from "../ProgressBar/ProgressBar"
import style from "./Dashboard.module.css"
import {Icons} from "../../_assets/Icons";
import {useContext} from "react";
import {NavContext} from "../../_context/NavShowContextProvider";
import SideNav from "../SideNav/SideNav";
import {PageContext} from "../../_context/PageContextProvider";

const DashBoard=()=>{

    const {navState, updateNavState} = useContext(NavContext)
    const {curr, setCurr} = useContext(PageContext)

    return (
        <div className={style.dashboard_container}>
            
            <div className={style.dashboard_flex}>

                <div className={style.dash_pad}> <img onClick={()=>setCurr(curr-1)} src={Icons.left} alt={"left Icon"} className={style.back}/></div>

                {
                    !navState && <div className={style.dash_pad}><img onClick={updateNavState} src={Icons.menu} alt={"menu icon"} className={style.menu}/></div>
                }
                {
                    navState &&
                        <div className={style.dash_pad_relative}>
                            <SideNav/>
                        </div>
                }
            </div>
            <div className={style.attach}>
                <ProgressBar/>
            </div>
        </div>
    )
}
export default DashBoard