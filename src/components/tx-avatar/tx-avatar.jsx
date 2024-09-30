import { Avatar, Badge } from "antd";
import PropTypes from "prop-types";
import React from "react";

const TxAvatar = ({ shape, badge, size, icon, color, url, alt, ...rest }) => {
  return (
    <Badge count={!isNaN(badge) ? badge : undefined} dot={badge === "dot" && true}>
      <Avatar
        size={size}
        src={url && <img src={url} alt="avatar" />}
        style={{
          backgroundColor: color,
        }}
        icon={icon && icon}
        shape={shape && shape}
        {...rest}
      />
    </Badge>
  );
};

TxAvatar.propTypes = {
  color: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.oneOf(["large", "medium", "small"]), PropTypes.number]),
  badge: PropTypes.oneOfType([PropTypes.oneOf(["dot"]), PropTypes.number]),
  shape: PropTypes.oneOf(["square", "circle"]),
};

TxAvatar.defaultProps = {
  size: 36,
  shape: "circle",
  color: "#0e0e13",
};

const TxAvatarGroup = ({ children, max, size, shape, ...rest }) => {
  return (
    <Avatar.Group
      size={size}
      max={{
        count: max,
        style: {
          color: "#0e0e13",
          backgroundColor: "#f4f4f5",
          cursor: "pointer",
        },
        popover: {
          trigger: "hover",
        },
      }}
    >
      {children?.map((item, index) => {
        return item;
      })}
    </Avatar.Group>
  );
};

TxAvatarGroup.propTypes = {
  color: PropTypes.string,
  url: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.oneOf(["large", "medium", "small"]), PropTypes.number]),
  badge: PropTypes.oneOfType([PropTypes.oneOf(["dot"]), PropTypes.number]),
  shape: PropTypes.oneOf(["square", "circle"]),
};

TxAvatarGroup.defaultProps = {
  size: 36,
};

TxAvatar.Group = TxAvatarGroup;

export default TxAvatar;
