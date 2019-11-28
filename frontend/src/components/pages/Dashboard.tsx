// libraries
import React from "react";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";

// hoc
import { connect } from "react-redux";

// types
import { AppActions, AuthState } from "../../types";

// actions
import { userActions } from "../../actions";

// components
import { Grid, Typography, Button } from "@material-ui/core";
import { AppState } from "../../reducers";

type Props = LinkStateToProps & LinkDispatchToProps;

const Dashboard: React.FC<Props> = (props: Props) => {
  const handleLogout = () => {
    // logout user
    props.logout();
  };

  return (
    <Grid
      container
      spacing={5}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh", padding: "2rem" }}
    >
      <Grid
        item
        sm={8}
        md={6}
        lg={4}
        style={{ width: "100%", textAlign: "center" }}
      >
        <Typography variant="h2" component="h2">
          Hello {props.auth.user ? props.auth.user.fullName : "User"}
        </Typography>
        <Button
          color="secondary"
          variant="text"
          type="submit"
          style={{ marginTop: "2rem" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Grid>
      <Typography variant="caption" component="p">
        this is just a normal text to fill this blank area :)
      </Typography>
    </Grid>
  );
};

interface LinkStateToProps {
  auth: AuthState
}

interface LinkDispatchToProps {
  logout: () => void;
}

const mapStateToProps = (
  state: AppState,
): LinkStateToProps => ({
  auth: state.authentication
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  logout: bindActionCreators(userActions.logout, dispatch)
});

const connectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
export { connectedDashboard as Dashboard };
