
import React, { useRef } from 'react';
import type { Plan } from '../types';
import ObjectivesCard from './ObjectivesCard';
import ScheduleCard from './ScheduleCard';
import BibliographyCard from './BibliographyCard';

interface OutputDisplayProps {
    plan: Plan;
    completedTitles: string[];
    onProgressChange: (title: string, isCompleted: boolean) => void;
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ plan, completedTitles, onProgressChange }) => {
    const bibliographyRef = useRef<HTMLDivElement>(null);
    
    const handleScrollToBibliography = () => {
        bibliographyRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="space-y-8">
            <ObjectivesCard objectives={plan.objectives} />
            <ScheduleCard 
                schedule={plan.schedule} 
                dailyTime={plan.dailyTime} 
                timeFactor={plan.timeFactor}
                onScrollToBibliography={handleScrollToBibliography}
            />
            <div ref={bibliographyRef}>
                <BibliographyCard
                    bibliography={plan.bibliography}
                    userRating={plan.userRating}
                    focusedOpenings={plan.focusedOpenings}
                    selectedYear={plan.selectedYear}
                    completedTitles={completedTitles}
                    onProgressChange={onProgressChange}
                />
            </div>
        </div>
    );
};

export default OutputDisplay;
