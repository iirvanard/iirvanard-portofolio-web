import React from 'react';

interface ButtonProps {
  text: string;
  icon?: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ text, icon, onClick, className }) => {
  return (
    <div className="group relative">
      <button
        onClick={onClick}
        className={className ? className : "mt-2 w-full inline-flex items-center justify-center text-sm font-semibold text-white bg-gray-800 px-6 py-3 rounded-full transition-all duration-300 transform hover:bg-gray-700 hover:scale-105 backdrop-blur-sm bg-opacity-50 hover:backdrop-blur-md"}
      >
        {icon && <span className="mr-2">{icon}</span>}
        <span className="block">{text}</span>
      </button>
    </div>
  );
};

export default Button;