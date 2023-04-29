import SearchBar from './Search/SearchBar';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    const {onSearch} = props
    return (
        <>
            <SearchBar onSearch = {onSearch}/>
            <Link to='/about'>
                <button>About</button>
            </Link>
            
            <Link to='/home'>
                <button>Home</button>
            </Link>
        
        </>
    )
}

export default Nav;