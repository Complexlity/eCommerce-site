import { Link } from 'react-router-dom'
import { BrowserRouter as Router } from "react-router-dom";

const Navbar = () => {
    return ( 
        <ul className='flex justify-end text-2xl px-4 mb-2 bg-green-300 w-4/5 mx-auto'>
            <li className='h-full bg-green-700 py-2 px-2 hover:bg-green-400 hover:text-gray-200'><Link to={'/'}>Home</Link></li>
            <li className='h-full bg-green-700 py-2 px-2 hover:bg-green-400 hover:text-gray-200'><Link to={'/products'}>Products</Link></li>
            <li className='h-full bg-green-700 py-2 px-2 hover:bg-green-400 hover:text-gray-200'><Link to={'/contact'}>Contact</Link></li>
        </ul>
        );
}
 
export default Navbar;