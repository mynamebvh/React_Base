import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// material core
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// material icon
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

// configs
import { USER_ROLE } from "configs";

// actions
import { login } from "actions/auth.action";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: "10px",
    backgroundColor: "#9c27b0",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: "10px",
  },
  submit: {
    // margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useNavigate();
  const [name, setName] = useState("tonynguyen");
  const [role, setRole] = useState("ADMIN");

  const _onSubmit = (e) => {
    e.preventDefault();
    dispatch(login(name, role, history));
  };

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Login
        </Typography>
        <form className={classes.form} noValidate onSubmit={_onSubmit}>
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='name'
            label='User Name'
            name='name'
            autoComplete='name'
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <br />
          <FormControl variant='outlined' fullWidth>
            <InputLabel id='demo-simple-select-outlined-label'>Role</InputLabel>
            <Select
              fullWidth
              value={role}
              onChange={(e) => setRole(e.target.value)}
              label='Role'
            >
              <MenuItem value={USER_ROLE.ADMIN}>Admin</MenuItem>
              <MenuItem value={USER_ROLE.LEAD}>Lead</MenuItem>
              <MenuItem value={USER_ROLE.GUEST}>Guest</MenuItem>
            </Select>
          </FormControl>
          <Button
            type='submit'
            fullWidth
            variant='contained'
            color='primary'
            className={classes.submit}
          >
            Submit
          </Button>
        </form>
      </div>
    </Container>
  );
}
