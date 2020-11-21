import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ChatIcon from '@material-ui/icons/Chat';
import PeopleIcon from '@material-ui/icons/People';
import {useStateValue} from './StateProvider';

function Sidebar() {
    const [{user},dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospitalIcon} title='Covid Updates'/>
            <SidebarRow Icon={GroupWorkIcon} title='Societies'/>
            <SidebarRow Icon={PeopleIcon} title='Followers'/>
            <SidebarRow Icon={EmojiPeopleIcon} title='Following'/>
            <SidebarRow Icon={ChatIcon} title='Messages'/>
            
        </div>
    )
}

export default Sidebar
