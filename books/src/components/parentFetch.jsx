import { useState,useEffect } from "react"
import Body from "./body"
export default function ParentFetch(){
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
        <div className="container-all">
            <Body filteredByImage={filteredByImage} />
        </div>
    );
}