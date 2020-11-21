import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import AllInboxIcon from '@material-ui/icons/AllInbox';
import { Avatar } from '@material-ui/core'
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import WorkIcon from '@material-ui/icons/Work';
import {useStateValue} from './StateProvider';


function Header() {

    const [{user},dispatch] = useStateValue();

    return <div className="header">
        <div className='header__left'>
            <img src='data:image/jpeg;base64,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'
             alt='logo'
            />
            <div className='header__input'>
                <SearchIcon />
                <input placeholder='Search People' type='text'/>
            </div>    
        </div>
        <div className='header__middle'>
            <div className='header__option header__option--active' >
                <HomeIcon  fontSize='large'/>
            </div>
            <div className='header__option'>
                <AllInboxIcon fontSize='large'/>
            </div>
            <div className='header__option'>
                <WorkIcon fontSize='large'/>
            </div>
        </div>
        <div className='header__right'>
            <div className='header__info'>
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>

            <IconButton>
                <AddIcon />
            </IconButton>
            <IconButton>
                <ForumIcon />
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon />
            </IconButton>
            <IconButton>
                <ExpandMoreIcon />
            </IconButton>
        </div>
    </div>
}

export default Header
