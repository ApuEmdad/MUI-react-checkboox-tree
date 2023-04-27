import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  MenuItem,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const CreateMenu = ({ parent }) => {
  const icons = [
    {
      icon: "icon-home",
      value: "home",
    },
    {
      icon: "icon-menu",
      value: "menu",
    },

    {
      icon: "icon-staff",
      value: "staff",
    },
  ];
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
        {/* ++++ Icon Starts ++++ */}
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
              Icon
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="outlined-basic"
              label="Icon"
              variant="outlined"
              sx={{ width: "100%" }}
              select
            >
              {icons.map((icon) => (
                <MenuItem key={icon.icon} value={icon.value}>
                  {icon.icon}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        {/* ---- Icon ends ---- */}
        {/* ++++ IsMenu Starts ++++ */}
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
              Is Menu
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Switch defaultChecked />
          </Grid>
        </Grid>
        {/* ---- IsMenu ends ---- */}
        {/* ++++ Api Permission Starts ++++ */}
        <Grid container sx={{ my: 1 }}>
          <Grid
            item
            xs={4}
            sx={{
              display: "flex",
              alignItems: "",
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: "bold", mt: "10px" }}>
              Api Permission
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <FormControlLabel control={<Checkbox />} label="View" />
            <br />
            <FormControlLabel control={<Checkbox />} label="Add" />
            <br />
            <FormControlLabel control={<Checkbox />} label="Edit" />
            <br />
            <FormControlLabel control={<Checkbox />} label="Delete" />
            <br />
            <FormControlLabel control={<Checkbox />} label="Change Password" />
            <br />
          </Grid>
        </Grid>
        {/* ---- Api Permission ends ---- */}
        {/* Save Button Starts */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button variant="contained">Save</Button>
        </Box>
        {/* Save Button Ends */}
      </Box>
      {/*---- Inputs end ----*/}
    </Box>
  );
};

export default CreateMenu;
