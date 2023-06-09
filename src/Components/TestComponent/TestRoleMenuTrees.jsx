import React, { useState } from "react";
import { Box } from "@mui/material";
import { TreeMenu } from "../../Assets/data/data";
import TestRoleMenuTree from "./TestRoleMenuTree";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const TestRoleMenuTrees = () => {
  const [selected, setSelected] = useState([]);
  const [selectedIds, setSelectedIds] = useState([]);
  const [parent, setParent] = useState({});

  console.log("selected", selected);
  console.log("selectedIds", selectedIds);
  const data = TreeMenu.tree;

  // console.log("parent", parent);
  return (
    <Box>
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
            <Box key={data.id}>
              <TestRoleMenuTree
                data={data}
                selected={selected}
                setSelected={setSelected}
                selectedIds={selectedIds}
                setSelectedIds={setSelectedIds}
                setParent={setParent}
                parent={parent}
              />
            </Box>
          ))}
        </TreeView>
        {/*---- Menu List ends ----*/}
      </Box>
    </Box>
  );
};

export default TestRoleMenuTrees;
