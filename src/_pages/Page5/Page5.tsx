import Title from "../../_components/Title/Title";
import style from "./Page5.module.css"
import {Icons} from "../../_assets/Icons";
const Page5=()=>{

    return(
        <div>
            <Title title={"How does it spread?"}/>

            <video controls={true} className={style.video}>
                <source src={Icons.page5}/>
            </video>

        </div>
    )
}
export default Page5