// libraries
import React, { useState, useEffect } from "react";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

// colors
import { green } from "@material-ui/core/colors";

// hoc
import { connect } from "react-redux";

// components
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  InputAdornment,
  IconButton,
  Button,
  CircularProgress
} from "@material-ui/core";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons";

// actions
import { userActions } from "../actions";

// types
import { AppState } from "../reducers";
import { AppActions, RegisterState } from "../types";

// styles
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center"
    },
    wrapper: {
      margin: theme.spacing(1),
      position: "relative"
    },
    buttonProgress: {
      color: green[500],
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12
    }
  })
);

type SignupFormState = {
  fullName: string;
  Hostemail: string;
  Hostphone: string;
  terms: boolean;
};

type Props = LinkDispatchToProps & LinkStateToProps;

const SignupForm: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const [values, setValues] = useState<SignupFormState>({
    fullName: "",
    Hostemail: "",
    Hostphone: "",
    terms: false
  });

  // handle fields change event
  const handleChange = (prop: keyof SignupFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    prop === "terms"
      ? setValues({ ...values, [prop]: event.target.checked })
      : setValues({ ...values, [prop]: event.target.value });
  };

  // handle password field
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // handle form submit
  const handleSubmit = (event: any) => {
    event.preventDefault();

    if (values.terms) {
      props.register(values);
    } else {
      // show error
      alert("Please agree to terms and conditions first");
    }
  };



  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <FormGroup>
        {/* full name input field */}
        <FormControl margin="dense">
          <TextValidator
            label="Full Name"
            onChange={handleChange("fullName")}
            name="fullName"
            value={values.fullName}
            validators={["required"]}
            errorMessages={["this field is required."]}
          />
        </FormControl>

        {/* email input field */}
        <FormControl margin="dense">
          <TextValidator
            label="Email address"
            onChange={handleChange("Hostemail")}
            name="Hostmail"
            value={values.Hostemail}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required.", "email is not valid."]}
          />
        </FormControl>

        {/* password input field */}
        <FormControl margin="dense">
          <TextValidator
            label="Phone Number"
            value={values.Hostphone}
            onChange={handleChange("Hostphone")}
            name="password"
            validators={["required"]}
            errorMessages={[
              "this field is required.",
              "phone should be at least 10 characters."
            ]}
           
          />
          
        </FormControl>

        <FormControlLabel
          control={
            <Checkbox
              checked={values.terms}
              onChange={handleChange("terms")}
              value="terms"
            />
          }
          label="Agreed to terms and conditions?"
        />

        {/* submit form button */}
        <FormControl>
          <FormControl>
            <Button
              color="secondary"
              variant="contained"
              type="submit"
              disabled={props.reg.registering}
            >
              Submit
            </Button>
            {props.reg.registering && (
              <CircularProgress size={24} className={classes.buttonProgress} />
            )}
          </FormControl>
        </FormControl>
      </FormGroup>
    </ValidatorForm>
  );
};

interface LinkStateToProps {
  reg: RegisterState;
}

interface LinkDispatchToProps {
  register: ({
    fullName,
    Hostemail,
    Hostphone
  }: {
    fullName: string;
    Hostemail: string;
    Hostphone: string;
  }) => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
  reg: state.registration
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  register: bindActionCreators(userActions.register, dispatch)
});

const connectedSignupForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
export { connectedSignupForm as SignupForm };
