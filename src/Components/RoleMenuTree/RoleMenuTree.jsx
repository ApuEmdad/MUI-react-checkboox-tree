import TreeItem from "@mui/lab/TreeItem";
import { Box, Checkbox, FormControlLabel } from "@mui/material";

const RoleMenuTree = ({
  data,
  selected,
  setSelected,
  selectedIds,
  setSelectedIds,
  parent,
  setParent,
  mapChildrenToParent,
  mapMenu,
}) => {
  /* func getChildById returns the all the selected menu id and menu object seperately */
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
    // console.log(nodes);
    /* returns the children ids of current node */
    const getChild = getChildById(nodes, nodes.id);
    const allNode = getChild.nodes;
    const ids = getChild.ids;

    // console.log(checked);
    /* update selected */
    /* selected = all the node +- allNode, selectedIds = all the ids +- selectedIds  */
    let array = checked
      ? [...new Set([...selected, ...allNode])]
      : selected.filter((value) => !allNode.includes(value));
    setSelected(array);

    /* ++++ unselectParent remove parentId from selectedIds list thus the the parent checkbox is toggled to uncheck starts ++++ */
    const unselectParents = (selectedIds, nodeId, parentId) => {
      let newSelectedIds = selectedIds.filter(
        (id) => id !== nodeId && id !== parentId && !ids.includes(id)
      );

      const removeGrandParent = (parentId) => {
        const grandParent = mapChildrenToParent.get(parentId);

        if (grandParent && grandParent.length > 0) {
          console.log("grandparentExist?:", grandParent);
          newSelectedIds = newSelectedIds.filter(
            (id) => !grandParent.includes(id)
          );
          const greatGrandParent = mapChildrenToParent.get(grandParent[0]);
          console.log("GreatGrandparentExist?:", greatGrandParent);
          if (greatGrandParent && greatGrandParent.length > 0) {
            removeGrandParent(grandParent[0]);
          }
        }
      };

      removeGrandParent(parentId);
      /* const grandParent = mapChildrenToParent.get(parentId);
      if (grandParent && grandParent.length > 0) {
        console.log("grandparentExist?:", grandParent);
        newSelectedIds = newSelectedIds.filter(
          (id) => !grandParent.includes(id)
        );
      } */
      return newSelectedIds;
    };
    /* ---- unselectParent remove parentId from selectedIds list thus the the parent checkbox is toggled to uncheck starts ---- */

    let idsArray;
    if (checked) {
      idsArray = [...new Set([...selectedIds, ...ids])];
    } else {
      idsArray = unselectParents(
        selectedIds,
        // selectedIds.filter((value) => !ids.includes(value)),
        nodes.id,
        nodes.parent_id
      );
    }
    setSelectedIds(idsArray);

    /* updating permissions */
    const updatePermission = (nodes) => {
      nodes.permissions.map((permission) => (nodes[permission.key] = checked));
      if (nodes.children) {
        nodes.children.map((child) => updatePermission(child));
      }
    };
    updatePermission(nodes);
  };

  // console.log(data);
  const RenderTreeWithCheckboxes = (nodes) => {
    /* func handlePermission is invoked whenever any permission checkbox is changed */
    const handlePermission = (permissionKey) => {
      nodes[permissionKey] = !nodes[permissionKey];
      console.log(nodes);
      let matchFound = false;
      const updateSelected = selected.map((item) => {
        if (item.id === nodes.id) {
          matchFound = true;
          return nodes; // replace the item with nodes
        }
        return item; // keep the original item
      });
      if (!matchFound) {
        updateSelected.push(nodes); // add nodes to the array if no match was found
      }
      setSelected(updateSelected);
    };
    return (
      <Box sx={{ display: "flex" }} key={nodes.id}>
        <FormControlLabel
          control={
            <Checkbox
              sx={{ padding: 0 }}
              checked={selectedIds.some((item) => item === nodes.id)}
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

export default RoleMenuTree;
