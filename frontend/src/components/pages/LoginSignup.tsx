// libraries
import React, { useState } from "react";

// components
import { Paper, Tabs, Tab, Grid, Typography } from "@material-ui/core";
import { LoginForm, SignupForm } from "../";

// render login form
export const renderLoginFrom = () => {
  return (
    <>
      {/* Login title */}
      <Typography variant="h2" component="h2">
        User Details
      </Typography>

      {/* Login form */}
      <LoginForm />
    </>
  );
};

// render signup form
const renderSignupForm = () => {
  return (
    <>
      {/* Login title */}
      <Typography variant="h2" component="h2">
       Host Details
      </Typography>

      {/* Login form */}
      <SignupForm />
    </>
  );
};

export const LoginSignup: React.FC = () => {
  // handle tab state
  const [tab, setTab] = useState(0);
  const handleChange = (event: React.ChangeEvent<{}>, newTab: number) => {
    setTab(newTab);
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", padding: "1rem" }}
    >
      <Grid item sm={8} md={6} lg={4} style={{ width: "100%" }}>
        {/* page tabs */}
        <Paper
          square
          style={{
            position: "absolute",
            width: "100%",
            top: 0,
            left: 0,
            marginBottom: "2rem"
          }}
        >
          <Tabs
            variant="fullWidth"
            value={tab}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            aria-label="login-signup page tabs"
          >
            <Tab label="User" />
            <Tab label="Host" />
          </Tabs>
        </Paper>

        {/* render forms */}
        {tab === 0 ? renderLoginFrom() : renderSignupForm()}
      </Grid>
    </Grid>
  );
};
