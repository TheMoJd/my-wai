type BadgeVariant = "light" | "solid";
type BadgeSize = "sm" | "md";
type BadgeColor =
  | "primary"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "light"
  | "dark";

interface BadgeProps {
  variant?: BadgeVariant; // Light or solid variant
  size?: BadgeSize; // Badge size
  color?: BadgeColor; // Badge color
  startIcon?: React.ReactNode; // Icon at the start
  endIcon?: React.ReactNode; // Icon at the end
  children: React.ReactNode; // Badge content
  isCircular?: boolean; // New prop for circular shape
}

const Badge: React.FC<BadgeProps> = ({
  variant = "light",
  color = "primary",
  size = "md",
  startIcon,
  endIcon,
  children,
  isCircular = false, // Default to false
}) => {
  const commonStyles =
    "inline-flex items-center justify-center font-medium rounded-full";

  // Define size styles
  const sizeStyles = {
    sm: "text-theme-xs", // Changed from text-theme-xs to text-xs
    md: "text-sm", // Default padding and font size
  };

  // Define shape-specific styles
  let shapeAndPaddingStyles = "px-2.5 py-0.5 gap-1"; // Default padding and gap

  if (isCircular) {
    if (size === "sm") {
      shapeAndPaddingStyles = "w-6 h-6"; // Fixed width and height for small circular badge
    } else if (size === "md") {
      shapeAndPaddingStyles = "w-8 h-8"; // Fixed width and height for medium circular badge
    }
    // Icons are typically not used in small circular number badges
  }

  // Define color styles for variants
  const variants = {
    light: {
      primary:
        "bg-mywai-light/50 text-mywai-dark dark:bg-mywai-dark/15 dark:text-mywai-dark", // Adjusted to use mywai colors
      success:
        "bg-success-50 text-success-600 dark:bg-success-500/15 dark:text-success-500",
      error:
        "bg-error-50 text-error-600 dark:bg-error-500/15 dark:text-error-500",
      warning:
        "bg-warning-50 text-warning-600 dark:bg-warning-500/15 dark:text-orange-400",
      info: "bg-blue-light-50 text-blue-light-500 dark:bg-blue-light-500/15 dark:text-blue-light-500",
      light: "bg-gray-100 text-gray-700 dark:bg-white/5 dark:text-white/80",
      dark: "bg-gray-500 text-white dark:bg-white/5 dark:text-white",
    },
    solid: {
      primary: "bg-mywai-light text-mywai-dark dark:text-mywai-dark", // Changed bg-brand-500 to bg-mywai-light
      success: "bg-success-500 text-white dark:text-white",
      error: "bg-error-500 text-white dark:text-white",
      warning: "bg-warning-500 text-white dark:text-white",
      info: "bg-blue-light-500 text-white dark:text-white",
      light: "bg-gray-400 dark:bg-white/5 text-white dark:text-white/80",
      dark: "bg-gray-700 text-white dark:text-white",
    },
  };

  // Get styles based on size and color variant
  const sizeClass = sizeStyles[size];
  const colorClasses = variants[variant][color];

  return (
    <span className={`${commonStyles} ${shapeAndPaddingStyles} ${sizeClass} ${colorClasses}`}>
      {startIcon && !isCircular && <span className="mr-1">{startIcon}</span>}
      {children}
      {endIcon && !isCircular && <span className="ml-1">{endIcon}</span>}
    </span>
  );
};

export default Badge;
