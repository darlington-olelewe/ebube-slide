import { ReactNode, createContext, useState } from "react";


export const NavContext = createContext<{navState:boolean, updateNavState:()=>void}>({navState:false, updateNavState:()=>null})

const NavShowContextProvider=(props:{children:ReactNode})=>{
    const [state, setState] = useState<boolean>(false);

    const toggleState=()=>{
        setState(!state);
    }

    return(
       <NavContext.Provider value={{navState:state, updateNavState:toggleState}}>
        <div >
            {props.children}
        </div>
    </NavContext.Provider>
    )
}
export default NavShowContextProvider

