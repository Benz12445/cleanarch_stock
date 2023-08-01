import React from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/material";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(`data from form: `, data);

  return (
    <>
      <CssBaseline />

      <Grid
        justifyContent="center"
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
      </Grid>
    </>
  );
}

export default Login;
