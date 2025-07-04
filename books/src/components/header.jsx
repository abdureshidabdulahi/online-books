import image1 from '../assets/kimberly-farmer-lUaaKCUANVI-unsplash.jpg'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
function Header(){
    return(
        <div className="header-container">
            <div className="searh-div"
            style={{
                backgroundImage: `url(${image1})`,
                height:'400px',
                width:'100%',
                backgroundSize:'cover',
                
                backgroundPosition:'center'

            }}
            >
  <div className='introductionAndseachDiv'>
      <p className="library-intro">
  Welcome to our Online Library! 📚 
</p>
<p>Search for books, authors,
   or topics to start your reading journey.</p>
<div className='input'>
    <SearchIcon style={{
        position:'absolute',
         fontSize:'30px',
         color:' color: rgb(78, 4, 61)',
         top:'25%'
        
        }}/>
    <input type='text' placeholder='search here your favorite book' />
    <button>
        <SearchIcon style={{fontSize:'35px',color:'white'}}/>
    </button>
</div>

  </div>
            </div>

        </div>
    );
}
export default Header;