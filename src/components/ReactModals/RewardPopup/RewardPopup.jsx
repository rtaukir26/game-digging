import ReactModal from "react-modal";
import "./rewardPopup.scss";
const RewardPopup = ({ isOpen, point }) => {
  const modalStyles = {
    overlay: {
      backgroundColor: "rgb(0 0 0 / 5%)",
      backdropFilter: "blur(0px)",
      zIndex: 999,
    },
    content: {
      border: "none",
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "100%",
      background: "transparent",
      padding: "20px",
    },
  };
  return (
    <ReactModal
      isOpen={isOpen}
      style={modalStyles}
      ariaHideApp={false}
      //   onRequestClose={handleClose}
    >
      <div className="reward-modal">
        <span>{point}</span>
      </div>
    </ReactModal>
  );
};

export default RewardPopup;
