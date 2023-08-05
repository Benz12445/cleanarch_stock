import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import {
  Container,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  List,
  Fab,
} from "@mui/material";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import BaseLayout from "../components/baseLayout";

function ProductForm() {
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
      <BaseLayout>
        <Grid
          container
          spacing={2}
          sx={{ width: "100vw", height: "100vh", padding: 2 }}
        >
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
                  label="asdasdasdasdasd"
                  variant="standard"
                  {...register("username", { required: true })}
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <Link href="/register" variant="subtitle2">
                  Or create account
                </Link>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </BaseLayout>
    </>
  );
}

export default ProductForm;
