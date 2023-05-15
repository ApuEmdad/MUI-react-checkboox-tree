import { Box, Typography } from "@mui/material";
import React from "react";
import { TreeMenu as data } from "../../Assets/data/data";
import MenuTree from "./MenuTree";

import TreeView from "@mui/lab/TreeView";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Title, TitleContainer } from "../Reusables/StyledComponent";

const MenuTrees = ({
  selected,
  setSelected,
  selectedIds,
  setSelectedIds,
  parent,
  setParent,
}) => {
  return (
    <Box>
      <TitleContainer>
        <Title variant="h5">Select Parent Menu</Title>
      </TitleContainer>
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
            <MenuTree
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

export default MenuTrees;
