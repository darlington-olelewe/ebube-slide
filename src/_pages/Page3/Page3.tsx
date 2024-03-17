import Title from "../../_components/Title/Title";
import style from "./Page3.module.css"
import {Icons} from "../../_assets/Icons";
const Page3=()=>{
    const dynamicStyle = {
        backgroundImage: `url(${Icons.page3})`
    }

    return(
        <div>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"Origin:"}/>
                    <p className={style.page1_ps}>The SARS-CoV-2 virus originated in Wuhan, China</p>
                    <p className={style.page1_ps}>The source of the virus seems to be related to the</p>
                    <p className={style.page1_ps}>seafood and live animal market in Wuhan, though</p>
                    <p className={style.page1_ps}>is yet to be known what animal it came from.</p>
                    <p className={style.break}></p>
                    <p className={style.page1_ps}>The virus outbreak started with a group of people</p>
                    <p className={style.page1_ps}>who exhibited respiratory symptoms in Wuhan</p>
                    <p className={style.page1_ps}>then it spread to other parts of China and the</p>
                    <p className={style.page1_ps}>world at large</p>
                </div>
                <div className={style.page1_right} style={dynamicStyle}>

                </div>

            </div>
        </div>
    )
}
export default Page3