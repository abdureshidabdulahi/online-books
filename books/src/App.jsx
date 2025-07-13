import './App.css'
import Header from "./components/header";
 
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
 
import ParentFetch from './components/parentFetch';
 
function App(){
        return(
        <>
          <Header />
        <ParentFetch />
        <Footer />
        </>

        );
}
export default App;