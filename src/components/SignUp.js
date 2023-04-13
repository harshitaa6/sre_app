// import React from "react";
// import {
//   Grid,
//   Paper,
//   Avatar,
//   Typography,
//   TextField,
//   Button,
//   Box,
// } from "@material-ui/core";
// // import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import "./signup.css";
// const Signup = () => {
//   const paperStyle = { padding: "60px 30px", width: 1000, margin: "30px auto" };
//   const headerStyle = { margin: 0 };
//   const avatarStyle = { backgroundColor: "#1bbd7e" };
//   const marginTop = { marginTop: 5 };
//   const boxStyle = {
//     width: 400,
//     align: "left",
//   };
//   return (
//     <Grid>
//       <Paper elevation={20} style={paperStyle} className="background-image">
//         <Box style={boxStyle}>
//           <Grid align="center">
//             <Avatar style={avatarStyle}>
//               {/* <AddCircleOutlineOutlinedIcon /> */}
//             </Avatar>
//             <h2 style={headerStyle}>Sign Up</h2>
//             <Typography variant="caption" gutterBottom>
//               Please fill this form to create an account !
//             </Typography>
//           </Grid>
//           <form>
//             <TextField fullWidth label="Name" placeholder="Enter your name" />
//             <TextField fullWidth label="Email" placeholder="Enter your email" />
//             <FormControl component="fieldset" style={marginTop}></FormControl>
//             <TextField
//               fullWidth
//               label="Phone Number"
//               placeholder="Enter your phone number"
//             />
//             <TextField
//               fullWidth
//               label="Password"
//               placeholder="Enter your password"
//             />
//             <TextField
//               fullWidth
//               label="Confirm Password"
//               placeholder="Confirm your password"
//             />
//             <FormControlLabel
//               control={<Checkbox name="checkedA" />}
//               label="I accept the terms and conditions."
//             />
//           </form>
//           <Button
//             type="submit"
//             variant="contained"
//             fullWidth
//             color="primary"
//             style={{ marginTop: "10px", marginLeft: "150px" }}
//           >
//             Sign up
//           </Button>
//         </Box>
//       </Paper>
//     </Grid>
//   );
// };

// export default Signup;

import React, { useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Typography,
  TextField,
  Button,
  Box,
  Link,
} from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [terms, setTerms] = useState(false);

  const validateName = () => {
    if (name.length === 0) {
      setNameError(true);
      return false;
    }
    setNameError(false);
    return true;
  };

  const validateEmail = () => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!re.test(email)) {
      setEmailError(true);
      return false;
    }
    setEmailError(false);
    return true;
  };

  const validatePhone = () => {
    if (phone.length === 0) {
      setPhoneError(true);
      return false;
    }
    setPhoneError(false);
    return true;
  };

  const validatePassword = () => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(true);
      return false;
    }
    setPasswordError(false);
    return true;
  };

  const validateConfirmPassword = () => {
    if (confirmPassword !== password) {
      setConfirmPasswordError(true);
      return false;
    }
    setConfirmPasswordError(false);
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      validateName() &&
      validateEmail() &&
      validatePhone() &&
      validatePassword() &&
      validateConfirmPassword() &&
      terms
    ) {
      // Form is valid, submit data
      console.log("Form is valid");
    } else {
      // Form is invalid, show error messages
      console.log("Form is invalid");
    }
  };

  const paperStyle = { padding: "40px 30px", width: 1000, margin: "30px auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#90CAF9" };
  // const marginTop = { marginTop: 5 };
  const boxStyle = {
    width: 400,
    align: "left",
  };
  const textPrivate = {
    color: "#2F4F4F",
  };
  return (
    <Grid>
      <Paper
        elevation={10}
        style={paperStyle}
        className="signup-background-image"
      >
        <Box style={boxStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              {/* <AddCircleOutlineOutlinedIcon /> */}
            </Avatar>
            <h2 style={headerStyle}>Sign Up</h2>
            <Typography variant="caption" gutterBottom>
              Please fill this form to create an account !
            </Typography>
          </Grid>
          <form>
            <TextField
              fullWidth
              label="Name"
              placeholder="Enter your name"
              error={nameError}
              helperText={nameError ? "Name is required" : ""}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Email"
              placeholder="Enter your email"
              error={emailError}
              helperText={
                emailError ? "Please enter a valid email address" : ""
              }
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Phone Number"
              placeholder="Enter your phone number"
              error={phoneError}
              helperText={phoneError ? "Phone number is required" : ""}
              onChange={(e) => setPhone(e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Password"
              placeholder="Enter your password"
              type="password"
              error={passwordError}
              helperText={passwordError ? "Please enter strong password" : ""}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <TextField
              fullWidth
              label="Confirm Password"
              placeholder="Confirm your password"
              type="password"
              error={confirmPasswordError}
              helperText={confirmPasswordError ? "Passwords do not match" : ""}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {/* <FormControlLabel
              control={
                <Checkbox
                  checked={terms}
                  onChange={(e) => setTerms(e.target.checked)}
                  name="checkedA"
                  required
                />
              }
              label="I accept the terms and conditions."
            /> */}
            <Typography
              mt={4}
              style={textPrivate}
              variant="caption"
              color="#2929b8"
            >
              By registering, you confirm that you accept our Terms of service
              and Privacy Policy
            </Typography>
          </form>
          {/* <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={handleSubmit}
          >
            <Link href="/Login" >
              Sign in
            </Link>
          </Button> */}
          <Link
            href="/"
            style={{
              display: "inline-block",
              backgroundColor: "#3f51b5",
              color: "#fff",
              padding: "10px 20px",
              textDecoration: "none",
              borderRadius: "5px",
              width: "100%",
              textAlign: "center",
            }}
            onClick={handleSubmit}
          >
            Sign in
          </Link>
          Already have an account ?<Link href="/">Login</Link>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Signup;
