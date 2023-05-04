import styled from "@emotion/styled";
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
import { useState } from "react";

import { useForm } from "react-hook-form";

const CreateMenu = ({ parent }) => {
  /* ++++ styled components start ++++ */
  const FormGridItem = styled(Grid)`
    display: flex;
    align-items: center;
  `;
  /* ---- styled components end ---- */
  /* ++++ Implementing React-Hook-Form starts ++++ */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isMenu, setIsMenu] = useState(true);

  const onSubmit = (data) => {
    const newData = { ...data, parent: parent.name };
    console.log(newData);
  };
  /* ---- Implementing React-Hook-Form ends ---- */

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
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ p: 2, backgroundColor: "#fafafa" }}>
          {/*++++ Parent starts ++++*/}
          <Grid container sx={{ my: 1 }}>
            <FormGridItem item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Parent
              </Typography>
            </FormGridItem>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                disabled
                value={parent?.name || false}
                variant="outlined"
                sx={{ width: "100%" }}
                placeholder="Please Select Parent"
                {...register("parent")}
              />
            </Grid>
          </Grid>
          {/*---- parent ends ----*/}
          {/* ++++ Title Starts ++++ */}
          <Grid container sx={{ my: 1 }}>
            <FormGridItem item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Title
              </Typography>
            </FormGridItem>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Title"
                variant="outlined"
                sx={{ width: "100%" }}
                {...register("title")}
              />
            </Grid>
          </Grid>
          {/* ---- Title ends ---- */}
          {/* ++++ End Point Starts ++++ */}
          <Grid container sx={{ my: 1 }}>
            <FormGridItem item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                End Point
              </Typography>
            </FormGridItem>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="End Point"
                variant="outlined"
                sx={{ width: "100%" }}
                {...register("end_point")}
              />
            </Grid>
          </Grid>
          {/* ---- End Point ends ---- */}
          {/* ++++ Router Link Starts ++++ */}
          <Grid container sx={{ my: 1 }}>
            <FormGridItem item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Router Link
              </Typography>
            </FormGridItem>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Router Link"
                variant="outlined"
                sx={{ width: "100%" }}
                {...register("router_link")}
              />
            </Grid>
          </Grid>
          {/* ---- Router Link ends ---- */}
          {/* ++++ Position Starts ++++ */}
          <Grid container sx={{ my: 1 }}>
            <FormGridItem item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Position
              </Typography>
            </FormGridItem>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Position"
                variant="outlined"
                sx={{ width: "100%" }}
                {...register("position")}
              />
            </Grid>
          </Grid>
          {/* ---- Position ends ---- */}
          {/* ++++ Icon Starts ++++ */}
          <Grid container sx={{ my: 1 }}>
            <FormGridItem item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Icon
              </Typography>
            </FormGridItem>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Icon"
                variant="outlined"
                sx={{ width: "100%" }}
                select
                defaultValue=""
                {...register("icon")}
              >
                {icons.map((icon) => (
                  <MenuItem key={icon.icon} value={icon.icon}>
                    {icon.icon}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
          </Grid>
          {/* ---- Icon ends ---- */}
          {/* ++++ IsMenu Starts ++++ */}
          <Grid container sx={{ my: 1 }}>
            <FormGridItem item xs={4}>
              <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Is Menu
              </Typography>
            </FormGridItem>
            <Grid item xs={8}>
              <Switch defaultChecked name="isMenu" {...register("is_Menu")} />
            </Grid>
          </Grid>
          {/* ---- IsMenu ends ---- */}
          {/* ++++ Api Permission Starts ++++ */}
          <Grid container sx={{ my: 1 }}>
            <Grid
              item
              sx={{ alignItems: "start", justifyContent: "start" }}
              xs={4}
            >
              <Typography
                variant="body1"
                sx={{ fontWeight: "bold", mt: "10px" }}
              >
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
              <FormControlLabel
                control={<Checkbox />}
                label="Change Password"
              />
              <br />
            </Grid>
          </Grid>
          {/* ---- Api Permission ends ---- */}
          {/* Save Button Starts */}
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained">
              Save
            </Button>
          </Box>
          {/* Save Button Ends */}
        </Box>
      </form>
      {/*---- Inputs end ----*/}
    </Box>
  );
};

export default CreateMenu;
