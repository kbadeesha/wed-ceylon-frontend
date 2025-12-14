import React from 'react';
import { Button as MuiButton, type ButtonProps as MuiButtonProps } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import './Button.scss';

export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps extends Omit<MuiButtonProps, 'variant'> {
  variant?: ButtonVariant;
  to?: string; // For routing
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  to,
  children,
  className = '',
  ...props
}) => {
  const buttonClass = `button button--${variant} ${className}`.trim();

  const component = to ? RouterLink : 'button';
  const linkProps = to ? { to } : {};

  return (
    <MuiButton className={buttonClass} component={component} {...linkProps} {...props}>
      {children}
    </MuiButton>
  );
};

export default Button;
