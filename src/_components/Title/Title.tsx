import style from "./Title.module.css"
const Title=(props:{title:string})=>{
    return (
        <h1 className={style.title_title}>{props.title}</h1>
    )
}

export default Title