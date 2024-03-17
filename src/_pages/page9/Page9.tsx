import Title from "../../_components/Title/Title";
import style from "./Page9.module.css"
const Page9=()=>{

    return(
        <div>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"Travel Advice"}/>
                    <p className={style.page1_ps_1}>As the virus continues to spread, for those traveling here are some general safety measures to consider;
                    </p>

                    <ul className={style.ul}>
                        <li><p className={style.page1_ps}>Avoid traveling if you are unwell (especially id the symptoms include; fever, cough, difficulty breathing)</p></li>
                        <li><p className={style.page1_ps}>If you start feeling sick while traveling, inform the crew and seek medical attention</p></li>
                        <li><p className={style.page1_ps}>Follow standard protective practices.</p></li>
                    </ul>

                    <p className={style.page1_ps_1}><span className={style.im}>Important!</span></p>
                    <p className={style.page1_ps_1}>If you feel unsure, kindly consult your doctor or local authorities before traveling.</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

            </div>
        </div>
    )
}
export default Page9