import { Box, Typography } from "@mui/material";
import React from "react";
import { TreeMenu as data } from "../../Assets/data/data";
import ContentTree from "./ContentTree";
import TestContentTree from "./TestContentTree";
import TreeView from "@mui/lab/TreeView";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ContentTrees = ({ selected, setSelected, setParent }) => {
  return (
    <Box>
      <Box sx={{ backgroundColor: "#f0f0f0", borderRadius: "10px", p: 2 }}>
        <Typography
          variant="h5"
          sx={{
            color: "#444444",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          SELECT PARENT MENU
        </Typography>
      </Box>

      <Box>
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
            <ContentTree
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

export default ContentTrees;

/* 
<Box>
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
      <TestContentTree
        data={data}
        key={data.id}
        selected={selected}
        setSelected={setSelected}
        setParent={setParent}
      />
    ))}
  </TreeView>
</Box>
*/
