import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton, styled } from "@mui/material";
import "../../components/ListEnabledUser/style.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const SmallIconButton = styled(IconButton)(({ theme }) => ({
  padding: theme.spacing(1),
  "& .MuiSvgIcon-root": {
    fontSize: "1rem",
  },
}));

const ListEnabledUser = ({ data }) => {
  //   const [users, setUsers] = useState([
  //     { id: 1, name: "Keanu Reaves", role: "Supervisor" },
  //     { id: 2, name: "Keanu Reaves", role: "Supervisor" },
  //   ]);

  //   const handleDeleteUser = (userToDelete) => {
  //     setUsers((prevUsers) =>
  //       prevUsers.filter((user) => user.id != userToDelete.id)
  //     );
  //   };

  //   const handleEditUser = (userToEdit) => {
  //     return <Link to={"/User"} />;
  //   };

  return (
    <div className="padreContainer">
      <div
        style={{
          width: "450px",
          float: "left",
          borderRadius: "10px",
          padding: "10px",
          border: "1px solid gray",
        }}
      >
        <List>
          {data?.map((user) => (
            <React.Fragment>
              <ListItem key={user.id}>
                <div className="userContainer">
                  <Avatar src="https://i.pravatar.cc/150?img=1" />
                  <Typography variant="subtitle1"> {user.firstName}</Typography>
                </div>
                <div className="textContainer" style={{ marginLeft: "auto" }}>
                  <Typography variant="subtitle1">
                    {user.administrator ? "Administrador" : "Usuario"}
                  </Typography>
                </div>
                <div className="iconsContainer" style={{ marginLeft: "auto" }}>
                  <SmallIconButton
                  //   onClick={() => handleEditUser(user)}
                  >
                    <Link to={`/User/${user.id}`}>
                      <EditIcon />
                    </Link>
                  </SmallIconButton>
                  <SmallIconButton
                  //onClick={() => handleDeleteUser(user)}
                  >
                    <DeleteIcon style={{ color: "#FFA2A2" }} />
                  </SmallIconButton>
                </div>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </div>
    </div>
  );
};

export default ListEnabledUser;

{
  /* <ListItem key ={user.id}>
                        <div className="userContainer">
                            <Avatar src="https://i.pravatar.cc/150?img=1" />
                            <Typography variant="subtitle1">{user.name} </Typography>
                        </div>
                        <div className="textContainer">
                            <Typography variant="subtitle1" style={{ marginLeft: 'auto' }}> {user.role}</Typography>
                            </div>
                            <div style={{ marginLeft: 'auto' }}>
                                <SmallIconButton onClick={() => handleEditUser(user)}>
                                    <EditIcon />
                                </SmallIconButton>
                                <SmallIconButton onClick={() => handleDeleteUser(user)}>
                                    <DeleteIcon style={{ color: "#FFA2A2" }}/>
                                </SmallIconButton>
                            </div>
                    </ListItem> */
}
