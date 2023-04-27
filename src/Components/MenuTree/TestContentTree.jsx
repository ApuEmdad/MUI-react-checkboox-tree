import React, { useState } from "react";

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";
// import "./ContentTree.css";

const ContentTree = ({ data, selected, setSelected, setParent }) => {
  // const [selected, setSelected] = useState([]);

  function getChildById(node, id) {
    let array = [];

    function getAllChild(nodes) {
      if (nodes === null) return [];
      array.push(nodes.id);
      if (Array.isArray(nodes.children)) {
        nodes.children.forEach((node) => {
          array = [...array, ...getAllChild(node)];
          array = array.filter((v, i) => array.indexOf(v) === i);
        });
      }
      return array;
    }

    function getNodeById(nodes, id) {
      if (nodes.id === id) {
        return nodes;
      } else if (Array.isArray(nodes.children)) {
        let result = null;
        nodes.children.forEach((node) => {
          if (!!getNodeById(node, id)) {
            result = getNodeById(node, id);
          }
        });
        return result;
      }

      return null;
    }

    return getAllChild(getNodeById(node, id));
  }

  function getOnChange(checked, nodes) {
    const allNode = getChildById(data, nodes.id);

    let array = checked
      ? [...selected, ...allNode]
      : selected.filter((value) => !allNode.includes(value));

    // If the current node has children, update the selected state for all child nodes as well
    if (Array.isArray(nodes.children)) {
      nodes.children.forEach((child) => {
        const childNodeIds = getChildById(data, child.id);
        array = checked
          ? [...array, ...childNodeIds]
          : array.filter((value) => !childNodeIds.includes(value));
      });
    }

    setSelected(array);
  }

  const RenderTreeWithCheckboxes = (nodes) => {
    return (
      <TreeItem
        className="tree-item"
        key={nodes.id}
        nodeId={nodes.id.toString()}
        onClick={() => setParent(data)}
        label={
          <>
            <FormControlLabel
              control={
                <Checkbox
                  checked={selected.some((item) => item === nodes.id)}
                  onChange={(event) =>
                    getOnChange(event.currentTarget.checked, nodes)
                  }
                />
              }
              key={nodes.id}
            />
            {nodes.name}
          </>
        }
      >
        {Array.isArray(nodes.children)
          ? nodes.children.map((node) => RenderTreeWithCheckboxes(node))
          : null}
      </TreeItem>
    );
  };

  return (
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
        {RenderTreeWithCheckboxes(data)}
      </TreeView>
    </Box>
  );
};

export default ContentTree;
