import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import { Divider, Box, Typography } from "@mui/material";
import { styleLink, typografy } from "./style";
import Badge from "@mui/material/Badge";
const MenuCustom = ({
  datos,
  IconCustom,
  signOut,
  notifications,
  badge = false,
  sx = {},
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Button onClick={handleClick}>
        {badge ? (
          <Badge
            badgeContent={notifications}
            color="Notification"
            sx={{ color: "white" }}
          >
            {IconCustom ? <IconCustom sx={{ ...sx }} /> : <MenuIcon />}
          </Badge>
        ) : (
          <>
            {IconCustom ? (
              <IconCustom
                alt="Remy Sharp"
                src="/static/images/avatar/1.jpg"
                sx={{ ...sx }}
              />
            ) : (
              <MenuIcon sx={{ ...sx }} />
            )}
          </>
        )}
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
        <Box>
          {datos?.map(({ href, name, icon }, index) => (
            <LinkStyleMain
              key={`${href}${name}${index}`}
              href={href}
              name={name}
              islatestdata={index + 1 === datos.length}
              Icon={icon}
            />
          ))}
          {signOut && (
            <LinkStyleMain signOut={signOut} name={"Cerrar sesion"} />
          )}
        </Box>
      </Menu>
    </>
  );
};
const LinkStyleMain = ({
  href,
  name,
  handleClose,
  islatestdata,
  Icon,
  signOut,
}) => (
  <>
    {signOut ? (
      <>
        <Divider />
        <Button onClick={signOut}>
          <Box sx={styleLink}>
            {Icon && <Icon />}
            <Typography sx={typografy}>{name}</Typography>
          </Box>
        </Button>
      </>
    ) : (
      <>
        <Button href={href} onClick={handleClose}>
          <Box sx={styleLink}>
            {Icon && <Icon />}
            <Typography sx={typografy}>{name}</Typography>
          </Box>
        </Button>
        {!islatestdata && <Divider />}
      </>
    )}
  </>
);
export default MenuCustom;
