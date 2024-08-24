
import { NavLink } from 'react-router-dom';
import logo from './image/w1.jpg'



const Nav = () => {


    const NV = <>
    
       <li className=' text-white  font-serif' ><NavLink to="/" >Home</NavLink></li>
       <li className=' text-white  font-serif' ><NavLink to="/about" >About</NavLink></li>
       <li className=' text-white  font-serif' ><NavLink to="/gal" >Gallery</NavLink></li>
    
    
    </>







    return (
        <div>

<div className="navbar mt-2 bg-black  shadow-xl ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {NV}
      </ul>
    </div>
    <div className=' flex items-center gap-2'>

       <img className=' rounded-full h-[80px] w-[80px]' src={logo} alt="" />
       <a className=" text-[#02CCFF]  text-4xl  font-serif  "><span className=' text-white'>Wild</span>Feel</a>

    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {NV}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">IN</a>
  </div>
</div>

            <hr></hr>
            
        </div>
    );
};

export default Nav;