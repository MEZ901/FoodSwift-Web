import PropTypes from "prop-types";

const VerifiedIcon = ({ fill, stroke }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6 mx-2 text-blue-500"
      fill={fill || "none"}
      viewBox="0 0 24 24"
      stroke={stroke || "rgb(59 130 246)"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

VerifiedIcon.propTypes = {
  fill: PropTypes.string,
  stroke: PropTypes.string,
};

export default VerifiedIcon;
