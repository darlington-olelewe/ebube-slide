import Title from "../../_components/Title/Title";
import style from "./Page7.module.css"
import {Icons} from "../../_assets/Icons";
const Page7=()=>{
    const dynamicStyle = {
        backgroundImage: `url(${Icons.page7})`
    }

    return(
        <div>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"Treatment:"}/>
                    <p className={style.page1_ps}>There is no <span className={style.im}>treatment</span> for this disease.</p>
                    <p className={style.page1_ps}>However, infected people should receive medical</p>
                    <p className={style.page1_ps}>care to relieve the symptoms. Potential vaccines</p>
                    <p className={style.page1_ps}>and drugs are being developed and tested</p>

                    <p className={style.page1_pb}><span className={style.im}>Important!</span></p>
                    <p className={style.page1_ps}>If you suspect that you have covid-19, immediately</p>
                    <p className={style.page1_ps}>contact your doctor.</p>
                </div>
                <div className={style.page1_right} style={dynamicStyle}>

                </div>

            </div>
        </div>
    )
}
export default Page7