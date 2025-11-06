import React, { useState, useMemo } from 'react';
import { masterBibliography } from '../constants/bibliography';
import type { BibliographyItem } from '../types';

interface Book extends BibliographyItem {
    category: string;
}

const allBooks: Book[] = Object.entries(masterBibliography).flatMap(([category, books]) => 
    (books as BibliographyItem[]).map(book => ({ ...book, category }))
);

const difficultyColors: { [key: number]: string } = {
    1: 'bg-green-600/20 text-green-300 border-green-500/50',
    2: 'bg-sky-600/20 text-sky-300 border-sky-500/50',
    3: 'bg-amber-600/20 text-amber-300 border-amber-500/50',
    4: 'bg-red-600/20 text-red-300 border-red-500/50',
};

const BookCard: React.FC<{ book: Book }> = ({ book }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    
    const synopsis = book.synopsis;
    const isLongSynopsis = synopsis && synopsis.length > 150;
    const displaySynopsis = isExpanded ? synopsis : (synopsis?.substring(0, 150) + (isLongSynopsis ? '...' : ''));

    return (
        <div className="bg-[#2a2a2a] p-4 rounded-lg border border-[#444] shadow-md flex flex-col">
            <h4 className="font-bold text-lg text-gray-100">{book.title}</h4>
            <div className="flex items-center flex-wrap gap-x-4 gap-y-2 mt-2 text-sm text-gray-400">
                <span className={`px-2 py-0.5 text-xs font-semibold rounded-full border ${difficultyColors[book.difficulty]}`}>
                    Dificuldade: {book.difficulty}
                </span>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <span>{book.category}</span>
                <span className="text-gray-500 hidden sm:inline">|</span>
                <span>Rating: {book.min}-{book.max}</span>
            </div>
            {synopsis && (
                <div className="mt-3 text-gray-300 text-sm flex-grow">
                    <p className="whitespace-pre-wrap">{displaySynopsis}</p>
                    {isLongSynopsis && (
                        <button onClick={() => setIsExpanded(!isExpanded)} className="text-purple-400 hover:text-purple-300 font-semibold mt-1 text-xs">
                            {isExpanded ? 'Ver menos' : 'Ver mais'}
                        </button>
                    )}
                </div>
            )}
        </div>
    );
};


const CatalogExplorer: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [rating, setRating] = useState('');
    const [difficulties, setDifficulties] = useState<number[]>([1, 2, 3, 4]);

    const filteredBooks = useMemo(() => {
        let books = allBooks;

        if (searchTerm.trim()) {
            books = books.filter(book => book.title.toLowerCase().includes(searchTerm.trim().toLowerCase()));
        }
        
        if (selectedCategory !== 'All') {
            books = books.filter(book => book.category === selectedCategory);
        }

        const numRating = parseInt(rating, 10);
        if (!isNaN(numRating) && numRating > 0) {
            books = books.filter(book => book.min <= numRating && numRating <= book.max);
        }

        if (difficulties.length < 4) {
             books = books.filter(book => difficulties.includes(book.difficulty || 1));
        }

        return books.sort((a, b) => a.title.localeCompare(b.title));

    }, [searchTerm, selectedCategory, rating, difficulties]);

    const handleDifficultyChange = (diff: number) => {
        setDifficulties(prev => 
            prev.includes(diff) ? prev.filter(d => d !== diff) : [...prev, diff].sort()
        );
    };

    const categories = ['All', ...Object.keys(masterBibliography)];
    const difficultyOptions = [1, 2, 3, 4];

    return (
        <div className="bg-[#333] p-6 rounded-lg shadow-lg shadow-black/30 animate-fade-in">
            <h2 className="text-2xl font-bold text-purple-300 border-b-2 border-gray-600 pb-2 mb-6">
                📚 Explorar Bibliografia
            </h2>
            
            {/* Filters Section */}
            <div className="space-y-6 mb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                        type="text"
                        placeholder="Pesquisar por título..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                    />
                    <input 
                        type="number"
                        placeholder="Filtrar por rating (ex: 1500)"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                     <select
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="w-full p-3 rounded-lg border border-[#555] bg-[#444] text-gray-100 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition"
                    >
                        {categories.map(cat => <option key={cat} value={cat}>{cat === 'All' ? 'Todas as Categorias' : cat}</option>)}
                    </select>
                    <div className="flex items-center space-x-4">
                        <span className="font-medium text-gray-300">Dificuldade:</span>
                        <div className="flex items-center space-x-2">
                        {difficultyOptions.map(diff => (
                            <button 
                                key={diff}
                                onClick={() => handleDifficultyChange(diff)}
                                className={`px-3 py-1 text-sm font-semibold rounded-full border transition-all ${difficulties.includes(diff) ? difficultyColors[diff] : 'bg-gray-600 text-gray-300 border-gray-500 hover:bg-gray-500'}`}
                            >
                                {diff}
                            </button>
                        ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Results Section */}
            <div>
                 <div className="mb-4 text-gray-400">
                    <p>Encontrados <span className="font-bold text-white">{filteredBooks.length}</span> de <span className="font-bold text-white">{allBooks.length}</span> materiais.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[60vh] overflow-y-auto pr-2">
                    {filteredBooks.length > 0 ? (
                        filteredBooks.map(book => (
                           <BookCard key={book.title} book={book} />
                        ))
                    ) : (
                        <div className="md:col-span-2 text-center py-10">
                            <p className="text-gray-400 italic">Nenhum material encontrado com os filtros selecionados.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CatalogExplorer;