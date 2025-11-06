
import React, { useState, useEffect } from 'react';
import { trainingData } from '../constants/trainingData';
import { openingOptions } from '../constants/openings';

interface ControlPanelProps {
    selectedYear: string;
    setSelectedYear: (year: string) => void;
    selectedStage: string;
    setSelectedStage: (stage: string) => void;
    userRating: string;
    setUserRating: (rating: string) => void;
    dailyTime: string;
    setDailyTime: (time: string) => void;
    setFocusedOpenings: (openings: string[]) => void;
    onGenerate: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
    selectedYear,
    setSelectedYear,
    selectedStage,
    setSelectedStage,
    userRating,
    setUserRating,
    dailyTime,
    setDailyTime,
    setFocusedOpenings,
    onGenerate,
}) => {
    const [stages, setStages] = useState<string[]>([]);
    const [whiteOpening, setWhiteOpening] = useState('');
    const [blackOpening1, setBlackOpening1] = useState('');
    const [blackOpening2, setBlackOpening2] = useState('');

    useEffect(() => {
        if (selectedYear && trainingData[selectedYear]) {
            setStages(Object.keys(trainingData[selectedYear]));
            setSelectedStage('');
        } else {
            setStages([]);
            setSelectedStage('');
        }
    }, [selectedYear, setSelectedStage]);

    useEffect(() => {
        const focused = [...new Set([whiteOpening, blackOpening1, blackOpening2].filter(Boolean))];
        setFocusedOpenings(focused);
    }, [whiteOpening, blackOpening1, blackOpening2, setFocusedOpenings]);
    
    const openingOptionsList = Object.entries(openingOptions).map(([key, value]) => (
        <option key={key} value={key}>{value}</option>
    ));

    return (
        <div className="bg-[#333] p-6 rounded-lg mb-8 shadow-lg shadow-black/30">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
                <div>
                    <label htmlFor="level-select" className="block mb-2 font-medium text-gray-200">1. Selecione o Ano:</label>
                    <select id="level-select" value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)} className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition">
                        <option value="">-- Escolha um ano --</option>
                        {Object.keys(trainingData).map(year => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="stage-select" className="block mb-2 font-medium text-gray-200">2. Selecione o Foco:</label>
                    <select id="stage-select" value={selectedStage} onChange={(e) => setSelectedStage(e.target.value)} disabled={!selectedYear} className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition disabled:opacity-50 disabled:cursor-not-allowed">
                        <option value="">{selectedYear ? '-- Escolha um foco --' : '-- Primeiro escolha um ano --'}</option>
                        {stages.map(stage => (
                            <option key={stage} value={stage}>{stage}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="rating-input" className="block mb-2 font-medium text-gray-200">3. Informe seu Rating:</label>
                    <input type="number" id="rating-input" value={userRating} onChange={(e) => setUserRating(e.target.value)} placeholder="Ex: 1500 (filtra biblio)" className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition" />
                </div>
            </div>

            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div>
                    <label htmlFor="opening-white-select" className="block mb-2 font-medium text-gray-200">4. Foco (Brancas):</label>
                    <select id="opening-white-select" value={whiteOpening} onChange={(e) => setWhiteOpening(e.target.value)} className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition">
                        <option value="">-- Todas Aberturas --</option>
                        {openingOptionsList}
                    </select>
                </div>
                <div>
                    <label htmlFor="opening-black1-select" className="block mb-2 font-medium text-gray-200">5. Foco (Pretas 1):</label>
                    <select id="opening-black1-select" value={blackOpening1} onChange={(e) => setBlackOpening1(e.target.value)} className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition">
                        <option value="">-- Todas Defesas --</option>
                        {openingOptionsList}
                    </select>
                </div>
                <div>
                    <label htmlFor="opening-black2-select" className="block mb-2 font-medium text-gray-200">6. Foco (Pretas 2):</label>
                    <select id="opening-black2-select" value={blackOpening2} onChange={(e) => setBlackOpening2(e.target.value)} className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition">
                        <option value="">-- Todas Defesas --</option>
                        {openingOptionsList}
                    </select>
                </div>
            </div>
            
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 items-end mt-6">
                 <div>
                    <label htmlFor="time-input" className="block mb-2 font-medium text-gray-200">7. Minutos por dia (opcional):</label>
                    <input type="number" id="time-input" value={dailyTime} onChange={(e) => setDailyTime(e.target.value)} placeholder="Ex: 120" className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition" />
                </div>
                <button onClick={onGenerate} className="w-full bg-purple-600 text-white font-semibold p-3 rounded-lg hover:bg-purple-700 transition transform hover:-translate-y-0.5 shadow-lg hover:shadow-purple-500/30 text-lg uppercase tracking-wider">8. Gerar Cronograma</button>
            </div>
        </div>
    );
};

export default ControlPanel;
