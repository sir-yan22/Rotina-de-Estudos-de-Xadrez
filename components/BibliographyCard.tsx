
import React, { useState, useMemo } from 'react';
import type { Bibliography, BibliographyItem } from '../types';

interface BibliographyCardProps {
    bibliography: Bibliography;
    userRating: number;
    focusedOpenings: string[];
    selectedYear: string;
    completedTitles: string[];
    onProgressChange: (title: string, isCompleted: boolean) => void;
}

const ITEMS_PER_PAGE = 5;

const BibliographyCard: React.FC<BibliographyCardProps> = ({
    bibliography,
    userRating,
    focusedOpenings,
    selectedYear,
    completedTitles,
    onProgressChange
}) => {
    const [activeTab, setActiveTab] = useState('');

    const processedBibliography = useMemo(() => {
        const result: { [key: string]: BibliographyItem[] } = {};
        let firstAvailableTab = '';
        const maxDifficulty = parseInt((selectedYear || 'Ano 1').replace('Ano ', ''), 10);

        for (const key in bibliography) {
            const materials = bibliography[key] || [];

            let filtered = materials.filter(material => {
                const difficulty = material.difficulty || 1;
                return difficulty <= maxDifficulty;
            });
            
            if (userRating > 0) {
                filtered = filtered.filter(m => m.min <= userRating && userRating <= m.max);
            }

            if ((key === "Aberturas" || key === "Cursos Online") && focusedOpenings.length > 0) {
                filtered = filtered.filter(material => {
                    const tags = material.tags || [];
                    if (tags.length === 0) return key === "Cursos Online";
                    if (tags.includes('repertorio_completo')) return true;
                    return tags.some(tag => focusedOpenings.includes(tag));
                });
            }
            
            filtered.sort((a, b) => (b.difficulty || 1) - (a.difficulty || 1));

            const completed = filtered.filter(m => completedTitles.includes(m.title));
            const uncompleted = filtered.filter(m => !completedTitles.includes(m.title));
            
            const displayList = [...completed, ...uncompleted.slice(0, ITEMS_PER_PAGE)];
            
            if (displayList.length > 0) {
                if (!firstAvailableTab) {
                    firstAvailableTab = key;
                }
                result[key] = displayList;
            }
        }
        
        if (activeTab === '' || !result[activeTab]) {
            setActiveTab(firstAvailableTab);
        }

        return result;
    }, [bibliography, userRating, focusedOpenings, selectedYear, completedTitles, activeTab]);

    const tabs = Object.keys(processedBibliography);

    if (tabs.length === 0) {
        return (
             <div className="output-section bg-[#333] p-6 rounded-lg shadow-lg shadow-black/30">
                <h2 className="text-2xl font-bold text-purple-300 border-b-2 border-gray-600 pb-2 mb-4">📚 Bibliografia Recomendada</h2>
                <div className="p-4 bg-[#444] rounded-lg text-center text-gray-400 italic">
                    Nenhum material de bibliografia encontrado para este estágio ou para os filtros informados.
                </div>
            </div>
        );
    }


    return (
        <div className="output-section bg-[#333] p-6 rounded-lg shadow-lg shadow-black/30">
            <h2 className="text-2xl font-bold text-purple-300 border-b-2 border-gray-600 pb-2 mb-4">📚 Bibliografia Recomendada (Progresso)</h2>
            <div className="flex flex-wrap border-b-2 border-gray-600 mb-6">
                {tabs.map(tabKey => (
                    <button
                        key={tabKey}
                        onClick={() => setActiveTab(tabKey)}
                        className={`py-2 px-4 text-sm md:text-base font-medium border-b-4 transition ${activeTab === tabKey ? 'text-white border-purple-500' : 'text-gray-400 border-transparent hover:border-gray-500 hover:text-gray-200'}`}
                    >
                        {tabKey}
                    </button>
                ))}
            </div>
            <div>
                {tabs.map(tabKey => (
                    <div key={tabKey} className={`${activeTab === tabKey ? 'block' : 'hidden'}`}>
                        <ul className="space-y-3">
                            {processedBibliography[tabKey].map(material => {
                                const isChecked = completedTitles.includes(material.title);
                                const uniqueId = `bib-${material.title.replace(/[^a-zA-Z0-9]/g, '-')}`;
                                return (
                                    <li key={uniqueId} className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id={uniqueId}
                                            checked={isChecked}
                                            onChange={(e) => onProgressChange(material.title, e.target.checked)}
                                            className="w-5 h-5 rounded bg-gray-700 border-gray-600 text-purple-600 focus:ring-purple-500 mr-4 flex-shrink-0"
                                        />
                                        <label htmlFor={uniqueId} className={`cursor-pointer ${isChecked ? 'line-through text-gray-500' : 'text-gray-200'}`}>
                                            {material.title}
                                        </label>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BibliographyCard;
