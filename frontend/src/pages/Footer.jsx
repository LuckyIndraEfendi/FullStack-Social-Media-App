import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FolderIcon from '@mui/icons-material/Folder';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function Footer() {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="md:hidden block">
            <BottomNavigation sx={{ width: "100%", position: 'fixed', bottom: '0', padding: "10px", zIndex: '999999', background: "#000", color: "#fff" }} value={value} onChange={handleChange}>
                <BottomNavigationAction sx={{ color: "#fff" }}
                    label="Home"
                    value="home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction sx={{ color: "#fff" }}
                    label="Explore"
                    value="explore"
                    icon={<ExploreIcon />}
                />
                <BottomNavigationAction sx={{ color: "#fff" }} label="Reels" value="reels" icon={<SmartDisplayIcon />} />
                <BottomNavigationAction sx={{ color: "#fff" }}
                    label="Create"
                    value="create"
                    icon={<AddBoxIcon />}
                />
                <BottomNavigationAction sx={{ color: "#fff" }} label="Account" value="account" icon={<AccountCircleIcon />} />
            </BottomNavigation>
        </div>
    );
}
