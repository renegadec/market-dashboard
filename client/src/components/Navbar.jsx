import React from 'react';
import { 
  LightModeOutlined, 
  DarkModeOutlined, 
  Menu as MenuIcon, 
  Search, 
  SettingsOutlined, 
  ArrowDropDownOutlined 
} from "@mui/icons-material";
import FlexBetween from "./FlexBetween";
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import profileImage from "../assets/confidence.png";
import { useTheme } from '@emotion/react';

const Navbar = () => {
  
    const dispatch = useDispatch();
    const theme = useTheme();
  return (
    
    <div>Navbar</div>
  )
}

export default Navbar