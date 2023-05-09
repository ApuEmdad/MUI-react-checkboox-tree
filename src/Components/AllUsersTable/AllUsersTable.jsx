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
} from "@mui/material";
import {
  CreditScoreSharp,
  CheckBoxOutlined,
  CheckBoxOutlineBlank,
  RemoveRedEye,
  Delete,
} from "@mui/icons-material";

import { allUsers } from "../../Assets/data/data";

const AllUsersTable = () => {
  const [published, setPublished] = useState(allUsers.map(() => true));
  const handlePublish = (index) => {
    const newPublished = [...published];
    newPublished[index] = !newPublished[index];
    setPublished(newPublished);
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
                <IconButton>
                  <CreditScoreSharp color="secondary" />
                </IconButton>
                <IconButton onClick={() => handlePublish(index)}>
                  {published[index] ? (
                    <CheckBoxOutlined color="success" />
                  ) : (
                    <CheckBoxOutlineBlank color="success" />
                  )}
                </IconButton>
                <IconButton>
                  <RemoveRedEye color="secondary" />
                </IconButton>
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
