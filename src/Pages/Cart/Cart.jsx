import {
  Container,
  Stack,
  Typography,
  useTheme,
  ToggleButtonGroup,
  ToggleButton,
  CardActionArea,
  CardActions,
  Button,
  Rating,
  Dialog,
  IconButton,
  Box,
} from "@mui/material";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Close } from "@mui/icons-material";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
const Images = [
  {
    src: "https://m.media-amazon.com/images/I/A1UqyudfKnL._CLa%7C2140%2C2000%7C611h4gSNd3L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX425_.png",
  },
  {
    src: "https://m.media-amazon.com/images/I/A1rcXo55giL._CLa%7C2140%2C2000%7C61ezDdc-zIL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png",
  },
  {
    src: "https://m.media-amazon.com/images/I/B1MuEgxHlwS._CLa%7C2140%2C2000%7C51%2BdBPB7FVL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX522_.png",
  },
];
function Cart() {
  const theme = useTheme();
  const [alignment, setAlignment] = useState("All Products");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const [value, setValue] = useState(2);
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <Container sx={{ mt: 2, mb: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", sm: "center", md: "space-between" },
          flexWrap: "wrap",
        }}
      >
        <Stack sx={{ textAlign: "center" }}>
          <Typography variant="body1" color="inherit">
            Selected Products
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: theme.palette.text.secondary }}
          >
            All our new arrivals in an Exclusive Brand Selection
          </Typography>
        </Stack>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
              ".Mui-selected": {
                backgroundColor: "inherit",
                fontWeight: "bold",
              },
            }}
          >
            <ToggleButton
              sx={{
                borderRadius: "6px !important",
                textTransform: "capitalize",
                border: "1px solid #b1afaf !important",
                p: "8px",
              }}
              className="MuiProductsButton"
              value="All Products"
            >
              All Products
            </ToggleButton>
            <ToggleButton
              sx={{
                borderRadius: "6px !important",
                textTransform: "capitalize",
                border: "1px solid #b1afaf !important",
                p: "8px",
                mx: "10px !important",
              }}
              className="MuiProductsButton"
              value="Men Catagory"
            >
              Men Catagory
            </ToggleButton>
            <ToggleButton
              sx={{
                borderRadius: "6px !important",
                textTransform: "capitalize",
                border: "1px solid #b1afaf !important",
                p: "8px",
              }}
              className="MuiProductsButton"
              value="Women Catagory"
            >
              Women Catagory
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        sx={{
          alignItems: "center",
          justifyContent: {
            xs: "center",
            sm: "space-between",
            md: "space-between",
            lg: "space-between",
          },
        }}
      >
        {["aa", "bb", "cc", "dd"].map((item) => (
          <Box key={item} sx={{ mt: 3, mb: 2, mr: 1 }}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image="https://www.canon.com.au/-/media/images/canon/products/products-overview/dx-all-product-mirrorles-1200x1200.ashx?mw=600&hash=BD6C041D2C6A031FD670788F9D43BCED"
                  alt="green iguana"
                />
                <CardContent>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="caption" color="inherit">
                      $12.99
                    </Typography>
                  </Stack>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Button
                  size="small"
                  color="primary"
                  startIcon={<AddShoppingCartIcon />}
                  sx={{ textTransform: "capitalize" }}
                  onClick={handleClickOpen}
                >
                  Add to Cart
                </Button>
                <Rating
                  name="simple-controlled"
                  value={value}
                  precision={0.5}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                />
              </CardActions>
            </Card>
          </Box>
        ))}
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root": {
            maxWidth: { xs: "100%", sm: "100%", md: "960px" },
            borderRadius: "15px",
          },
        }}
        onClose={handleClose}
        open={open}
      >
        <IconButton
          sx={{ position: "absolute", right: 3, top: 5, zIndex: 99 }}
          aria-label=""
          onClick={handleClose}
        >
          <Close />
        </IconButton>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "column", md: "row" },
          }}
        >
          <Box sx={{ mr: 3, ml: 1, my: 2 }}>
            <img
              src="https://m.media-amazon.com/images/I/A1QP1cTDMHL._CLa%7C2140%2C2000%7C41w6c%2Bow-6L.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_SX466_.png"
              alt=""
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "10px",
                // @ts-ignore
                background: theme.palette.backGround.main,
              }}
            />
          </Box>
          <Stack
            sx={{
              alignItems: { xs: "center", sm: "center", md: "flex-start" },
            }}
          >
            <Typography variant="h4" color="inherit">
              Women's Fashion
            </Typography>
            <Typography variant="subtitle1" color="red">
              $12.99
            </Typography>
            <Typography margin={1} color="inherit" fontSize={"15px"}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              architecto.
            </Typography>
            <Stack
              direction={"row"}
              alignItems={"center"}
              justifyContent={"flex-start"}
              sx={{ mb: "3px" }}
            >
              {Images.map((item) => (
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    margin: 5,
                    marginTop: 23,
                    borderRadius: "10px",
                  }}
                  key={item.src}
                  src={item.src}
                  alt=""
                />
              ))}
            </Stack>
            <Button
              variant="contained"
              sx={{ textTransform: "capitalize", m: 1, width: "120px", mb: 2 }}
              color="primary"
              startIcon={<ShoppingCartCheckoutIcon />}
            >
              Buy Now
            </Button>
          </Stack>
        </Box>
      </Dialog>
    </Container>
  );
}

export default Cart;
