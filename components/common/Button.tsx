const Button: React.FC<{
  label: string;
}> = ({ label }) => {
  return (
    <button className="bg-blue-500 text-white py-2 px-4 rounded">
      {label}
    </button>
  );
};

export default Button;
// This code defines a simple Button component in React with TypeScript.
// The button has a blue background, white text, and rounded corners.