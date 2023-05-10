import React from "react";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const RoleMenuTree = ({ data, selected, setSelected, setParent }) => {
  const getChildById = (node, id) => {
    let array = [];

    const getAllChild = (nodes) => {
      if (nodes === null) return [];
      array.push(nodes.id);
      if (Array.isArray(nodes.children)) {
        nodes.children.forEach((node) => {
          array = [...array, ...getAllChild(node)];
        });
      }
      return array;
    };

    const getNodeById = (nodes, id) => {
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
    };

    return getAllChild(getNodeById(node, id));
  };

  const getOnChange = (checked, nodes) => {
    const allNode = getChildById(nodes, nodes.id);
    let array = checked
      ? [...selected, ...allNode]
      : selected.filter((value) => !allNode.includes(value));

    // If the current node has children, update the selected state for all child nodes as well
    if (Array.isArray(nodes.children)) {
      nodes.children.forEach((child) => {
        const childNodeIds = getChildById(nodes, child.id);
        array = checked
          ? [...array, ...childNodeIds]
          : array.filter((value) => !childNodeIds.includes(value));
      });
    }
    array = array.filter((v, i) => array.indexOf(v) === i);

    setSelected(array);
  };

  // console.log(data);

  const RenderTreeWithCheckboxes = (nodes) => {
    return (
      <Box sx={{ display: "flex" }} key={nodes.id}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ padding: 0 }}
              checked={selected.some((item) => item === nodes.id)}
              onChange={(event) =>
                getOnChange(event.currentTarget.checked, nodes)
              }
            />
          }
          key={nodes.id}
          sx={{
            margin: 0,
            alignSelf: "baseline",
          }}
        />
        <TreeItem
          className="tree-item"
          nodeId={nodes.id.toString()}
          onClick={() => setParent(nodes)}
          label={<>{nodes.name}</>}
          sx={{ flexGrow: 1 }}
        >
          <Box sx={{ paddingLeft: "15px" }}>
            {nodes.permissions.map((permission) => (
              <FormControlLabel
                key={`key:${permission.key}`}
                control={
                  <Checkbox
                    checked={nodes[permission.key]}
                    onChange={() => {
                      nodes[permission.key] = !nodes[permission.key];
                      setSelected([...selected]);
                      console.log("node:", nodes);
                    }}
                  />
                }
                label={permission.name}
              />
            ))}
          </Box>

          {Array.isArray(nodes.children)
            ? nodes.children.map((node) => RenderTreeWithCheckboxes(node))
            : null}
        </TreeItem>
      </Box>
    );
  };

  return RenderTreeWithCheckboxes(data);
};

export default RoleMenuTree;
