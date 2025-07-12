import './App.css'
import Header from "./components/header";
import Body from './components/body';
import Footer from './components/footer';
import { Route, Routes } from 'react-router-dom';
import Click from './components/clickedBodyPic';
 
function App(){
        return(
        <div className="container-all">
       <Routes>
  <Route
    path="/"
    element={
      <>
        <Header />
        <Body />
        <Footer />
      </>
    }
  />
  <Route path="/click/:cover_i/:title" element={<Click />} />
</Routes>

        </div>
        );
}
export default App;