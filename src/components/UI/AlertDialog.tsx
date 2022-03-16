import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import { useState } from "react";

const AlertDialog = (props:any) => {
  const [open, setOpen] = useState(true);

  let errorMessage = props.message;

  if(errorMessage === 'Network Error') {
    errorMessage = 'Oops! Network error occurred while logging in.'
  }

  if(errorMessage === 'Request failed with status code 401') {
    errorMessage = 'Please check if your email and password is correct.'
  }

  const handleClose = () => {
    setOpen(false);
    errorMessage = '';
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {errorMessage}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Continue</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
