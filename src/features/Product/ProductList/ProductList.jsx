import React from "react";
import { useNavigate } from "react-router-dom";

// material core
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";

// atomic
import PaginationBase from "components/molecules/PaginationBase";

// configs
import { PATH_NAME } from "configs";

// hooks
import usePagination from "hooks/usePagination";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function ProductList() {
  const history = useNavigate();
  const { page, perPage, _changePage, _changePerPage } = usePagination();

  return (
    <div>
      (
      <Grid container justify='flex-end'>
        <Button
          type='submit'
          variant='contained'
          color='primary'
          startIcon={<AddIcon />}
          onClick={() => history.push(PATH_NAME.PRODUCT_ADD)}
        >
          Add Product
        </Button>
      </Grid>
      )
      <br />
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell align='right'>Calories</TableCell>
              <TableCell align='right'>Fat&nbsp;(g)</TableCell>
              <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
              <TableCell align='right'>Protein&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {row.name}
                </TableCell>
                <TableCell align='right'>{row.calories}</TableCell>
                <TableCell align='right'>{row.fat}</TableCell>
                <TableCell align='right'>{row.carbs}</TableCell>
                <TableCell align='right'>{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationBase
        pageIndex={page}
        perPage={perPage}
        totalPage={50}
        changePage={_changePage}
        changePerPage={_changePerPage}
      />
    </div>
  );
}

export default ProductList;
