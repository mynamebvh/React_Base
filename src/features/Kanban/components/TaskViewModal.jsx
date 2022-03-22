import React from "react";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
// import SubtitlesIcon from "@mui/icons-material/Subtitles";
// import SubtitlesIcon from "@mui/icons-material/Subtitles";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles(() => ({
  icon: {
    marginRight: 10,
    marginTop: 4,
  },
  member: {
    marginTop: 2,
  },
}));

export default function TaskViewModal({ isOpen, handleCloseDialog }) {
  const classes = useStyles();

  return (
    <>
      <Dialog
        fullWidth
        maxWidth='sm'
        open={isOpen}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogTitle id='max-width-dialog-title'>
          <Grid container wrap='nowrap'>
            <Grid item xs={1}>
              {/* <SubtitlesIcon className={classes.icon} /> */}
            </Grid>
            <Grid item xs={11}>
              <Typography variant='h6'>
                {" "}
                Lizards are a widespread group of squamate reptiles
              </Typography>
            </Grid>
          </Grid>
          <Grid container wrap='nowrap'>
            <Grid item xs={1} />
            <Grid item xs={11} className={classes.member}>
              <Typography variant='body2' color='textSecondary'>
                Tony Nguyen
              </Typography>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent>
          <Box m={1}>
            <Typography component='div'>Severity</Typography>
            <Typography variant='body2' color='textSecondary'>
              Low
            </Typography>
          </Box>
          <Box m={1}>
            <Typography>Status</Typography>
            <Typography variant='body2' color='textSecondary'>
              New
            </Typography>
          </Box>
          <Box m={1}>
            <Typography>Description</Typography>
            <Typography variant='body2' color='textSecondary'>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color='primary'>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
