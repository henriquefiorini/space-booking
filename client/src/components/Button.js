import styled from 'styled-components';

const Button = styled.button`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  min-width: 36px;
  height: 36px;
  padding-right: 16px;
  padding-left: 16px;
  border-radius: 4px;
  background: #592DEA;
  color: #FFF;

  font-size: 14px;
  font-weight: 600;
  line-height: 1;

  text-decoration: none;
  white-space: nowrap;
  user-select: none;
  overflow: hidden;
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    background-color: #7E5BEF;
    outline: none;
    text-decoration: none;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(89, 45, 234, .25);
  }

  &[disabled],
  &:disabled,
  &.disabled {
    opacity: .8;
    box-shadow: none;
    pointer-events: none;
    cursor: default;
  }

  /*
  .button-content {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 1px;
    min-height: 1px;
  }


  .button.block {
    display: flex;
    width: 100%;
  }

  .button.large {
    min-width: 40px;
    height: 40px;
  }

  .button.small {
    min-width: 24px;
    height: 24px;
    font-size: $t-fs-small;
  }


  .button.iconOnly {
    padding-right: 8px;
    padding-left: 8px;

    &.large {
      padding-right: 12px;
      padding-left: 12px;
    }

    .icon:first-child {
      margin-left: 0;
    }

    .icon:last-child {
      margin-right: -4px;
    }

    .icon:only-child {
      margin-right: 0;
    }
  }

  .button.primary {
    color: $c-white;
    background-color: $c-blue-base;

    &:hover,
    &:focus,
    &:active {
      color: $c-white;
      background-color: $c-blue-dark;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba($c-blue-light, .4);
    }
  }

  .button.negative {
    color: $c-white;
    background-color: $c-red-base;

    &:hover,
    &:focus,
    &:active {
      color: $c-white;
      background-color: $c-red-dark;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba($c-red-light, .4);
    }
  }

  .button.positive {
    color: $c-white;
    background-color: $c-green-base;

    &:hover,
    &:focus,
    &:active {
      color: $c-white;
      background-color: $c-green-dark;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba($c-green-light, .4);
    }
  }

  .button.white {
    color: $c-body;
    background-color: $c-white;

    &:hover,
    &:focus,
    &:active {
      color: $c-body;
      background-color: $c-snow-light;
    }

    &:focus {
      box-shadow: 0 0 0 3px rgba($c-snow-light, .4);
    }
  }
  */
`;

export default Button;
