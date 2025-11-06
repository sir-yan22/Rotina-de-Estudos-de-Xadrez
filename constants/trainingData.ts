
import type { TrainingData } from '../types';

export const trainingData: TrainingData = {
    "Ano 1": {
        "Estágio 1": {
            "objetivos": ["Dominar todas as regras do jogo", "Dominar a anotação", "Jogar as primeiras partidas"],
            "defaultTimePerDay": 60,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 60 }],
                "Terça": [{ "topic": "Geral", "time": 60 }],
                "Quarta": [{ "topic": "Geral", "time": 60 }],
                "Quinta": [{ "topic": "Geral", "time": 60 }],
                "Sexta": [{ "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 60 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 2": {
            "objetivos": ["Conhecer os mates elementares", "Aprender os fundamentos básicos"],
            "defaultTimePerDay": 60,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 30 }, { "topic": "Partidas Completas", "time": 30 }],
                "Terça": [{ "topic": "Geral", "time": 30 }, { "topic": "Tática", "time": 30 }],
                "Quarta": [{ "topic": "Geral", "time": 30 }, { "topic": "Finais", "time": 30 }],
                "Quinta": [{ "topic": "Geral", "time": 30 }, { "topic": "Partidas Completas", "time": 30 }],
                "Sexta": [{ "topic": "Tática", "time": 30 }, { "topic": "Partidas Online", "time": 30 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 60 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 3": {
            "objetivos": ["Aprender os temas táticos básicos", "Aprender os finais elementares", "Ganhar familiaridade com aberturas"],
            "defaultTimePerDay": 90,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 36 }, { "topic": "Partidas Completas", "time": 36 }, { "topic": "Tática", "time": 18 }],
                "Terça": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }],
                "Quarta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }],
                "Quinta": [{ "topic": "Geral", "time": 36 }, { "topic": "Partidas Completas", "time": 36 }, { "topic": "Tática", "time": 18 }],
                "Sexta": [{ "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }, { "topic": "Partidas Online", "time": 36 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 90 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 4": {
            "objetivos": ["Começar a fazer exercícios com regularidade", "Conhecer de memória os finais mais importantes", "Rating online começou a subir?"],
            "defaultTimePerDay": 90,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 36 }, { "topic": "Partidas Completas", "time": 36 }, { "topic": "Tática", "time": 18 }],
                "Terça": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }],
                "Quarta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }],
                "Quinta": [{ "topic": "Geral", "time": 36 }, { "topic": "Partidas Completas", "time": 36 }, { "topic": "Tática", "time": 18 }],
                "Sexta": [{ "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }, { "topic": "Partidas Online", "time": 36 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 90 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 5": {
            "objetivos": ["Xadrez já não é um mistério tão grande quanto no começo", "Terminar pelo menos 1 livro da seção 'Geral'", "Ter alguma familiaridade com os campeões mundiais"],
            "defaultTimePerDay": 90,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 36 }, { "topic": "Partidas Completas", "time": 36 }, { "topic": "Tática", "time": 18 }],
                "Terça": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }],
                "Quarta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }],
                "Quinta": [{ "topic": "Geral", "time": 36 }, { "topic": "Partidas Completas", "time": 36 }, { "topic": "Tática", "time": 18 }],
                "Sexta": [{ "topic": "Tática", "time": 18 }, { "topic": "Finais", "time": 36 }, { "topic": "Partidas Online", "time": 36 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 90 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        }
    },
    "Ano 2": {
        "Estágio 1 - Aberturas": {
            "objetivos": ["Definir um repertório básico", "Aprender a usar o Chessbase", "Criar suas bases de aberturas", "Escolher jogadores modelos para seguir", "Saber o básico e não ficar mais preocupado com Abs"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Aberturas", "time": 48 }],
                "Terça": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Aberturas", "time": 48 }],
                "Quarta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Aberturas", "time": 48 }],
                "Quinta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Aberturas", "time": 48 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 2 - Finais": {
            "objetivos": ["Conhecer os finais teóricos mais importantes", "Memorizar as posições mais conhecidas", "Poder dizer: Eu já sei o mínimo sobre finais!", "Consegue ganhar as posições teóricas do computador?", "Ênfase em finais de Rei e Peões e de Torres"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Finais", "time": 48 }],
                "Terça": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Finais", "time": 48 }],
                "Quarta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Finais", "time": 48 }],
                "Quinta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Finais", "time": 48 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 3 - Partidas Clássicas": {
            "objetivos": ["Ganhar familiaridade com os clássicos", "Ver pelo menos 10 partidas de Morphy a Alekhine"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Partidas Completas", "time": 48 }],
                "Terça": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Partidas Completas", "time": 48 }],
                "Quarta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Partidas Completas", "time": 48 }],
                "Quinta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Partidas Completas", "time": 48 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 4 - Estratégia": {
            "objetivos": ["Começar a fazer exercícios com regularidade", "Conhecer de memória os finais mais importantes", "Rating online começou a subir?", "Ter alguma familiaridade com os campeões mundiais"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 48 }],
                "Terça": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 48 }],
                "Quarta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 48 }],
                "Quinta": [{ "topic": "Geral", "time": 36 }, { "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 48 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 5 - Manutenção": {
            "objetivos": ["Manutenção e aprimoramento de todos os anteriores"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Geral", "time": 20 }, { "topic": "Tática", "time": 20 }, { "topic": "Partidas Completas", "time": 40 }, { "topic": "Finais", "time": 40 }],
                "Terça": [{ "topic": "Geral", "time": 20 }, { "topic": "Tática", "time": 20 }, { "topic": "Aberturas", "time": 40 }, { "topic": "Estratégia", "time": 40 }],
                "Quarta": [{ "topic": "Geral", "time": 20 }, { "topic": "Tática", "time": 20 }, { "topic": "Partidas Completas", "time": 40 }, { "topic": "Finais", "time": 40 }],
                "Quinta": [{ "topic": "Geral", "time": 20 }, { "topic": "Tática", "time": 20 }, { "topic": "Aberturas", "time": 40 }, { "topic": "Estratégia", "time": 40 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        }
    },
    "Ano 3": {
        "Estágio 1 - Aberturas": {
            "objetivos": ["Definir um repertório de longo prazo", "Domínio do Chessbase", "Criar suas bases de aberturas", "Escolher jogadores modelos para seguir", "Saber usar engines nas suas análises de Abs"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 36 }, { "topic": "Aberturas", "time": 84 }],
                "Terça": [{ "topic": "Tática", "time": 36 }, { "topic": "Aberturas", "time": 48 }, { "topic": "Finais", "time": 36 }],
                "Quarta": [{ "topic": "Tática", "time": 36 }, { "topic": "Aberturas", "time": 84 }],
                "Quinta": [{ "topic": "Tática", "time": 36 }, { "topic": "Aberturas", "time": 48 }, { "topic": "Estratégia", "time": 36 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 2 - Finais": {
            "objetivos": ["Conhecer os finais teóricos mais importantes", "Memorizar as posições mais conhecidas", "Poder dizer: Eu já sei bastante sobre finais!", "Consegue ganhar as posições teóricas do computador?", "Começar a aprender sobre técnica de finais"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 36 }, { "topic": "Finais", "time": 84 }],
                "Terça": [{ "topic": "Tática", "time": 36 }, { "topic": "Finais", "time": 48 }, { "topic": "Aberturas", "time": 36 }],
                "Quarta": [{ "topic": "Tática", "time": 36 }, { "topic": "Finais", "time": 84 }],
                "Quinta": [{ "topic": "Tática", "time": 36 }, { "topic": "Finais", "time": 48 }, { "topic": "Estratégia", "time": 36 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 3 - Estratégia/Clássicos": {
            "objetivos": ["Ganhar familiaridade com os clássicos", "Ver pelo menos 10 partidas de Morphy a Kasparov", "Saber avaliar uma posição", "Saber fazer um plano"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 84 }],
                "Terça": [{ "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 48 }, { "topic": "Aberturas", "time": 36 }],
                "Quarta": [{ "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 84 }],
                "Quinta": [{ "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 48 }, { "topic": "Finais", "time": 36 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 4 - Cálculo": {
            "objetivos": ["Aprender a calcular de verdade", "Familiaridade com os temas de cálculo", "Já conseguiu resolver algum exercício do Dvora?"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 36 }, { "topic": "Cálculo", "time": 84 }],
                "Terça": [{ "topic": "Tática", "time": 36 }, { "topic": "Cálculo", "time": 48 }, { "topic": "Aberturas", "time": 36 }],
                "Quarta": [{ "topic": "Tática", "time": 36 }, { "topic": "Cálculo", "time": 84 }],
                "Quinta": [{ "topic": "Tática", "time": 36 }, { "topic": "Cálculo", "time": 48 }, { "topic": "Finais", "time": 36 }],
                "Sexta": [{ "topic": "Tática", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 5 - Manutenção": {
            "objetivos": ["Manutenção e aprimoramento de todos os anteriores"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 30 }, { "topic": "Geral", "time": 54 }, { "topic": "Aberturas", "time": 36 }],
                "Terça": [{ "topic": "Tática", "time": 30 }, { "topic": "Estratégia", "time": 54 }, { "topic": "Finais", "time": 36 }],
                "Quarta": [{ "topic": "Tática", "time": 30 }, { "topic": "Geral", "time": 54 }, { "topic": "Aberturas", "time": 36 }],
                "Quinta": [{ "topic": "Tática", "time": 30 }, { "topic": "Estratégia", "time": 54 }, { "topic": "Finais", "time": 36 }],
                "Sexta": [{ "topic": "Aberturas", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        }
    },
    "Ano 4": {
        "Estágio 1 - Aberturas": {
            "objetivos": ["Treinamento com ênfase em Aberturas"],
            "defaultTimePerDay": 90,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 27 }, { "topic": "Aberturas", "time": 63 }],
                "Terça": [{ "topic": "Tática", "time": 27 }, { "topic": "Aberturas", "time": 63 }],
                "Quarta": [{ "topic": "Tática", "time": 27 }, { "topic": "Aberturas", "time": 63 }],
                "Quinta": [{ "topic": "Tática", "time": 27 }, { "topic": "Aberturas", "time": 63 }],
                "Sexta": [{ "topic": "Aberturas", "time": 45 }, { "topic": "Partidas Online", "time": 45 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 90 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 2 - Finais": {
            "objetivos": ["Treinamento com ênfase em Finais"],
            "defaultTimePerDay": 90,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 27 }, { "topic": "Finais", "time": 63 }],
                "Terça": [{ "topic": "Tática", "time": 27 }, { "topic": "Finais", "time": 63 }],
                "Quarta": [{ "topic": "Tática", "time": 27 }, { "topic": "Finais", "time": 63 }],
                "Quinta": [{ "topic": "Tática", "time": 27 }, { "topic": "Finais", "time": 63 }],
                "Sexta": [{ "topic": "Finais", "time": 45 }, { "topic": "Partidas Online", "time": 45 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 90 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 3 - Estratégia": {
            "objetivos": ["Treinamento com ênfase em Estratégia"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 84 }],
                "Terça": [{ "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 84 }],
                "Quarta": [{ "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 84 }],
                "Quinta": [{ "topic": "Tática", "time": 36 }, { "topic": "Estratégia", "time": 84 }],
                "Sexta": [{ "topic": "Estratégia", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 4 - Cálculo": {
            "objetivos": ["Treinamento com ênfase em Cálculo"],
            "defaultTimePerDay": 120,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 36 }, { "topic": "Cálculo", "time": 84 }],
                "Terça": [{ "topic": "Tática", "time": 36 }, { "topic": "Cálculo", "time": 84 }],
                "Quarta": [{ "topic": "Tática", "time": 36 }, { "topic": "Cálculo", "time": 84 }],
                "Quinta": [{ "topic": "Tática", "time": 36 }, { "topic": "Cálculo", "time": 84 }],
                "Sexta": [{ "topic": "Cálculo", "time": 60 }, { "topic": "Partidas Online", "time": 60 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 120 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        },
        "Estágio 5 - Manutenção": {
            "objetivos": ["Treinamento de Manutenção"],
            "defaultTimePerDay": 60,
            "schedule": {
                "Segunda": [{ "topic": "Tática", "time": 15 }, { "topic": "Geral", "time": 27 }, { "topic": "Aberturas", "time": 18 }],
                "Terça": [{ "topic": "Tática", "time": 15 }, { "topic": "Estratégia", "time": 27 }, { "topic": "Finais", "time": 18 }],
                "Quarta": [{ "topic": "Tática", "time": 15 }, { "topic": "Geral", "time": 27 }, { "topic": "Aberturas", "time": 18 }],
                "Quinta": [{ "topic": "Tática", "time": 15 }, { "topic": "Estratégia", "time": 27 }, { "topic": "Finais", "time": 18 }],
                "Sexta": [{ "topic": "Aberturas", "time": 30 }, { "topic": "Partidas Online", "time": 30 }],
                "Sábado": [{ "topic": "Partidas Online", "time": 60 }],
                "Domingo": [{ "topic": "Revisão/Descanso", "time": 0 }]
            }
        }
    }
};
