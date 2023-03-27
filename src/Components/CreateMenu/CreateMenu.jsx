import { Box, Grid, TextField, Typography } from "@mui/material";
import React from "react";

const CreateMenu = ({ parent }) => {
  return (
    <Box>
      <Box
        sx={{ backgroundColor: "#f0f0f0", borderRadius: "10px 10px 0 0", p: 2 }}
      >
        <Typography
          variant="h5"
          sx={{
            color: "#444444",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          CREATE MENU
        </Typography>
      </Box>
      {/*++++ Inputs start ++++*/}
      <Box sx={{ p: 2, backgroundColor: "#fafafa" }}>
        {/*++++ Parent starts ++++*/}
        <Grid container sx={{ my: 1 }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Parent
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              disabled
              value={parent?.name || "Please Select Parent"}
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/*---- parent ends ----*/}
        {/* ++++ Title Starts ++++ */}
        <Grid container sx={{ my: 1 }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Title
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="Title"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/* ---- Title ends ---- */}
        {/* ++++ End Point Starts ++++ */}
        <Grid container sx={{ my: 1 }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              End Point
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="End Point"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/* ---- End Point ends ---- */}
        {/* ++++ Router Link Starts ++++ */}
        <Grid container sx={{ my: 1 }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Router Link
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="Router Link"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/* ---- Router Link ends ---- */}
        {/* ++++ Position Starts ++++ */}
        <Grid container sx={{ my: 1 }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",

              alignItems: "center",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Position
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="Position"
              variant="outlined"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
        {/* ---- Position ends ---- */}
      </Box>
      {/*---- Inputs end ----*/}
    </Box>
  );
};

export default CreateMenu;
