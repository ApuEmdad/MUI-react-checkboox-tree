import React from "react";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const TestRoleMenuTree = ({
  data,
  selected,
  setSelected,
  parent,
  setParent,
}) => {
  const getChildById = (node, id) => {
    let array = [];

    const getAllChild = (nodes) => {
      if (nodes === null) return;

      // Check if the node already exists in the array
      if (!array.includes(nodes)) {
        array.push(nodes);
      }

      if (Array.isArray(nodes.children)) {
        nodes.children.forEach((node) => {
          getAllChild(node);
        });
      }
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

    const foundNode = getNodeById(node, id);
    if (foundNode) {
      getAllChild(foundNode);
    }

    return array;
  };

  const getOnChange = (checked, nodes) => {
    console.log(nodes);
    /* returns the children ids of current node */
    let allNode = getChildById(nodes, nodes.id);
    console.log("allNode:", allNode);
    console.log(checked);

    /* update selected */
    /* all the node + or - allNode */
    let array = checked
      ? [...selected, ...allNode]
      : selected.filter((value) => !allNode.includes(value));
    setSelected(array);

    /* updating permissions */
    const updatePermission = (nodes) => {
      nodes.permissions.map((permission) => (nodes[permission.key] = checked));
      if (nodes.children) {
        nodes.children.map((child) => updatePermission(child));
      }
    };
    updatePermission(nodes);

    /* unselect Parent */
    const unselectParent = (checked, nodes) => {
      console.log("nodes:", nodes);
      const parentExists = selected.includes(nodes.parent_id);
      const nodeExists = selected.includes(nodes.id);
      console.log(nodeExists);
      parentExists &&
        setSelected(selected.filter((id) => id !== nodes.parent_id));
    };
    // unselectParent(checked, nodes)
  };

  // console.log(data);

  const RenderTreeWithCheckboxes = (nodes) => {
    const handlePermission = (permissionKey) => {
      nodes[permissionKey] = !nodes[permissionKey];
      console.log(nodes);
      const updateSelected = selected.map((item) =>
        item.id === nodes.id ? nodes : item
      );
      setSelected(updateSelected);
    };
    return (
      <Box sx={{ display: "flex" }} key={nodes.id}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ padding: 0 }}
              checked={selected.some((item) => item.id === nodes.id)}
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
                    onChange={() => handlePermission(permission.key)}
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

export default TestRoleMenuTree;
