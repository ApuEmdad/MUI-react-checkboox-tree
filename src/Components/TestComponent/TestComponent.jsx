import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Checkbox, FormControlLabel } from "@mui/material";

const data = [
  {
    id: "asdf",
    name: "Parent",
    children: [
      {
        id: "1",
        name: "Child - 1",
      },
      {
        id: "3",
        name: "Child - 3",
        children: [
          {
            id: "4",
            name: "Child - 4",
          },
        ],
      },
    ],
  },
  {
    id: "pqr",
    name: "Parent",
    children: [
      {
        id: "1",
        name: "Child - 1",
      },
      {
        id: "3",
        name: "Child - 3",
        children: [
          {
            id: "4",
            name: "Child - 4",
          },
        ],
      },
    ],
  },
];
const TestComponent = () => {
  const [selected, setSelected] = useState([]);
  function getChildById(node, id) {
    let array = [];
    //returns an array of nodes ids: clicked node id and all children node ids
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

    //returns the node object that was selected
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
    // get all freshly selected or unselected nodes
    const allNode = getChildById(data, nodes.id);
    // filter out any previously selected nodes that are no longer present in the tree
    const filteredSelected = selected.filter(
      (id) => getChildById(data, id).length > 0
    );
    // combine newly selected nodes with existing selection, or filter out newly deselected nodes
    let array = checked
      ? [...filteredSelected, ...allNode]
      : filteredSelected.filter((value) => !allNode.includes(value));

    setSelected(array);
  }

  const renderTree = (nodes) => (
    <TreeItem
      key={nodes.id}
      nodeId={nodes.id}
      label={
        <FormControlLabel
          control={
            <Checkbox
              checked={selected.some((item) => item === nodes.id)}
              onChange={(event) =>
                getOnChange(event.currentTarget.checked, nodes)
              }
              //onClick={(e) => e.stopPropagation()}
            />
          }
          label={<>{nodes.name}</>}
          key={nodes.id}
        />
      }
    >
      {Array.isArray(nodes.children)
        ? nodes.children.map((node) => renderTree(node))
        : null}
    </TreeItem>
  );

  return (
    <div>
      {data.map((data) => (
        <TreeView
          key={data.id}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ flexGrow: 1, maxWidth: 400 }}
        >
          {renderTree(data)}
        </TreeView>
      ))}
    </div>
  );
};

export default TestComponent;
