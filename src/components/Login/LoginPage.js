import React, { useState, useContext } from "react";
import "./LoginPage.css";
import { Grid, Paper, Avatar, TextField, Button } from "@material-ui/core";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import LoginContext from "./LoginContext";

function LoginPage() {
  const { setToken } = useContext(LoginContext);
  const [email, setEmail] = useState("");
  const [password, setPW] = useState("");
  const [errorMessage, setError] = useState("");

  const submitLogin = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(
        `grant_type=&username=${email}&password=${password}&scope=&client_id=&client_secret=`
      ),
    };

    const response = await fetch("/token", requestOptions);
    const data = await response.json();

    if (!response.ok) {
      setError(data.detail);
    } else {
      setToken(data.access_token);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitLogin();
  };

  return (
    <>
      <Grid>
        <Paper className="paperStyle" elevation={10}>
          <h2>
            Face Mover&nbsp;&nbsp;
            <i className="fas fa-code-branch fas-fade"></i>
          </h2>
          <Grid className="introSign" align="center">
            <Avatar id="loginLogo">
              <VpnKeyOutlinedIcon />
            </Avatar>
            <h3 className="space">Sign in</h3>
          </Grid>
          <form onSubmit={handleSubmit}>
            {errorMessage !== "" ? (
              <div
                className="error"
                style={{
                  textAlign: "center",
                  color: "red",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              >
                {errorMessage}
              </div>
            ) : (
              ""
            )}
            <TextField
              id="emailField"
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="standard"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              fullWidth
              required
            />
            <TextField
              id="passwordField"
              label="Password"
              name="password"
              placeholder="Enter your password"
              variant="standard"
              type="password"
              onChange={(e) => setPW(e.target.value)}
              value={password}
              fullWidth
              required
            />
            {/*<FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
              /> 
              }
            label="Remember me"/>*/}
            <Button
              id="submitButton"
              type="submit"
              color="primary"
              variant="contained"
              fullWidth
            >
              Sign In
            </Button>
          </form>
        </Paper>
      </Grid>
    </>
  );
}

export default LoginPage;
