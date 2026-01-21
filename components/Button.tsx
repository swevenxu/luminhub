'use client';
import { motion } from 'framer-motion';
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'glass' | 'glass-blue' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';
interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
}
interface LinkButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  href: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  style?: React.CSSProperties;
}
const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-xs',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};
const LoadingSpinner = () => (
  <svg
    className="animate-spin h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);
const getLiquidGlassStyles = (variant: ButtonVariant): React.CSSProperties => {
  const baseGlass = {
    backdropFilter: 'blur(40px) saturate(180%)',
    WebkitBackdropFilter: 'blur(40px) saturate(180%)',
  };
  switch (variant) {
    case 'primary':
      return {
        ...baseGlass,
        background: 'linear-gradient(135deg, rgba(138, 43, 196, 0.4), rgba(168, 85, 247, 0.3))',
        border: '1px solid rgba(168, 85, 247, 0.4)',
        boxShadow: '0 8px 32px rgba(138, 43, 196, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
      };
    case 'secondary':
      return {
        ...baseGlass,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.04))',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
      };
    case 'ghost':
      return {
        background: 'transparent',
        border: 'none',
        boxShadow: 'none',
      };
    case 'glass':
      return {
        ...baseGlass,
        background: 'linear-gradient(135deg, rgba(138, 43, 196, 0.2), rgba(168, 85, 247, 0.15))',
        border: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
      };
    case 'glass-blue':
      return {
        ...baseGlass,
        background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.2))',
        border: '1px solid rgba(96, 165, 250, 0.3)',
        boxShadow: '0 8px 32px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.15), inset 0 -1px 0 rgba(0, 0, 0, 0.1)',
      };
    case 'outline':
      return {
        ...baseGlass,
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.01))',
        border: '2px solid rgba(168, 85, 247, 0.5)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)',
      };
    default:
      return baseGlass;
  }
};
const getTextColorClass = (variant: ButtonVariant): string => {
  switch (variant) {
    case 'ghost':
      return 'text-purple-400 hover:text-purple-300';
    case 'outline':
      return 'text-purple-400 hover:text-purple-300';
    default:
      return 'text-white';
  }
};
function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  const baseStyles = `
    relative
    inline-flex items-center justify-center gap-2
    font-bold uppercase
    rounded-lg
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:ring-offset-2 focus:ring-offset-black
    disabled:opacity-50 disabled:cursor-not-allowed
    overflow-hidden
    group
  `;
  return `
    ${baseStyles}
    ${sizeStyles[size]}
    ${getTextColorClass(variant)}
    ${className || ''}
  `.trim().replace(/\s+/g, ' ');
}
function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  onClick,
  type = 'button',
  style,
}: ButtonProps) {
  const combinedClassName = getButtonClasses(variant, size, className);
  const liquidGlassStyles = getLiquidGlassStyles(variant);
  return (
    <motion.button
      type={type}
      className={combinedClassName}
      disabled={isLoading || disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      style={{ ...liquidGlassStyles, ...style }}
    >
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          {leftIcon && <span className="transition-transform group-hover:-translate-x-0.5">{leftIcon}</span>}
          <span className="relative z-10">{children}</span>
          {rightIcon && <span className="transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
}
function LinkButton({
  variant = 'primary',
  size = 'md',
  leftIcon,
  rightIcon,
  children,
  href,
  target,
  rel,
  className,
  onClick,
  style,
}: LinkButtonProps) {
  const combinedClassName = getButtonClasses(variant, size, className);
  const liquidGlassStyles = getLiquidGlassStyles(variant);
  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      className={combinedClassName}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      style={{ ...liquidGlassStyles, ...style }}
    >
      {leftIcon && <span className="transition-transform group-hover:-translate-x-0.5">{leftIcon}</span>}
      <span className="relative z-10">{children}</span>
      {rightIcon && <span className="transition-transform group-hover:translate-x-0.5">{rightIcon}</span>}
    </motion.a>
  );
}
export default Button;
export { LinkButton, LoadingSpinner };
export type { ButtonProps, LinkButtonProps, ButtonVariant, ButtonSize };
