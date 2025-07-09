import './App.css'
import Header from "./components/header";
import Body from './components/body';
import Footer from './components/footer';
import Handled from './components/handleclich';
function App(){
        return(
        <div className="container-all">
        <Header/>
        <Body />
        <Footer />
        <Handled />
         
        </div>
        );
}
export default App;