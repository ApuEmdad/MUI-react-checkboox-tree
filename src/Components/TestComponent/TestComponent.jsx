import React, { useState } from "react";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Checkbox, FormControlLabel } from "@mui/material";

const previousData = [
  {
    id: 1,
    name: "Parent-1",
    children: [
      {
        id: 2,
        name: "Child - 1",
        children: [],
      },
      {
        id: 3,
        name: "Child - 3",
        children: [
          {
            id: 4,
            name: "Child - 4",
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: "Parent-2",
    children: [
      {
        id: 6,
        name: "Child - 1",
        children: [],
      },
      {
        id: 7,
        name: "Child - 3",
        children: [
          {
            id: 8,
            name: "Child - 4",
            children: [],
          },
        ],
      },
    ],
  },
];

const TestComponent = () => {
  const [data, setData] = useState(previousData);
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
      nodeId={nodes.id.toString()}
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

  /* get all ids starts */
  const getAllIds = (data) => {
    let ids = [];
    for (let item of data) {
      ids.push(item.id);
      if (item.children.length > 0) {
        ids.push(...getAllIds(item.children));
      }
    }
    return ids;
  };
  /* get all ids ends */

  /*  insertChildrenById starts */
  function insertChildrenById(data, id, newChildren) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].id === id) {
        if (!data[i].children) {
          data[i].children = [];
        }
        data[i].children.push(...newChildren);
        return data;
      } else if (data[i].children && data[i].children.length > 0) {
        insertChildrenById(data[i].children, id, newChildren);
      }
    }
    return data;
  }
  /*  insertChildrenById ends */

  /* inserting data starts */
  const insertData = () => {
    const id = Math.floor(Math.random() * (100 - 20)) + 20;
    const newData = [...data]; // create a new copy of data
    insertChildrenById(newData, 4, [
      { id: id, name: `Child-${id}`, children: [] },
    ]);
    setData(newData); // set the new data
    console.log(getAllIds(data));
  };
  /* inserting data ends */

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
      <button onClick={insertData}> insert data</button>
    </div>
  );
};

export default TestComponent;
