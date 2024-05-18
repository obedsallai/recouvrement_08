import { Children } from "react";
export default function Stat({children}:{children:React.ReactNode}){
    return(
           <div className="p-1 bg-red-200 rounded-lg text-red-700">
                {children}
           </div>
                
            
    )
};