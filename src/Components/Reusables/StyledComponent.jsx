import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

export const TitleContainer = styled("div")({
  backgroundColor: "#f0f0f0",
  borderRadius: "10px 10px 0 0",
  padding: "1rem",
});

export const Title = styled(Typography)({
  color: "#444444",
  textTransform: "uppercase",
  letterSpacing: "2px",
});
