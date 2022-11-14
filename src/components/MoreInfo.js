import React, {useEffect} from "react";
import useUser from "../hooks/useUser";
const MoreInfo = () => {
    const {name, years} = useUser();
    useEffect( () => {
        console.log(name, years);
    }, [] )
	return(
        
        <div>
            <h2>MoreInfo</h2>
            <h3>User: {name}</h3>
            <h3>Age: {years}</h3>
        </div>

    );
};

export default MoreInfo;
