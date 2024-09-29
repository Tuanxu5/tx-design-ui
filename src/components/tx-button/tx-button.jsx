import PropTypes from "prop-types";
import React from "react";
import StyledTxButton, { LoadingRotatingIcon } from "./styled";

const TxButton = ({
  label = "Click Me",
  onClick,
  background,
  color,
  primary,
  size,
  type,
  disabled,
  prefix,
  suffix,
  shape,
  loading,
  danger,
  gradientBackground,
  ...rest
}) => {
  return (
    <StyledTxButton
      onClick={onClick}
      className={[
        "tx-ui-tx-button",
        disabled && "tx-ui-tx-button--disabled",
        loading && "tx-ui-tx-button--loading",
        danger && "tx-ui-tx-button--danger",
        `tx-ui-tx-button--${size}`,
        `tx-ui-tx-button--${type}`,
      ].join(" ")}
      style={{
        padding: "10px 20px",
        background: background || "defaultBackground",
        color: color || "defaultColor",
      }}
      disabled={loading}
      shape={shape}
      danger={danger}
      gradientBackground={gradientBackground && gradientBackground}
      {...rest}
    >
      {loading && <LoadingRotatingIcon />}
      {prefix && !loading && prefix}
      {label}
      {suffix && suffix}
    </StyledTxButton>
  );
};

TxButton.propTypes = {
  label: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  danger: PropTypes.bool,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["primary", "secondary", "filled", "text", "link", "dashed"]),
  shape: PropTypes.oneOf(["default", "circle"]),
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  gradientBackground: PropTypes.shape({
    degree: PropTypes.number,
    colors: PropTypes.arrayOf(PropTypes.string),
  }),
  onClick: PropTypes.func,
};

TxButton.defaultProps = {
  backgroundColor: null,
  type: "primary",
  size: "medium",
  onClick: undefined,
};

export default TxButton;
