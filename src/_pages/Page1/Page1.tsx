import Title from "../../_components/Title/Title";
import style from "./Page1.module.css"
import {Icons} from "../../_assets/Icons";
const Page1=()=>{
    const dynamicStyle = {
        backgroundImage: `url(${Icons.page1})`
    }

    return(
        <>

            <div className={style.page1_flex}>
                <div className={style.page1_left}>
                    <Title title={"Corona Virus Disease (Covid-19):"}/>
                    <p className={style.page1_pb}>What you need to know</p>
                    <p className={style.page1_ps}>The aim of this project is to provide learners with</p>
                    <p className={style.page1_ps}>some basic information about covid-19, the virus</p>
                    <p className={style.page1_ps}>that causes it, its symptoms and how they can</p>
                    <p className={style.page1_ps}>protect themselves</p>
                </div>
                <div className={style.page1_right} style={dynamicStyle}>

                </div>

            </div>


        </>
    )
}
export default Page1