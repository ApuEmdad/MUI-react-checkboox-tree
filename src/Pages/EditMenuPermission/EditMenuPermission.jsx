import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import RoleMenuTrees from "../../Components/RoleMenuTree/RoleMenuTrees";
import {
  Title,
  TitleContainer,
} from "../../Components/Reusables/StyledComponent";

const EditMenuPermission = () => {
  const [selected, setSelected] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [parent, setParent] = useState({});

  console.log("selected", selected);
  console.log("selectedIds", selectedIds);
  // console.log("parent", parent);
  return (
    <Box>
      <TitleContainer>
        <Title variant="h5">CREATE OR EDIT ROLE</Title>
      </TitleContainer>
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
    </Box>
  );
};

export default EditMenuPermission;
