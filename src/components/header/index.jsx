import React from 'react';
import { DiGithubBadge } from 'react-icons/di'
import {VscTools} from 'react-icons/vsc'
import {FaReact} from 'react-icons/fa'
import'./header.css'

const Header = () => {
    return (
        <div className='header-container' >
             <div className='tittle-container' > 
                    <h1><VscTools /> <span className='text' >Dev Lucas Melo</span>  <FaReact className='react-icon' /> </h1>
             </div>
             <div className='identify-container'>
                
                <a className='link-github' href="https://github.com/Dev-LucasMelo"> <DiGithubBadge className='icon-github' /> <span className='github-id' >/Dev-LucasMelo</span> </a>
             </div>
        </div>
    );
}

export default Header;