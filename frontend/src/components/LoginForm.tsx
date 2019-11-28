// libraries
import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { makeStyles, createStyles, Theme } from "@material-ui/core";

// colors
import { green } from "@material-ui/core/colors";

// hoc
import { connect } from "react-redux";

import { SignupForm } from './';
import { Paper, Tabs, Tab, Grid, Typography } from "@material-ui/core";
// components
import { ThunkDispatch } from "redux-thunk";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
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

// icons
import { Visibility, VisibilityOff } from "@material-ui/icons";

// actions
import { userActions } from "../actions";

// types
import { AppState } from "../reducers";
import { AuthState, AppActions } from "../types";


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

type LoginFormState = {
  email: string;
  name: string;
  remember: boolean;
  phone : string;
  checkout: string;
};

type Props = LinkStateToProps & LinkDispatchToProps;

// login form fc
const LoginForm: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  const [values, setValues] = useState<LoginFormState>({
    email: "",
    name: "",
    phone: "",
    remember: false,
    checkout: ""
  });


    
    function  Redirect(){
    return( 
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

 function onCheckout(){
   var checkout = values.checkout;
   console.log(values.checkout);
    fetch('http://localhost:5000/api/checkout' , {
	 mode :"cors",
	 method: "POST",
	 headers: {
	   'Content-type': 'application/json'
	 },
   body: JSON.stringify({checkout})
  })
  
   .then((result) => result.json())
   .then((info) => { 
	  console.log(info);
	//  if(info.success == "login sucessfull"){
   
   })
  }	 

 
  // handle fields change event
  const handleChange = (prop: keyof LoginFormState) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    prop === "remember"
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
  const handleSubmit = (event: any): void => {
    event.preventDefault();
    props.login(values);
  };

  useEffect(() => {
    // onComponentDidMount
    ValidatorForm.addValidationRule("minLength", value => {
      if (value.length < 5) {
        return false;
      }
      return true;
    });

    return () => {
      // onComponentUnmount
      ValidatorForm.removeValidationRule("minLength");
    };
  }, []);

  return (
    <ValidatorForm onSubmit={handleSubmit}>
      <FormGroup>
        {/*name field*/}
        <FormControl margin="dense">
          <TextValidator
            label="Name"
            onChange={handleChange("name")}
            name="name"
            value={values.name}
            
        
          />
        </FormControl>

        {/* email input field */}
        <FormControl margin="dense">
          <TextValidator
            label="Email address"
            onChange={handleChange("email")}
            name="email"
            value={values.email}
            validators={["required", "isEmail"]}
            errorMessages={["this field is required.", "email is not valid."]}
          />
        </FormControl>

        {/* password input field */}
        <FormControl margin="dense">
          <TextValidator
            label="Phone Number"
            id="adornment-password"
          //  type={showPassword ? "text" : "password"}
            value={values.phone}
            onChange={handleChange("phone")}
            name="password"
            validators={["required", "minLength:5"]}
            errorMessages={[
              "this field is required.",
              "number should be at least 10 characters."
            ]}
          />
        </FormControl>
      

        {/* submit form button */}
        <FormControl>
          <Button onClick ={Redirect}
            color="secondary"
            variant="contained"
            type="submit"
            disabled={props.auth.loggingIn}
          >
            Check-in Details
          </Button>
          {props.auth.loggingIn && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </FormControl>
      </FormGroup>
   
    <FormGroup>
      {/*name field*/}
      <FormControl margin="dense">
        <TextValidator
          label="checkout"
          onChange={handleChange("checkout")}
          name="checkout"
          value={values.checkout}
     
      
        />
      </FormControl>
      <FormControl>
          <Button onClick ={onCheckout}
            color="secondary"
            variant="contained"
            type="submit"
            disabled={props.auth.loggingIn}
          >
            Check-Out Details
          </Button>
          {props.auth.loggingIn && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </FormControl>
      </FormGroup>
    </ValidatorForm>
  );
};

interface LinkStateToProps {
  auth: AuthState;
}

interface LinkDispatchToProps {
  login: ({
    email,
    name,
    phone,
    remember,
    checkout
  }: {
    email: string;
    name: string;
    phone: string;
    remember?: boolean;
    checkout: string;
  }) => void;
}

const mapStateToProps = (state: AppState): LinkStateToProps => ({
  auth: state.authentication
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<any, any, AppActions>
): LinkDispatchToProps => ({
  login: bindActionCreators(userActions.login, dispatch)
});

const connectedLoginForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
export { connectedLoginForm as LoginForm };
