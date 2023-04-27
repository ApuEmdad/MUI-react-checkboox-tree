import React, { useState } from "react";
import { Box, Grid } from "@mui/material";
import MenuTrees from "../../Components/MenuTree/MenuTrees";
import CreateMenu from "../../Components/CreateMenu/CreateMenu";

const Menu = () => {
  const [selected, setSelected] = useState([]);
  const [parent, setParent] = useState({});

  console.log("selected", selected);
  console.log("parent", parent);

  return (
    <Box sx={{ p: 1 }}>
      <Grid container spacing={2}>
        {/*++++ content left starts ++++*/}
        <Grid item xs={4}>
          <MenuTrees
            selected={selected}
            setSelected={setSelected}
            setParent={setParent}
          />
        </Grid>
        {/*----content left ends ----*/}

        {/*++++ content right starts ++++*/}
        <Grid item xs={8}>
          <CreateMenu parent={parent} />
        </Grid>
      </Grid>
      {/*----content left ends ----*/}
    </Box>
  );
};

export default Menu;
