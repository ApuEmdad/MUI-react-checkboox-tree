import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import RoleMenuTrees from "../../Components/RoleMenuTree/RoleMenuTrees";
import {
  Title,
  TitleContainer,
} from "../../Components/Reusables/StyledComponent";
import { AddCircle } from "@mui/icons-material";

const EditMenuPermission = () => {
  const [selected, setSelected] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [parent, setParent] = useState({});

  // console.log("selected", selected);
  console.log("selectedIds", selectedIds);
  // console.log("parent", parent);

  const handleCreatePayload = () => {
    const payload = {
      id: "4",
      name: "EMPLOYEE",
      menus: [...selected],
    };
    console.log(payload);
  };
  return (
    <Box>
      <TitleContainer>
        <Title variant="h5">CREATE OR EDIT ROLE</Title>
      </TitleContainer>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Box>
            <RoleMenuTrees
              selected={selected}
              setSelected={setSelected}
              selectedIds={selectedIds}
              setSelectedIds={setSelectedIds}
              setParent={setParent}
              parent={parent}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircle />}
            onClick={handleCreatePayload}
          >
            Create Payload
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditMenuPermission;
