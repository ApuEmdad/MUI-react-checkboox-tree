import React from "react";
import { Box, Grid } from "@mui/material";
import CreateRole from "../../Components/CreateRole/CreateRole";
import Users from "../../Components/Users/Users";

const Roles = () => {
  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CreateRole />
        </Grid>

        <Grid item xs={8}>
          {/* ++++ Users List Starts ++++ */}
          <Users />
          {/* ---- Users List Starts Ends ---- */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Roles;
