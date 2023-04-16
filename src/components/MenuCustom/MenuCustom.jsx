import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Box, Typography } from "@mui/material";
import { styleLink, typografy } from "./style";

const MenuCustom = ({ datos, sx = {} }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button onClick={handleClick}>
        <MenuIcon sx={{ ...sx }} />
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {datos?.map(({ href, name, icon }, index) => (
          <LinkStyleMain
            key={`${href}${name}`}
            href={href}
            name={name}
            handleClose={handleClose}
            isFirstData={index === 0}
            islatestdata={index + 1 === datos.length}
            Icon={icon}
          />
        ))}
      </Menu>
    </Box>
  );
};
const LinkStyleMain = ({ href, name, handleClose, islatestdata, Icon }) => (
  <Box>
    <Button href={href} onClick={handleClose}>
      <Box sx={styleLink}>
        {Icon && <Icon />}
        <Typography sx={typografy}>{name}</Typography>
      </Box>
    </Button>

    {!islatestdata && <Divider />}
  </Box>
);
export default MenuCustom;
