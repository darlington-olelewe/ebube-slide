import Title from "../../_components/Title/Title";
import style from "./Page10.module.css"
const Page10=()=>{
    return(
        <div>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"Brief Summary"}/>

                    <ul className={style.ul}>
                        <li><p className={style.page1_pb_2}>Covid-19 is a disease that is caused by a virus called SARS-Cov-2</p></li>
                        <li><p className={style.page1_pb_2}>The virus originated in Wuhan, China. Its source seems to be related to the seafood and live animal market in Wuhan.</p></li>
                        <li><p className={style.page1_pb_2}>The mortality rate was reported to be around 3.4% (March, 2020).</p></li>
                        <li><p className={style.page1_pb_2}>The virus can be transmitted through breathing in droplets when an infected person coughs near you.</p></li>
                        <li><p className={style.page1_pb_2}>Common symptoms of the virus include; Fever, tiredness, cough, sore throat, shortness of breath.</p></li>
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
export default Page10