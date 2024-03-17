import DashBoard from "./_components/Dashboard/Dashboard"
import MainLayout from "./_components/MainLayout/MainLayout";
import style from "./Entry.module.css"
import Page1 from "./_pages/Page1/Page1";
import {useContext} from "react";
import Page2 from "./_pages/Page2/Page2";
import {PageContext} from "./_context/PageContextProvider";
import Page3 from "./_pages/Page3/Page3";
import Page4 from "./_pages/Page4/Page4";
import Page6 from "./_pages/Page6/Page6";
import Page7 from "./_pages/Page7/Page7";
import Page5 from "./_pages/Page5/Page5";
import FloatingButtons from "./_components/FloatingButtons/FloatingButtons";

const Entry=()=>{
const {curr} = useContext(PageContext)


  return (
    <div>
      <DashBoard/>
        <MainLayout>
          {curr==1 && <Page1/>}
          {curr==2 && <Page2/>}
          {curr==3 && <Page3/>}
          {curr==4 && <Page4/>}
          {curr==5 && <Page5/>}
          {curr==6 && <Page6/>}
          {curr==7 && <Page7/>}

          <div className={style.fl_btns_holder}>
            <FloatingButtons/>
          </div>

        </MainLayout>
      
    </div>
    
  )
}

export default Entry
