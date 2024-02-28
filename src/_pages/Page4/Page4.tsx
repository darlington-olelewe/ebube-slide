import Title from "../../_components/Title/Title";
import style from "./Page4.module.css"
import {Icons} from "../../_assets/Icons";
import FloatingButtons from "../../_components/FloatingButtons/FloatingButtons";
const Page4=()=>{
    const dynamicStyle = {
        backgroundImage: `url(${Icons.page4})`
    }

    return(
        <div>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"How dangerous is it?"}/>
                    <p className={style.page1_ps}>The illness is quite mild for most people, but there</p>
                    <p className={style.page1_ps}>are also sever cases. The mortality rate was</p>
                    <p className={style.page1_ps}>reported to be around 3.4% (March, 2020)</p>
                    <p className={style.page1_ps}>It seems the virus poses a greater danger to older</p>
                    <p className={style.page1_ps}>people as well as people with pre-existing</p>
                    <p className={style.page1_ps}>conditions</p>
                </div>
                <div className={style.page1_right} style={dynamicStyle}>

                </div>

            </div>

            <FloatingButtons/>
        </div>
    )
}
export default Page4