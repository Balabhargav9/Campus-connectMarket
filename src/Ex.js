import { useState } from "react";
import Paypal from "./paypal";
const Ex=() =>{
    const [checkout,setcheck] = useState(false);
    return(<>
    {
        checkout?(<Paypal/>) :(<div><button onClick={()=>{setcheck(true)}}>checkout</button></div>)
    }
    </>);
}
export default Ex;