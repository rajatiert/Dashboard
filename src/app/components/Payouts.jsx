import Image from "next/image"
import { questionLogo, askUrl, dropDownUrl, searchUrl } from "@/constants/constant"
import PayoutsHeader from "./PayoutsHeader";
import Overview from "./Overview";


const Payouts = () => {

    return <div className="flex flex-col gap-8 w-full">
         <PayoutsHeader/>
         <Overview/>
    </div>;

  
}

export default Payouts