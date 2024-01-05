/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Typography,
} from "@material-tailwind/react";

const FormSuccessModal = ({ open, handleClose }) => {
  return (
    <>
      <Dialog size="xs" open={open}>
        <DialogBody divider className="grid place-items-center gap-4">
          <svg
            width="123"
            height="123"
            viewBox="0 0 123 123"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M46.1561 61.3824L56.3061 71.5324L76.6061 51.2324M107.056 61.3824C107.056 86.608 86.6068 107.057 61.3811 107.057C36.1555 107.057 15.7061 86.608 15.7061 61.3824C15.7061 36.1568 36.1555 15.7073 61.3811 15.7073C86.6068 15.7073 107.056 36.1568 107.056 61.3824Z"
              stroke="#34A853"
              stroke-width="2.436"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>

          <Typography className="text-center" variant="h2" color="green">
            Congratulations
          </Typography>
          <Typography className="text-center font-normal">
            Congratulations on your successful submission of all forms
          </Typography>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button className="bg-primary rounded" onClick={() => handleClose()}>
            Ok
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default FormSuccessModal;
