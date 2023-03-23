import React from "react";
import Grid from "@mui/material/Grid";


const GridLayout = ({ children }) => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          {children}
        </Grid>
      </Grid>
    </>
  );
};

export default GridLayout;
