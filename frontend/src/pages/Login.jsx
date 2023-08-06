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
import { useSetAppCtx } from "../context/AppContext";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { setGlobalState } = useSetAppCtx();
  const { response, status, error, isLoading, execute } = useApi(
    "/auth/login",
    "POST"
  );

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(`on submit data`, data);
    execute({ ...data }).then((res) => {
      if (res.status == 200) {
        const { data } = res.data;
        localStorage.setItem(`token`, data);
        setGlobalState((prev) => ({ ...prev, auth: true }));
        navigate("/");
      }
    });
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: 2,
        justifyContent: "center",

        width: { xs: "100%", xs: "100%", md: "640px" },
      }}
    >
      <CssBaseline />
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          sx={{
            height: "100vh",
            alignContent: "center",
          }}
          container
          spacing={2}
          paddingLeft={2}
          paddingRight={2}
        >
          <Grid item xs={12} sm={12} md={12}>
            <TextField
              fullWidth
              id="standard-basic"
              label="username"
              variant="standard"
              {...register("username", { required: true })}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
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
    </Container>
  );
}

export default Login;
