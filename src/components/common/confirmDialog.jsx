
import { Button ,Dialog,DialogActions,DialogContent,DialogTitle} from "@mui/material";
// import Dialog from "@mui/material";
// import DialogActions from "@mui/material";
// import DialogContent from "@mui/material";
// import DialogTitle from "@mui/material";
  


import React from 'react';

const ConfirmDialog = ({ title, children, open, setOpen, onConfirm }) => {
    return (
        <Dialog
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="confirm-dialog"
              >
                <DialogTitle id="confirm-dialog">{title}</DialogTitle>
                <DialogContent>{children}</DialogContent>
                <DialogActions>
                  <Button
                    variant="contained"
                    onClick={() => setOpen(false)}
                  >
                    No
                  </Button>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setOpen(false);
                      onConfirm();
                    }}
                  >
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
    );
}

export default ConfirmDialog;
