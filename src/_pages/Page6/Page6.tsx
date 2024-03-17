import Title from "../../_components/Title/Title";
import style from "./Page6.module.css"
import {Icons} from "../../_assets/Icons";
const Page6=()=>{
    const dynamicStyle = {
        backgroundImage: `url(${Icons.page6})`
    }

    return(
        <div>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"Symptoms"}/>
                </div>
                <div className={style.page1_right} style={dynamicStyle}>

                </div>

            </div>

        </div>
    )
}
export default Page6