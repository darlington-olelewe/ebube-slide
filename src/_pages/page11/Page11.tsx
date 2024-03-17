import Title from "../../_components/Title/Title";
import style from "./Page11.module.css"
const Page11=()=>{
    return(
        <div>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"Reference Materials"}/>

                    <p className={style.pb_b}>If you wish to know more about the covid-19, Its symptoms and preventive measures, below are some educative links for your perusal.</p>

                    <ul className={style.ul}>
                        <li><p className={style.page1_pb_2}>https://www.who.int/health-topics/coronavirus#tab=tab_1</p></li>
                        <li><p className={style.page1_pb_2}>https://www.paho.org/en/topics/coronavirus-infections/coronavirus-disease-covid-19-pandemic/communicating-about-covid-19</p></li>
                        <li><p className={style.page1_pb_2}>https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public/videos</p></li>
                    </ul>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                </div>

            </div>
        </div>
    )
}
export default Page11