import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import CssBaseline from "@mui/material/CssBaseline";
import useApi from "../hooks/useApi";
import { useMatch, useMatches, useNavigate, useParams } from "react-router-dom";
import BaseLayout from "../components/BaseLayout";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import BaseButton from "../components/BaseButton";

function ProductForm() {
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const param = useParams();
  const { isLoading, execute } = useApi("/product", "POST");
  const { execute: executeGetProd } = useApi(
    "/product/" + param.productId,
    "GET"
  );
  const { execute: executeUpdateProd } = useApi(
    "/product/" + param.productId,
    "PUT"
  );

  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(param.productId ? true : false);

  console.log(`isEdit`, param.productId);
  const onSubmit = (data) => {
    console.log(`on submit data`, data);
    if (isEdit) {
      console.log(`begin update`);
      executeUpdateProd({ ...data }).then((res) => {
        if (res.status == 200 && res.data.status === "success") {
          navigate("/");
        }
      });
    } else {
      execute({ ...data }).then((res) => {
        if (res.status == 200 && res.data.status === "success") {
          navigate("/");
        }
      });
    }
  };

  useEffect(() => {
    if (isEdit) {
      executeGetProd().then((response) => {
        const { data } = response.data;
        console.log(`get product by id`, data);
        setValue(`name`, data.name);
        setValue(`qty`, data.qty);
        setValue(`price`, data.price);
      });
    }
  }, []);

  return (
    <>
      <CssBaseline />
      <BaseLayout>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2} sx={{ padding: 2 }}>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth={true}
                id="standard-basic"
                label="Product name"
                variant="standard"
                // defaultValue={productData.name}
                {...register("name", { required: true })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Quantity"
                variant="standard"
                type="number"
                // defaultValue={productData.qty}
                {...register("qty", { required: true, pattern: /\d+/g })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <TextField
                fullWidth
                id="standard-basic"
                label="Price"
                variant="standard"
                type="number"
                // defaultValue={productData.price}
                {...register("price", { required: true, pattern: /\d+/g })}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <BaseButton
                fullWidth
                variant="contained"
                sx={{ marginTop: 1 }}
                startIcon={isEdit ? <EditIcon /> : <AddIcon />}
                type="submit"
              >
                {isEdit ? "update" : "create"}
              </BaseButton>
            </Grid>
          </Grid>
        </form>
      </BaseLayout>
    </>
  );
}

export default ProductForm;
