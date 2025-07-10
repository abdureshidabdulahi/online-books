import { useLocation } from "react-router-dom";

import { useParams } from 'react-router-dom';
function Click(){
     const { coverId, title } = useParams();
    
    return(
        <>
        <div className="container">
        <img src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`} />

        </div>

        </>
    );
}
export default Click;