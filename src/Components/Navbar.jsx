import React from "react";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import WalletIcon from "@mui/icons-material/Wallet";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Image1 from "../assets/ModalImage1.svg";
import Image2 from "../assets/ModalImage2.png";
//
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: 300,
    sm: 400,
    lg: 600,
  },
  bgcolor: "background.paper",
  p: {
    xs: 2,
    sm: 3,
    lg: 4,
  },
  boxShadow: 24,
  borderRadius: 4,
};

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Navbar = () => {
  //
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div
      style={{
        maxWidth: "1200px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop:"20px",
        marginBottom:"20px"
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h5" color={"#6C22A6"} fontWeight="bold">
          Faucets
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            alignItems: "center",
          }}
        >
          <Select variant="outlined" size="small" defaultValue={names[0]}>
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
          <Button
            size="medium"
            onClick={handleOpen}
            variant="text"
            style={{
              color: "#6C22A6",
              textTransform: "capitalize",
              border: "2px solid #6C22A6",
            }}
          >
            <WalletIcon />
            Connect Wallet
          </Button>

          <AccountCircleIcon
            style={{
              backgroundColor: "lightgray",
              width: "30px",
              height: "30px",
              padding: "4px",
              borderRadius: "100%",
              color: "gray",
              cursor: "pointer",
            }}
          />
        </Box>
      </Box>

      <Modal
        sx={{ boxShadow: "20px" }}
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <Typography variant="h5" color="initial">
              Connect your wallet
            </Typography>
            <Button>
              <CloseIcon onClick={handleClose} />
            </Button>
          </div>
          <div
            style={{
              display: "flex",
              gap: 20,
            }}
          >
            <div
              style={{
                padding: "10px",
                margin: "10px",
                backgroundColor: "#f0f7f7",
                borderRadius: "2px",
                width: 150,
                height: 150,
                textAlign: "center",
              }}
            >
              <img
                style={{ width: "80%", height: "100px" }}
                src={Image2}
                alt=""
              />
              <p
                style={{
                  color: "#6C22A6",
                  fontWeight: "bold",
                }}
              >
                MetaMask
              </p>
            </div>
            <div
              style={{
                padding: "10px",
                margin: "10px",
                backgroundColor: "#f0f7f7",
                borderRadius: "2px",
                width: 150,
                height: 150,
                textAlign: "center",
              }}
            >
              <img
                style={{ width: "80%", height: "100px" }}
                src={Image1}
                alt=""
              />
              <p
                style={{
                  color: "#6C22A6",
                  fontWeight: "bold",
                }}
              >
                WalletConnect
              </p>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Navbar;
