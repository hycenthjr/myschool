import * as React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number; // size in px
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}
interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {}

// Main Avatar wrapper
export const Avatar: React.FC<AvatarProps> = ({
  size = 40,
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      style={{ width: size, height: size }}
      className={`relative flex shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

// Avatar Image
export const AvatarImage: React.FC<AvatarImageProps> = ({
  className = "",
  ...props
}) => {
  return (
    <img className={`w-full h-full object-cover ${className}`} {...props} />
  );
};

// Avatar Fallback (e.g., initials)
export const AvatarFallback: React.FC<AvatarFallbackProps> = ({
  className = "",
  children,
  ...props
}) => {
  return (
    <div
      className={`bg-gray-300 flex w-full h-full items-center justify-center rounded-full text-sm font-medium ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
