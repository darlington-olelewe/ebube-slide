import {createContext, ReactNode, useState} from "react";

export const PageContext = createContext<{curr:number, setCurr:(num:number)=>void}>({curr:1, setCurr:()=>null});

const PageContextProvider=(props:{children:ReactNode})=>{
    const [page,setPage] = useState<number>(1)

    const updatePage=(num: number)=>{
        if(num >= 1 && num <= 11){
            setPage(num);
        }
    }


    return(
        <PageContext.Provider value={{curr:page, setCurr:updatePage}}>
            {props.children}
        </PageContext.Provider>
    )

}

export default PageContextProvider