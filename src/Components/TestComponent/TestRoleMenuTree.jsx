import React from "react";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const TestRoleMenuTree = ({ data, selected, setSelected, setParent }) => {
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
    /* returns the children ids of current node */
    let allNode = getChildById(nodes, nodes.id);
    allNode = allNode.filter((v, i) => allNode.indexOf(v) === i);
    console.log("allNode", allNode);

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

export default TestRoleMenuTree;
