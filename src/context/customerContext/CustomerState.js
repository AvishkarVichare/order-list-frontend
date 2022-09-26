import { useState } from "react";
import customerContext from "./customerContext";

const CustomerState = (props) => {
    const [custData, setCustData] = useState([]);

    const [search, setSearch] = useState("");



    return (
        <customerContext.Provider value={{custData, setCustData,search, setSearch}}>
            {props.children}
        </customerContext.Provider>
    )
}

export default CustomerState;