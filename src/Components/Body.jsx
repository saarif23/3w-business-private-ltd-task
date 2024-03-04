import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import WarningIcon from "@mui/icons-material/Warning";
import ETHTable from "./Table/ETHTable";
import { useState } from "react";
import TestLineTHistory from "./Table/TestLineTHistory";
const Body = () => {
  const [showETHtTble, setShowETHtTble] = useState(true);
  return (
    <div>
      <div
        style={{
          maxWidth: "1200px",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <Box
          sx={{
            paddingY: "30px",
          }}
        >
          <Typography
            variant="h4"
            color="#7c28bc"
            fontWeight="bold"
            paddingY="10px"
          >
            Request testnet LINK
          </Typography>
          <Typography variant="body1" color="gray">
            Get testnet LINK for an account on one of the supported blockchain
            testnets so you can <br /> create and test your own oracle and
            Chainlinked smart contract
          </Typography>
        </Box>
        <Box sx={{ backgroundColor: "white", padding: "20px" }}>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              gap: "20px",
              backgroundColor: "#f0fcfc",
              padding: "10px",
            }}
          >
            <WarningIcon
              sx={{
                color: "#7c28bc",
              }}
            />
            <Typography variant="body1" color="gray">
              Your wallet is connected to Arbitrum Rinkeby, so you are
              requesting Arbitrum Rinkeby Link/ETH.
            </Typography>
          </Box>
          <Box
            sx={{
              marginY: "10px",
            }}
          >
            <Typography
              variant="body"
              color="#7c28bc"
              fontWeight="bold"
              sx={{
                display: "block",
                paddingY: "5px",
              }}
            >
              Wallet Address
            </Typography>
            <TextField
              id="outlined-basic"
              variant="outlined"
              size="small"
              placeholder="Your Wallet Address"
              sx={{
                width: "50%",
              }}
            />
          </Box>
          <Box
            sx={{
              marginY: "10px",
            }}
          >
            <Typography
              variant="body"
              color="#7c28bc"
              fontWeight="bold"
              sx={{
                display: "block",
                paddingY: "5px",
              }}
            >
              Request Type
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "50%",
                gap: 2,
              }}
            >
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                disabled
                placeholder="20 Text Link"
                sx={{
                  width: "100%",
                  bgcolor: "lightgray",
                }}
              />
              <TextField
                id="outlined-basic"
                variant="outlined"
                size="small"
                disabled
                placeholder="0.5 ETH"
                sx={{
                  width: "100%",
                  bgcolor: "lightgray",
                }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7c28bc",
                textTransform: "capitalize",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Send Request
            </Button>
          </Box>

          {/* request history */}
          <Box marginTop={"20px"}>
            <Typography variant="body1" color="initial" fontWeight={"bold"}>
              Request History
            </Typography>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                marginY: "10px",
              }}
            >
              <Button
                onClick={() => setShowETHtTble(true)}
                variant={showETHtTble ? "contained" : "outlined"}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                ETH Transaction History
              </Button>
              <Button
                onClick={() => setShowETHtTble(false)}
                variant={showETHtTble ? "outlined" : "contained"}
                sx={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                }}
              >
                Testline Transaction History
              </Button>
            </Box>
            {showETHtTble ? <ETHTable /> : <TestLineTHistory />}
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Body;
