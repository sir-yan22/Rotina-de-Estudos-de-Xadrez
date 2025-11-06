
import React from 'react';

interface ErrorMessageProps {
    message: string;
    onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
    return (
        <div className="bg-red-800 border border-red-600 text-white px-4 py-3 rounded-lg relative mb-6 shadow-lg" role="alert">
            <strong className="font-bold">Erro!</strong>
            <span className="block sm:inline ml-2">{message}</span>
            <button onClick={onClose} className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <svg className="fill-current h-6 w-6 text-white" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <title>Fechar</title>
                    <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 2.651a1.2 1.2 0 1 1-1.697-1.697L8.18 10 5.53 7.349a1.2 1.2 0 1 1 1.697-1.697L10 8.18l2.651-2.651a1.2 1.2 0 1 1 1.697 1.697L11.819 10l2.651 2.651a1.2 1.2 0 0 1 0 1.698z" />
                </svg>
            </button>
        </div>
    );
};

export default ErrorMessage;
