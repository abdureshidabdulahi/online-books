
import { useEffect, useState } from 'react';
import './body.css'

function Body(){
    const [books,setbooks] =useState([])
    useEffect(()=>{
        fetch('https://openlibrary.org/search.json?q=education&page=1')
        .then(response=>response.json())
        .then((data)=>{
            console.log(data.docs)
         setbooks(data.docs)
    })
       
    },[])
    return(
        <div className="body-container">
            <h1>Latest Books</h1>
            {books.map((book)=>(
                <div className='books' 
                style={{
                    backgroundImage:`url(https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg)`,
                    width:'150px',
                    height:'200px'
                }}
                >
                
                </div>
            ))

            

            }

        </div>
    );
}
export default Body;