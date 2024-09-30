import styled, { keyframes } from "styled-components";
import { SvgIcon } from "../../assets/icons";
import "../../styles/shorten.scss";

const StyledTxButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: ${props => props.color || "#ffffff"};
  border: ${props => (props.gradientBackground ? "1px solid #ffffff" : "1px solid #0e0e13ff")};
  border-radius: ${props => (props.shape === "circle" ? "100px" : "10px")};
  font-size: 14px;
  cursor: pointer;
  position: relative;
  white-space: nowrap;
  text-align: center;
  user-select: none;
  touch-action: manipulation;
  font-weight: 500;
  padding: ${props => (props.shape === "circle" ? "12px 12px !important" : "12px 22px !important")};
  transition: background-color 0.25s ease, transform 0.25s ease;
  background: ${props =>
    props.gradientBackground
      ? `linear-gradient(${props.gradientBackground.degree || 135}deg, ${
          props.gradientBackground.colors && props.gradientBackground.colors.length > 0
            ? props.gradientBackground.colors.join(", ")
            : ["#6253e1", "#04befe"].join(", ")
        })`
      : props.backgroundColor || "#03030f"};

  &.tx-ui-tx-button {
    &:hover {
      opacity: 0.8;
      box-shadow: 0px 0px 8px 2px #03030f30;
    }

    &:active {
      transform: scale(0.98);
    }

    &.tx-ui-tx-button--large {
      font-size: 16px;
      padding: ${props => (props.shape === "circle" ? "14px 14px !important" : "14px 24px !important")};
    }

    &.tx-ui-tx-button--small {
      font-size: 12px;
      padding: ${props => (props.shape === "circle" ? "10px 10px !important" : "10px 20px !important")};
    }

    &.tx-ui-tx-button--danger {
      background-color: #e45649 !important;
      border: 1px solid #e45649 !important;
      color: #ffffff;
    }

    &.tx-ui-tx-button--disabled {
      background-color: #f3f3f4 !important;
      border: 1px solid #a0a1a7 !important;
      color: #a0a1a7;
      outline: none;
      cursor: not-allowed;
      &:hover {
        opacity: 1;
        box-shadow: none;
      }

      &:active {
        transform: none;
      }
    }

    &.tx-ui-tx-button--loading {
      opacity: 0.7;
      cursor: not-allowed;
      &:hover {
        box-shadow: none;
      }

      &:active {
        transform: none;
      }
    }
  }

  &.tx-ui-tx-button--secondary {
    background: #ffffff;
    border: 1px solid #03030f;
    color: #03030f;
    &:hover {
      opacity: 0.9;
      background: #03030f;
      color: #ffffff;
    }

    &.tx-ui-tx-button--danger {
      background: #ffffff !important;
      color: #e45649;

      &:hover {
        background: #e45649 !important;
        box-shadow: 0px 0px 8px 2px #e4564930;
        color: #ffffff;
      }
    }

    &.tx-ui-tx-button--disabled {
      &:hover {
        color: #a0a1a7;
      }
    }

    &.tx-ui-tx-button--loading {
      opacity: 0.7;
    }
  }

  &.tx-ui-tx-button--dashed {
    background: #ffffff;
    border: 1px dashed #03030f;
    color: #03030f;

    &:hover {
      border: 1px dashed #1fa9ff;
      color: #1fa9ff;
      box-shadow: 0px 0px 8px 2px #1fa9ff30;
    }

    &.tx-ui-tx-button--danger {
      background: #ffffff !important;
      color: #e45649;

      &:hover {
        background: #e4564915 !important;
        box-shadow: 0px 0px 8px 2px #e4564930;
        color: #e45649;
      }
    }

    &.tx-ui-tx-button--disabled {
      &:hover {
        color: #a0a1a7;
      }
    }
  }

  &.tx-ui-tx-button--filled {
    background: #03030f20;
    border: 1px solid #03030f00;
    color: #03030f;
    &:hover {
      opacity: 0.9;
      box-shadow: none;
    }

    &.tx-ui-tx-button--danger {
      background: #e4564920 !important;
      color: #e45649;
      border: 1px solid transparent !important;
    }

    &.tx-ui-tx-button--disabled {
      border: 1px solid #03030f00 !important;
    }

    &.tx-ui-tx-button--loading {
      opacity: 0.7;
    }
  }

  &.tx-ui-tx-button--text {
    background: white;
    border: 1px solid #ffffff;
    background: #ffffff;
    color: #03030f;
    &:hover {
      background: #03030f10;
      box-shadow: none;
    }

    &.tx-ui-tx-button--danger {
      background: #ffffff !important;
      color: #e45649;
      border: 1px solid transparent !important;
      &:hover {
        background: #e4564915 !important;
        box-shadow: none;
      }
    }

    &.tx-ui-tx-button--disabled {
      border: 1px solid #ffffff !important;
      background: #ffffff !important;
    }
  }

  &.tx-ui-tx-button--link {
    background: white;
    border: none;
    background: #ffffff;
    border: 1px solid #ffffff;
    color: #1fa9ff;
    &:hover {
      box-shadow: none;
      border: none;
    }

    &.tx-ui-tx-button--danger {
      background: #ffffff !important;
      color: #e45649;
      border: 1px solid transparent !important;
      &:hover {
        border: 1px solid transparent !important;
      }
    }

    &.tx-ui-tx-button--disabled {
      border: 1px solid #ffffff !important;
      background: #ffffff !important;
    }
  }
`;

export default StyledTxButton;

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingRotatingIcon = styled(SvgIcon.IconLoader01)`
  animation: ${rotate} 1s linear infinite;
`;
