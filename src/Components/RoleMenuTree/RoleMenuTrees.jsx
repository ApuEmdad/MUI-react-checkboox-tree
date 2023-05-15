import React from "react";
import { Box } from "@mui/material";
import { TreeMenu as data } from "../../Assets/data/data";
import RoleMenuTree from "./RoleMenuTree";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const RoleMenuTrees = ({
  selected,
  setSelected,
  selectedIds,
  setSelectedIds,
  parent,
  setParent,
}) => {
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
              <RoleMenuTree
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

export default RoleMenuTrees;
