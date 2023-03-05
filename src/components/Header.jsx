import { FaSearch, FaCaretDown, FaUser} from "react-icons/fa"


const Header = () =>{
    return(
        <header>
            <img src="images/logo.png" alt="" className="logo" />
            <button className="cat-box">Categories <FaCaretDown/>
            <div className="sub-menu">
            <ul>
                <li><a href="">Indoor plants</a></li>
                <li><a href="">Flowers</a></li>
                <li><a href="">Trees</a></li>
            </ul>
            </div>
            </button>
            <input type="search" name="" id=""  placeholder="Search"/>
            <button className="icon"><FaSearch/></button>

            <a href="" className="acct">My Account  <FaUser/></a>
            
        </header>
    )
}



export default Header