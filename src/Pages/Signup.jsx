import { Box, Button, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import { Link, useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
// import useAxios from "../Hooks/useAxios";

import useAxiosPublic from "../Hooks/useAxiosPublic";
import toast from "react-hot-toast";

const Signup = () => {
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, email, password);

    const user = {
      name,
      email,
      password,
      role: "user",
    };
    console.log(user);

    axiosPublic
      .put(`/users/${user?.email}`, user)
      .then((res) => {
        if (res.data) {
          navigate("/dashboard");
          toast.success("user add in database");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      style={{
        width: "35%",
        margin: "auto",
        paddingTop: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "white",
          paddingY: 5,
          paddingX: 3,
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
          borderRadius: "5px",
        }}
      >
        <Typography
          variant="h4"
          color="initial"
          fontWeight={"bold"}
          sx={{
            textAlign: "center",
            marginBottom: 3,
          }}
        >
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Box
            sx={{
              paddingBottom: 2,
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="initial">
              Name
            </Typography>
            <TextField
              id="standard-basic"
              name="name"
              type="text"
              variant="standard"
              placeholder="Enter Your Name"
              sx={{
                width: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              paddingBottom: 2,
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="initial">
              Email
            </Typography>
            <TextField
              id="standard-basic"
              name="email"
              type="email"
              variant="standard"
              placeholder="Enter Your Email"
              sx={{
                width: "100%",
              }}
            />
          </Box>
          <Box
            sx={{
              marginBottom: 3,
            }}
          >
            <Typography variant="body2" fontWeight="bold" color="initial">
              Password
            </Typography>
            <TextField
              id="standard-basic"
              name="password"
              type="password"
              variant="standard"
              placeholder="Enter Your Password"
              sx={{
                width: "100%",
              }}
            />
          </Box>
          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: "#7c28bc",
              width: "100%",
              textTransform: "capitalize",
              fontWeight: "bold",
              marginTop: "10px",
            }}
          >
            Sign Up
          </Button>
        </form>
        <Typography
          variant="body2"
          color="initial"
          fontWeight={"bold"}
          sx={{ textAlign: "center", paddingY: 2 }}
        >
          Already have an account? <Link to="/login">Login</Link>
        </Typography>
        <Typography
          variant="body2"
          color="initial"
          fontWeight={"bold"}
          sx={{ textAlign: "center" }}
        >
          Or
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "center",
            marginTop: 3,
          }}
        >
          <GoogleIcon />
          <FacebookIcon />
          <InstagramIcon />
        </Box>
      </Box>
    </div>
  );
};

export default Signup;
