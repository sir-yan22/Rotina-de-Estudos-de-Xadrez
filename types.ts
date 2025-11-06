

export interface BibliographyItem {
    title: string;
    min: number;
    max: number;
    difficulty: number;
    tags?: string[];
    synopsis?: string;
}

export type Bibliography = {
    [key: string]: BibliographyItem[];
};

export interface ScheduleActivity {
    topic: string;
    time: number;
}

export type Schedule = {
    [day: string]: ScheduleActivity[];
};

export interface Stage {
    objetivos: string[];
    defaultTimePerDay: number;
    schedule: Schedule;
}

export type TrainingYear = {
    [stageName: string]: Stage;
};

export type TrainingData = {
    [year: string]: TrainingYear;
};

export interface Plan {
    objectives: string[];
    schedule: Schedule;
    dailyTime: number;
    timeFactor: number;
    bibliography: Bibliography;
    userRating: number;
    focusedOpenings: string[];
    selectedYear: string;
}