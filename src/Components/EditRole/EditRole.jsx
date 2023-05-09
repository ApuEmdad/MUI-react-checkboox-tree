import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { Title, TitleContainer } from "../Reusables/StyledComponent";
import { Button } from "@mui/material";
import { CheckCircleOutline, Cancel } from "@mui/icons-material";
import { useForm } from "react-hook-form";

const EditRole = ({ handleClose, name, id }) => {
  /* ++++ Implementing React-Hook-Form starts ++++ */
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
    handleClose();
  };
  /* ---- Implementing React-Hook-Form ends ---- */
  return (
    <Box>
      <TitleContainer>
        <Title variant="h5">Create New Role</Title>
      </TitleContainer>
      {/* ++++ Inputs Start ++++ */}
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Box sx={{ p: 2, backgroundColor: "#fafafa" }}>
          {/* ++++ Name Input Starts ++++ */}
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Name
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value={name}
              {...register("name")}
            />
          </Box>
          {/* ---- Name Input Ends ---- */}
          {/* ++++ Order by Input Starts ++++ */}
          <Box>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              Order by
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              value={id}
              {...register("order_by")}
            />
          </Box>
          {/* ---- Order by Input Ends ---- */}
        </Box>
        {/* ++++ Submit and Cancel Starts ++++ */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "1rem",
            p: 1,
          }}
        >
          {/* Submit button */}
          <Button
            type="submit"
            variant="contained"
            startIcon={<CheckCircleOutline />}
          >
            Submit
          </Button>
          {/* Cancel button */}
          <Button
            variant="contained"
            color="secondary"
            startIcon={<Cancel />}
            onClick={() => handleClose()}
          >
            Cancel
          </Button>
        </Box>
        {/* ---- Submit and Cancel End ---- */}
      </form>
      {/* ---- Inputs End ---- */}
    </Box>
  );
};

export default EditRole;
