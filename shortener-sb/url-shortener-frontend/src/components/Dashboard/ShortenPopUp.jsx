import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import { motion } from "framer-motion";
import CreateNewShorten from "./CreateNewShorten";

const ShortenPopUp = ({ open, setOpen, refetch }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 400,
          sx: {
            backdropFilter: "blur(8px)",
            backgroundColor: "rgba(15,23,42,0.45)",
          },
        },
      }}
    >
      <Fade in={open}>
        <div className="flex items-center justify-center min-h-screen px-4">
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-2xl"
          >
            <CreateNewShorten
              setOpen={setOpen}
              refetch={refetch}
            />
          </motion.div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ShortenPopUp;