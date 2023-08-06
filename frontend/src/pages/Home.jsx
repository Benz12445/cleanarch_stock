import React, { useEffect, useState } from "react";
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
  Typography,
} from "@mui/material";
import useApi from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import Link from "@mui/material/Link";
import AddIcon from "@mui/icons-material/Add";
import { parseNullToDashString } from "../utils/function";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import BaseLayout from "../components/baseLayout";

function Home() {
  const [productList, setProductList] = useState([]);
  const { response, status, error, isLoading, execute } = useApi(
    "/product",
    "GET"
  );

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    execute().then((res) => {
      console.log(`after fetch api`, res);
      const { data } = res.data;
      setProductList(data);
    });
  };

  return (
    <>
      <CssBaseline />
      <Fab
        size="medium"
        color="primary"
        aria-label="add"
        sx={{ position: "absolute", right: "5%", bottom: "5%" }}
        onClick={() => navigate("/product")}
      >
        <AddIcon />
      </Fab>
      <BaseLayout>
        <Grid container spacing={2} sx={{ width: "100vw" }}>
          <List sx={{ width: "100%" }}>
            {productList.map((item) => (
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(`/product/${item.id}`)}>
                  <ListItemText
                    primary={parseNullToDashString(item.name)}
                    secondary={`${item.qty} left`}
                  />
                  <Typography>{item.price} $</Typography>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Grid>
      </BaseLayout>
    </>
  );
}

export default Home;
