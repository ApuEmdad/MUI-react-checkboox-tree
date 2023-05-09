import { Box } from "@mui/material";
import React from "react";
import { Title, TitleContainer } from "../Reusables/StyledComponent";
import AllUsersTable from "../AllUsersTable/AllUsersTable";

const Users = () => {
  return (
    <Box>
      <TitleContainer>
        <Title variant="h5">Role List</Title>
      </TitleContainer>
      <Box sx={{ p: 2, backgroundColor: "#fafafa" }}>
        <AllUsersTable />
      </Box>
    </Box>
  );
};

export default Users;
