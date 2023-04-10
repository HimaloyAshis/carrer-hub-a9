import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='flex items-center justify-between bg-orange-200 p-3'>
            <dir>
                <h2 className='default'>Lets Build Your Career</h2>
            </dir>

            <ul className='flex items-center space-x-3'>
                <li>
                    <NavLink to={'/'} className={({ isActive }) => isActive ? 'Active' : 'default'}>
                        Home
                    </NavLink>
                </li>
            
           
                <li>
                    <NavLink to={'/Statistics'} className={({ isActive }) => isActive ? 'Active' : 'default'}>
                        Statistics
                    </NavLink>
                </li>
        
           
                <li>
                    <NavLink to={'/blog'} className={({ isActive }) => isActive ? 'Active' : 'default'}>
                        Blog
                    </NavLink>
                </li>
            </ul>
            <button className='default'>Star Applying</button>
        </div>
    );
};

export default Header;