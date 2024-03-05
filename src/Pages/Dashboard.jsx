import { useEffect, useState } from "react";
import UserDataTable from "../Components/Table/UserDataTable";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Typography
        variant="h3"
        color="initial"
        sx={{
          textAlign: "center",
          color: "#7c28bc",
          fontWeight: "bold",
        }}
      >
        Welcome to Dashboard
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <UserDataTable users={users} />
      </Box>
    </div>
  );
};

export default Dashboard;
