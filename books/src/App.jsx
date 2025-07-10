import './App.css'
import Header from "./components/header";
import Body from './components/body';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
 
function App(){
        return(
        <div className="container-all">
        <Header/>
        <Body />
        <Footer/>
       
         
        </div>
        );
}
export default App;