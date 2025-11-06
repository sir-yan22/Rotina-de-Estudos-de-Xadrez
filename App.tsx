import React, { useState, useEffect, useCallback } from 'react';
import ControlPanel from './components/ControlPanel';
import OutputDisplay from './components/OutputDisplay';
import ErrorMessage from './components/ErrorMessage';
import Instructions from './components/Instructions';
import CatalogExplorer from './components/CatalogExplorer'; // Import the new component
import { trainingData } from './constants/trainingData';
import { masterBibliography } from './constants/bibliography';
import type { Stage, Plan } from './types';

const App: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<string>('');
    const [selectedStage, setSelectedStage] = useState<string>('');
    const [userRating, setUserRating] = useState<string>('');
    const [dailyTime, setDailyTime] = useState<string>('');
    const [focusedOpenings, setFocusedOpenings] = useState<string[]>([]);
    
    const [generatedPlan, setGeneratedPlan] = useState<Plan | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState('planner'); // 'planner', 'instructions', or 'catalog'

    const [completedTitles, setCompletedTitles] = useState<string[]>(() => {
        try {
            const savedProgress = localStorage.getItem('chessTrainingProgress');
            return savedProgress ? JSON.parse(savedProgress) : [];
        } catch (error) {
            console.error("Error reading from localStorage", error);
            return [];
        }
    });

    useEffect(() => {
        try {
            localStorage.setItem('chessTrainingProgress', JSON.stringify(completedTitles));
        } catch (error) {
            console.error("Error writing to localStorage", error);
        }
    }, [completedTitles]);

    const handleGeneratePlan = useCallback(() => {
        setError(null);
        if (!selectedYear || !selectedStage) {
            setError('Por favor, selecione um Ano e um Foco para continuar.');
            setGeneratedPlan(null);
            return;
        }

        const stageData: Stage = trainingData[selectedYear][selectedStage];
        const rating = userRating ? parseInt(userRating, 10) : 0;
        const time = dailyTime ? parseInt(dailyTime, 10) : stageData.defaultTimePerDay;
        const factor = time / stageData.defaultTimePerDay;

        setGeneratedPlan({
            objectives: stageData.objetivos,
            schedule: stageData.schedule,
            dailyTime: time,
            timeFactor: factor,
            bibliography: masterBibliography,
            userRating: rating,
            focusedOpenings: focusedOpenings,
            selectedYear: selectedYear
        });
    }, [selectedYear, selectedStage, userRating, dailyTime, focusedOpenings]);

    const handleProgressChange = useCallback((title: string, isCompleted: boolean) => {
        setCompletedTitles(prev => {
            const newTitles = new Set(prev);
            if (isCompleted) {
                newTitles.add(title);
            } else {
                newTitles.delete(title);
            }
            return Array.from(newTitles);
        });
    }, []);

    const renderTabButton = (tabName: string, label: string) => (
         <button
            onClick={() => setActiveTab(tabName)}
            className={`py-2 px-6 font-semibold rounded-t-lg transition-colors duration-200 focus:outline-none ${
                activeTab === tabName
                    ? 'bg-[#333] text-white'
                    : 'text-gray-400 hover:bg-[#3a3a3a] hover:text-gray-200'
            }`}
        >
            {label}
        </button>
    );

    return (
        <div className="container max-w-4xl mx-auto my-8 p-4 md:p-6 bg-[#262626] rounded-xl shadow-2xl shadow-black/50">
            <header className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-white">Método de Treinamento de Xadrez</h1>
                <p className="text-md md:text-lg text-gray-300 mt-2">Encontre seu plano de estudo anual.</p>
            </header>

            <div className="flex border-b border-gray-700 mb-6">
                {renderTabButton('planner', 'Planejador')}
                {renderTabButton('catalog', 'Catálogo')}
                {renderTabButton('instructions', 'Instruções')}
            </div>

            {activeTab === 'planner' && (
                <div className="animate-fade-in">
                    <ControlPanel
                        selectedYear={selectedYear}
                        setSelectedYear={setSelectedYear}
                        selectedStage={selectedStage}
                        setSelectedStage={setSelectedStage}
                        userRating={userRating}
                        setUserRating={setUserRating}
                        dailyTime={dailyTime}
                        setDailyTime={setDailyTime}
                        setFocusedOpenings={setFocusedOpenings}
                        onGenerate={handleGeneratePlan}
                    />
                    
                    {error && <ErrorMessage message={error} onClose={() => setError(null)} />}
                    
                    {generatedPlan && (
                        <OutputDisplay 
                            plan={generatedPlan} 
                            completedTitles={completedTitles}
                            onProgressChange={handleProgressChange}
                        />
                    )}
                </div>
            )}
            
            {activeTab === 'catalog' && (
                <CatalogExplorer />
            )}

            {activeTab === 'instructions' && (
                <Instructions />
            )}
        </div>
    );
};

export default App;