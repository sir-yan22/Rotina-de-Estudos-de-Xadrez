
import React from 'react';

interface ObjectivesCardProps {
    objectives: string[];
}

const ObjectivesCard: React.FC<ObjectivesCardProps> = ({ objectives }) => {
    return (
        <div className="output-section bg-[#333] p-6 rounded-lg shadow-lg shadow-black/30">
            <h2 className="text-2xl font-bold text-purple-300 border-b-2 border-gray-600 pb-2 mb-4">🎯 Objetivos do Estágio</h2>
            <ul className="space-y-3">
                {objectives.length > 0 ? objectives.map((obj, index) => (
                    <li key={index} className="flex items-start">
                        <span className="text-purple-400 font-bold mr-3 mt-1">✓</span>
                        <span className="text-gray-200">{obj}</span>
                    </li>
                )) : <li>Nenhum objetivo específico listado para este estágio.</li>}
            </ul>
        </div>
    );
};

export default ObjectivesCard;
