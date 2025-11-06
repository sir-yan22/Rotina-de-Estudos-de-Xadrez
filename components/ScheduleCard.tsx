
import React from 'react';
import type { Schedule } from '../types';
import { topicToBibKey } from '../constants/topicToBibKey';

interface ScheduleCardProps {
    schedule: Schedule;
    dailyTime: number;
    timeFactor: number;
    onScrollToBibliography: () => void;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ schedule, dailyTime, timeFactor, onScrollToBibliography }) => {
    const days = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"];
    
    return (
        <div className="output-section bg-[#333] p-6 rounded-lg shadow-lg shadow-black/30">
            <h2 className="text-2xl font-bold text-purple-300 border-b-2 border-gray-600 pb-2 mb-4">🗓️ Cronograma Semanal Sugerido</h2>
            <p className="text-gray-300 mb-4">Tempo total de treino: <strong className="text-white">{dailyTime}</strong> minutos por dia.</p>
            <div className="overflow-x-auto rounded-lg shadow-md">
                <table className="w-full border-collapse table-layout-fixed">
                    <thead className="bg-[#444]">
                        <tr>
                            <th className="w-1/4 border border-[#555] p-3 text-left text-purple-300 font-semibold">Dia da Semana</th>
                            <th className="border border-[#555] p-3 text-left text-purple-300 font-semibold">Atividades Planejadas</th>
                        </tr>
                    </thead>
                    <tbody>
                        {days.map(day => {
                            const daySchedule = schedule[day] || [{ topic: "Descanso", time: 0 }];
                            return (
                                <tr key={day} className="bg-[#3b3b3b]">
                                    <td className="border border-[#555] p-3 font-semibold align-top">{day}</td>
                                    <td className="border border-[#555] p-3 align-top space-y-2">
                                        {daySchedule[0].topic === "Descanso" || daySchedule[0].time === 0 ? (
                                            <span>Descanso / Revisão Livre</span>
                                        ) : (
                                            daySchedule.map((activity, index) => {
                                                const calculatedTime = Math.round(activity.time * timeFactor);
                                                if (calculatedTime === 0) return null;
                                                const bibKey = topicToBibKey[activity.topic];
                                                return (
                                                    <div key={index} className="flex items-center justify-between flex-wrap">
                                                        <span>{activity.topic} ({calculatedTime} min)</span>
                                                        {bibKey && (
                                                            <button onClick={onScrollToBibliography} className="text-sm px-2 py-1 bg-purple-800 text-white rounded hover:bg-purple-700 transition ml-2">
                                                                Ver Material 📚
                                                            </button>
                                                        )}
                                                    </div>
                                                )
                                            })
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScheduleCard;
