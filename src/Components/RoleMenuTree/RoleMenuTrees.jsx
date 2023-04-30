import { Box, Typography } from "@mui/material";
import React from "react";
import { TreeMenu as data } from "../../Assets/data/data";
import RoleMenuTree from "./RoleMenuTree";

import TreeView from "@mui/lab/TreeView";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const RoleMenuTrees = ({ selected, setSelected, setParent }) => {
  return (
    <Box>
      <Box
        sx={{ backgroundColor: "#f0f0f0", borderRadius: "10px 10px 0 0", p: 2 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#444444",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          CREATE OR EDIT ROLE
        </Typography>
      </Box>

      <Box sx={{ backgroundColor: "#fafafa" }}>
        {/*++++ Menu List starts ++++*/}
        <TreeView
          className="TreeView"
          defaultExpandIcon={
            <ChevronRightIcon sx={{ fontSize: "1.5rem !important" }} />
          }
          defaultCollapseIcon={
            <ExpandMoreIcon sx={{ fontSize: "1.5rem !important" }} />
          }
        >
          {data.map((data) => (
            <RoleMenuTree
              data={data}
              key={data.id}
              selected={selected}
              setSelected={setSelected}
              setParent={setParent}
            />
          ))}
        </TreeView>
        {/*---- Menu List ends ----*/}
      </Box>
    </Box>
  );
};

export default RoleMenuTrees;
