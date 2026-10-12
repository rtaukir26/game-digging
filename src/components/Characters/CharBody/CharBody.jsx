const CharBody = ({ moveDirection }) => {
  return (
    <div className={`char-body-wpr ${moveDirection}`}>
      <div className="back-body"></div>
      <div className="below-head-body"></div>
      <div className="head-body"></div>
      <div className="hand-left"></div>
      <div className="hand-right"></div>
      <div className="hand-l-near-head"></div>
      <div className="hand-r-near-head"></div>
      <div className="hand-right-bottom"></div>
      <div className="hand-left-bottom"></div>
    </div>
  );
};

export default CharBody;
