import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Container, Fab } from "@mui/material";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { response, status, error, isLoading, execute } = useApi(
    "/auth/login",
    "POST"
  );

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(`on submit data`, data);
    execute({ ...data }).then((res) => {
      console.log(`regis success`);
      console.log(response);
      console.log(status);
      console.log(`res`, res);
      if (status == 200 && response.status === "success") {
        // navigate("/home");
        // console.log(``)
        // localStorage.setItem()
      }
    });
  };

  return (
    <>
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          sx={{
            height: "100vh",
            alignContent: "center",
          }}
          container
          spacing={2}
          paddingLeft={1}
          paddingRight={1}
        >
          <Grid item xs={12} sm={12} md={6}>
            <TextField
              fullWidth
              id="standard-basic"
              label="username"
              variant="standard"
              {...register("username", { required: true })}
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
              Signin
            </Button>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Link href="/register" variant="subtitle2">
              Or create account
            </Link>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Login;
