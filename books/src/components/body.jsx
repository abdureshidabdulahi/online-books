
 
import './body.css'
import { Link } from 'react-router-dom';
 
function Body({filteredByImage}){
    return(
        <div className="body-container">
           
            {filteredByImage.slice(0,34).map((book,index)=>(
              <Link  key={index}  target="_blank" >
                  <div className='books' 
                
                style={{
                    backgroundImage:`url(https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg)`,
                    width:'150px',
                    backgroundSize:'contain',
                    height:'200px'
                }}
                >
                
                </div>
              </Link>
            ))

            

            }

        </div>
    );
}
export default Body;