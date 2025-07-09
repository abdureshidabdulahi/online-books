
import { useEffect, useState } from 'react';
import './body.css'
function Body(){
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
              <a  key={index} href={`https://archive.org/details/${book.title}`} target="_blank" rel="noopener noreferrer">
                  <div className='books' 
                
                style={{
                    backgroundImage:`url(https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg)`,
                    width:'150px',
                    backgroundSize:'contain',
                    height:'200px'
                }}
                >
                
                </div>
              </a>
            ))

            

            }

        </div>
    );
}
export default Body;