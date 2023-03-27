import React, { useState } from "react";

import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { Checkbox, FormControlLabel } from "@mui/material";

import ChildRecursiveTreeView from "./ChildRecursiveTreeView";

/* array data starts */
const data = [
  {
    id: "0",
    name: "Parent",
    children: [
      {
        id: "ch-1-01",
        name: "Child - 1",
      },
      {
        id: "ch-1-02",
        name: "Child - 3",
        children: [
          {
            id: "4",
            name: "Child - 4",
            children: [
              {
                id: "7",
                name: "Child - 7",
              },
              {
                id: "8",
                name: "Child - 8",
              },
            ],
          },
        ],
      },
      {
        id: "ch-1-03",
        name: "Child - 5",
        children: [
          {
            id: "6",
            name: "Child - 6",
          },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "Parent",
    children: [
      {
        id: "ch-2-01",
        name: "Child - 1",
      },
      {
        id: "ch-2-02",
        name: "Child - 3",
        children: [
          {
            id: "4ss",
            name: "Child - 4",
            children: [
              {
                id: "734s",
                name: "Child - 7",
              },
              {
                id: "847f",
                name: "Child - 8",
              },
            ],
          },
        ],
      },
      {
        id: "ch-2-03",
        name: "Child - 5",
        children: [
          {
            id: "612ss",
            name: "Child - 6",
          },
        ],
      },
    ],
  },
];
/* array data ends */

const RecursiveTreeView = () => {
  return (
    <>
      {data.map((data) => (
        <ChildRecursiveTreeView data={data} key={data.id} />
      ))}
    </>
  );
};

export default RecursiveTreeView;
