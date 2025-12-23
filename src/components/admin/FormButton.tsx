// components/FormButton.tsx


type FormButtonProps = {
  title: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export default function FormButton({
  title,
  type = "button",
  onClick,
  loading = false,
  disabled = false,
}: FormButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full bg-blue-900 text-white p-2 rounded-md transition duration-150 cursor-pointer ${
        loading || disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-blue-800"
      }`}
    >
      {loading ? "Processing..." : title}
    </button>
  );
}
