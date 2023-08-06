import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import useApi from "../hooks/useApi";
function ProductForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { error, isLoading, execute } = useApi("/auth/register", "POST");
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(`on submit data`, data);
    execute({ ...data }).then((res) => {
      console.log(`data`, res);
      if (res.status == 200 && res.data.status === "success") {
        navigate("/login");
      }
    });
  };

  return (
    <Container maxWidth="xl" sx={{ padding: 2 }}>
      {/* <></> */}
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          sx={{
            height: "100vh",
            alignContent: "center",
          }}
          container
          spacing={2}
        >
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Username"
              variant="standard"
              {...register("username", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Display name"
              variant="standard"
              {...register("display_name", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Firstname"
              variant="standard"
              {...register("firstname", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="Lastname"
              variant="standard"
              {...register("lastname", { required: true })}
            />
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="password"
              type="password"
              variant="standard"
              {...register("password", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button fullWidth type="submit" variant="contained" color="primary">
              register
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default ProductForm;
