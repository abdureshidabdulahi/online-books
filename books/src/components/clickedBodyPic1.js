 
import { useLocation } from "react-router-dom";
 
function Click(){
    const location = useLocation();
    const {book}=location.state || {};
    
    return(
        <>
        <div className="container">
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />

        </div>

        </>
    );
}
export default Click;