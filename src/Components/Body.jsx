import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import WarningIcon from "@mui/icons-material/Warning";
const Body = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f0fcfc",
      }}
    >
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
            <WarningIcon sx={{
                color:"#7c28bc"
            }} />
            <Typography variant="body1" color="gray">
              Your wallet is connected to Arbitrum Rinkeby, so you are
              requesting Arbitrum Rinkeby Link/ETH.
            </Typography>
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Body;
