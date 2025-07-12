
import { useEffect, useState } from 'react';
import './body.css'
import { Link } from 'react-router-dom';
 
function Body({cover_i}){
    const [books,setbooks] =useState([])
    useEffect(()=>{
       
         fetch('https://openlibrary.org/search.json?q=first_publish_year:[2016 TO *]&page=1')
        .then(response=>response.json())
        .then((data)=>{
            console.log(data.docs)
         setbooks(data.docs)
       
    })
    },[])
     const filteredByImage = books.filter((book)=>book.cover_i!==undefined && book.ebook_access != 'no_ebook')

    

     
    return(
        <div className="body-container">
           
            {filteredByImage.slice(0,34).map((book,index)=>(
              <Link  key={index}  target="_blank"  to={`/click/${book[cover_i]}/${encodeURIComponent(book.title)}`} >
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