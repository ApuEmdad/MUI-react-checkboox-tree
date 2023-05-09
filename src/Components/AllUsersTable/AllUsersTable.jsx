import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
} from "@mui/material";
import {
  CreditScoreSharp,
  CheckBoxOutlined,
  CheckBoxOutlineBlank,
  RemoveRedEye,
  Delete,
} from "@mui/icons-material";

import { allUsers } from "../../Assets/data/data";
import EditRole from "../EditRole/EditRole";
import { Link } from "react-router-dom";

const AllUsersTable = () => {
  const [published, setPublished] = useState(allUsers.map(() => true));
  const [open, setOpen] = useState(false);

  const handlePublish = (index) => {
    const newPublished = [...published];
    newPublished[index] = !newPublished[index];
    setPublished(newPublished);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 350 }}>
        <TableHead>
          <TableRow>
            <TableCell sx={{ width: "60%" }}>Name</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allUsers.map((user, index) => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell align="center">
                <IconButton onClick={handleClickOpen}>
                  <CreditScoreSharp color="secondary" />
                </IconButton>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  maxWidth="sm"
                  fullWidth={true}
                >
                  <EditRole
                    handleClose={handleClose}
                    name={user.name}
                    id={user.id}
                  />
                </Dialog>
                <IconButton onClick={() => handlePublish(index)}>
                  {published[index] ? (
                    <CheckBoxOutlined color="success" />
                  ) : (
                    <CheckBoxOutlineBlank color="success" />
                  )}
                </IconButton>
                <Link to={`./permission/${user.id}`}>
                  <IconButton>
                    <RemoveRedEye color="secondary" />
                  </IconButton>
                </Link>
                <IconButton>
                  <Delete color="error" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsersTable;
