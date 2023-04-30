import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import RoleMenuTrees from "../../Components/RoleMenuTree/RoleMenuTrees";

const Role = () => {
  const [selected, setSelected] = useState([]);
  const [parent, setParent] = useState({});

  console.log("selected", selected);
  console.log("parent", parent);
  return (
    <Box>
      <Box>
        <RoleMenuTrees
          selected={selected}
          setSelected={setSelected}
          setParent={setParent}
        />
      </Box>
    </Box>
  );
};

export default Role;
