 

 import { useLocation } from "react-router-dom";
function Click(){
     const location = useLocation();
     const {book}=location.state || {}
    if (!book) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h2>❌ Book not found</h2>
        <p>Please go back and select a book from the list.</p>
      </div>
    );
  }
    
    return(
        <>
        <div className="container">
        <img src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`} />

        </div>

        </>
    );
}
export default Click;