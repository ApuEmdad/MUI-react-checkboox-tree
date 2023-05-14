import React from "react";
import TreeItem from "@mui/lab/TreeItem";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const TestRoleMenuTree = ({
  data,
  selected,
  setSelected,
  selectedIds,
  setSelectedIds,
  parent,
  setParent,
}) => {
  const getChildById = (node, id) => {
    let array = [];
    let ids = [];
    const getAllChild = (nodes) => {
      if (nodes === null) return;
      // Check if the node already exists in the array
      if (!array.includes(nodes)) {
        array.push(nodes);
        ids.push(nodes.id);
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

    return { nodes: array, ids: ids };
  };

  const getOnChange = (checked, nodes) => {
    console.log(nodes);
    /* returns the children ids of current node */
    const getChild = getChildById(nodes, nodes.id);
    const allNode = getChild.nodes;
    const ids = getChild.ids;

    // console.log("ids:", ids);
    // console.log("allNode:", allNode);
    console.log(checked);
    /* update selected */
    /* selected = all the node +- allNode, selectedIds = all the ids +- selectedIds  */
    let array = checked
      ? [...selected, ...allNode]
      : selected.filter((value) => !allNode.includes(value));
    setSelected(array);
    let idsArray = checked
      ? [...selectedIds, ...ids]
      : selectedIds.filter((value) => !ids.includes(value));
    setSelectedIds(idsArray);

    /* updating permissions */
    const updatePermission = (nodes) => {
      nodes.permissions.map((permission) => (nodes[permission.key] = checked));
      if (nodes.children) {
        nodes.children.map((child) => updatePermission(child));
      }
    };
    updatePermission(nodes);

    /* unselect Parent */
    const unselectParent = () => {
      const parentExists = selectedIds.includes(nodes?.parent_id);
      console.log("node:", nodes);
      console.log("parentId:", nodes.parent_id);
      console.log("parentExists:", parentExists);
    };
    // !checked && unselectParent();
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
              checked={selectedIds.some((item) => item === nodes.id)}
              // checked={selected.some((item) => item.id === nodes.id)}
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
