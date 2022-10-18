import React from "react";
import "./style.css"
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import { TextField, InputAdornment } from "@mui/material";



function Header() {
    return (

        <nav className="container">
            <div className="header">
                <div className="horarios">
                    <AccessTimeIcon />
                    <p > 08:00 - 18:00</p>
                    <LocationOnIcon />
                    <p>São Paulo, São Paulo, Brasil</p>

                </div>

                <TextField sx={{ input: { "::placeholder": { color: "#051951" } } }} placeholder="Busca" InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon style={{ color: "#051951" }} />
                        </InputAdornment>
                    ),
                    style: {
                        height: "100%",
                        backgroundColor: "#ffff",
                        width: " 100%"
                    },
                }} />
            </div>
        </nav >


    )
}

export default Header;