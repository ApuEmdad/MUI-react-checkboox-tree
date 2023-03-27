import React, { useState } from "react";
import TreeItem from "@mui/lab/TreeItem";
import { Checkbox, FormControlLabel } from "@mui/material";
import { Box } from "@mui/system";

const ContentTree = ({ data, selected, setSelected, setParent }) => {
  function getChildById(node, id) {
    let array = [];

    function getAllChild(nodes) {
      if (nodes === null) return [];
      array.push(nodes.id);
      if (Array.isArray(nodes.children)) {
        nodes.children.forEach((node) => {
          array = [...array, ...getAllChild(node)];
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
    array = array.filter((v, i) => array.indexOf(v) === i);

    setSelected(array);
  }

  const RenderTreeWithCheckboxes = (nodes) => {
    return (
      <TreeItem
        className="tree-item"
        key={nodes.id}
        nodeId={nodes.id.toString()}
        onClick={() => setParent(nodes)}
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

  return RenderTreeWithCheckboxes(data);
};

export default ContentTree;
