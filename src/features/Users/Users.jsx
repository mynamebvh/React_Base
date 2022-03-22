import React from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, email, role) {
  return { name, email, role };
}

const rows = [
  createData("Tony Nguyen", "nhattruong1811@gmail.com", "ADMIN"),
  createData("David Name", "david@gmail.com", "OPERATOR"),
];

export default function UserList() {
  const classes = useStyles();
  const history = useNavigate();

  return (
    <>
      <Grid container alignItems='center'>
        <Grid sm={8}>
          <h2>User</h2>
        </Grid>
        <Grid sm={4} container justify='flex-end'>
          <Button
            variant='contained'
            color='primary'
            size='small'
            startIcon={<AddIcon />}
            onClick={() => history.push("/user/add")}
          >
            Add
          </Button>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <IconButton
                    color='primary'
                    aria-label='edit user'
                    component='span'
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
