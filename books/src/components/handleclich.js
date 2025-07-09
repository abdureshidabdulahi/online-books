import { useEffect, useState } from "react";

function Handled(){
    const [books,setbooks]=useState([])
   useEffect(()=>{
     fetch('https://openlibrary.org/search.json?q=first_publish_year:[2016 TO *]&page=1')
    .then((response)=>response.json())
    .then((data)=>{
        setbooks(data.docs)
    })
   },[])
    
   const filteredBooka = books.filter((book)=>book.cover_i !=undefined)
    return(
        
        <div className="handle-container">
           {
            filteredBooka.map(book=>(
                 <div className="photof-book">
                <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` } width={300} height={200} />
            </div>
            ))
                }
        
        </div>
        

    );
}
export default Handled;