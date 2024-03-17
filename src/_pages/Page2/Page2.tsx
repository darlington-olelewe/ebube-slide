import Title from "../../_components/Title/Title";
import style from "./Page2.module.css"
import {Icons} from "../../_assets/Icons";
const Page2=()=>{
    const dynamicStyle = {
        backgroundImage: `url(${Icons.page2})`
    }

    return(
        <div>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"What is it?"}/>
                    <p className={style.page1_ps}>Covid-19 is a disease that is caused by a virus</p>
                    <p className={style.page1_ps}>called SARS-Cov-2 which is one of several known</p>
                    <p className={style.page1_ps}>corona viruses. These virus cause respiratory</p>
                    <p className={style.page1_ps}>illness, some of them cause mild symptoms while</p>
                    <p className={style.page1_ps}>some can be severe. These Include</p>
                    <p className={style.break}></p>
                    <p className={style.page1_ps}>- SARS</p>
                    <p className={style.page1_ps}>- MERS coronavirus</p>
                </div>
                <div className={style.page1_right} style={dynamicStyle}>

                </div>

            </div>
        </div>
    )
}
export default Page2