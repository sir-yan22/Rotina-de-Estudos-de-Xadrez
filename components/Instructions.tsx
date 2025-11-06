import React from 'react';

const Instructions: React.FC = () => {
    return (
        <div className="bg-[#333] p-6 rounded-lg shadow-lg shadow-black/30 text-gray-200 space-y-6 animate-fade-in">
            <h2 className="text-2xl font-bold text-purple-300 border-b-2 border-gray-600 pb-2 mb-4">
                📖 Como Usar o Gerador de Treino
            </h2>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-400">1. O Básico</h3>
                <p>
                    Esta ferramenta cria um plano de treino de xadrez estruturado com base no seu nível e foco. O método é dividido em 4 anos, cada um com diferentes estágios de desenvolvimento.
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Selecione o Ano:</strong> Comece escolhendo o ano que melhor corresponde ao seu nível. Cada "ano" é um ciclo de treinamento completo; avance para o próximo quando sentir que dominou os conceitos do atual.</li>
                    <li><strong>Selecione o Foco:</strong> Dentro de cada ano, há estágios focados em diferentes áreas do xadrez (aberturas, finais, estratégia, etc.). Escolha o que você deseja priorizar agora.</li>
                </ul>
            </div>

            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-400">2. Personalização (Opcional)</h3>
                <p>
                    Você pode refinar seu plano com as seguintes opções:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>Rating:</strong> Informe seu rating para filtrar a bibliografia. O ideal é usar seu rating do <strong>Chess King Learn</strong>, pois muitos dos cursos são dessa plataforma. Ratings de outras plataformas (FIDE, Lichess, Chess.com) NÃO servem como uma boa aproximação. Se deixado em branco, todos os materiais para o ano selecionado serão considerados.</li>
                    <li><strong>Foco em Aberturas:</strong> Se você tem um repertório específico (ex: Defesa Siciliana), selecioná-lo aqui irá priorizar livros e cursos sobre essa abertura.</li>
                    <li><strong>Minutos por dia:</strong> O plano sugere um tempo de estudo padrão. Você pode ajustar esse valor para que o cronograma se adapte à sua disponibilidade.</li>
                </ul>
            </div>
            
            <div className="space-y-4">
                <h3 className="text-xl font-semibold text-purple-400">3. Entendendo o Resultado</h3>
                <p>
                    Após gerar o plano, você verá três seções:
                </p>
                <ul className="list-disc list-inside pl-4 space-y-2">
                    <li><strong>🎯 Objetivos do Estágio:</strong> Metas de alto nível para você alcançar durante esta fase do treinamento.</li>
                    <li><strong>🗓️ Cronograma Semanal:</strong> Uma sugestão de como distribuir seu tempo de estudo ao longo da semana. Os botões "Ver Material" levam você diretamente para a bibliografia relevante.</li>
                    <li><strong>📚 Bibliografia Recomendada:</strong> Uma lista de livros e cursos online.
                        <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                            <li><strong>Progresso:</strong> Marque os itens que você já concluiu. Seu progresso é salvo no navegador.</li>
                            <li><strong>Foco:</strong> Para não sobrecarregar, o sistema mostra todos os seus itens concluídos e apenas os 5 primeiros itens não concluídos de cada categoria. Conforme você completa um, um novo aparece!</li>
                        </ul>
                    </li>
                </ul>
            </div>
             <div className="pt-4 border-t border-gray-600 text-center text-gray-400">
                <p>Bons estudos e boa sorte nos tabuleiros!</p>
            </div>
        </div>
    );
};

export default Instructions;
