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
import { useForm } from "react-hook-form";
import { Title, TitleContainer } from "../Reusables/StyledComponent";
import { useState } from "react";

const CreateMenu = ({ parent, setParent }) => {
  /* ++++ Permissions start ++++ */
  const permissions = [
    { id: 1, updated_at: null, name: "view", key: "can_view" },
    { id: 2, updated_at: null, name: "edit", key: "can_edit" },
    { id: 3, updated_at: null, name: "add", key: "can_add" },
    { id: 4, updated_at: null, name: "delete", key: "can_delete" },
    {
      id: 5,
      updated_at: null,
      name: "change password",
      key: "can_change_password",
    },
    { id: 6, updated_at: null, name: "approve", key: "can_approve" },
    { id: 7, updated_at: null, name: "reject", key: "can_reject" },
    { id: 8, updated_at: null, name: "publish", key: "can_publish" },
  ];
  /* ---- Permissions end ---- */

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
    getValues,
    reset,
  } = useForm();

  const [isMenu, setIsMenu] = useState(true);

  const onSubmit = (data) => {
    const selectedPermissions = Object.keys(getValues())
      .filter((key) => getValues()[key])
      .map((key) => {
        const matchedPermission = permissions.find((p) => p.key === key);
        return matchedPermission ? { name: matchedPermission.name, key } : null;
      })
      .filter((permission) => permission !== null);

    const newData = {
      ...data,
      parent: parent.name,
      permissions: selectedPermissions,
    };
    console.log(newData);
    setParent("");
    setIsMenu(true);
    reset();
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
      <TitleContainer>
        <Title variant="h5">CREATE MENU</Title>
      </TitleContainer>
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
                value={parent?.name || ""}
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
                name="icon"
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
              <Switch
                checked={isMenu}
                onClick={() => setIsMenu(!isMenu)}
                name="isMenu"
                {...register("is_Menu")}
              />
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
              {permissions.map((permission) => (
                <Box key={permission.id}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label={permission.name}
                    {...register(permission.key)}
                  />
                  <br />
                </Box>
              ))}
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
