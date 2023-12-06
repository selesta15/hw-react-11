import DataTable from './components/table-two/index'
import React from "react";
import styled from './styled.module.scss'
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Input from './components/input/index';
import FilterListIcon from '@mui/icons-material/FilterList';



 


function App() {
  return (
    <div className={styled['container']}>
      <div className={styled['header-icon']}>
        <SearchIcon />
        <div className={styled['icon-container']}>
          <LanguageIcon />
          <div className={styled['icon-spacing']}>
            <Badge color="secondary" badgeContent={2}>
              < NotificationsIcon />
            </Badge>
          </div>
          <Avatar>H</Avatar>
       </div>
      </div>
      <div className={styled['user']}>
        <h1>Users</h1>
        <Button sx={{backgroundColor: 'black'}} variant="contained"> + New User</Button>
      </div>
        <div className={styled['input']}>
          <Input/>
           <FilterListIcon/>
        </div>
          <DataTable/>
        </div>
  );
  
}




export default App;
