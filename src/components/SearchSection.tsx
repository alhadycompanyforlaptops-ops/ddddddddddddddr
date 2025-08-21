import React, { useState } from 'react';
import { Search } from 'lucide-react';

interface Student {
  id: number;
  name: string;
  category: number;
  grade: number;
}

interface SearchSectionProps {
  students: Student[];
  onResult: (results: Student[]) => void;
  isDarkMode: boolean;
}

const SearchSection: React.FC<SearchSectionProps> = ({ students, onResult, isDarkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    
    if (!term.trim()) {
      onResult([]);
      return;
    }

    const filteredResults = students.filter(student =>
      student.name.toLowerCase().includes(term.toLowerCase()) ||
      student.id.toString().includes(term)
    );

    onResult(filteredResults);
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name or ID number..."
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg leading-5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
        />
      </div>
      
      {searchTerm && (
        <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          Search results will appear below
        </div>
      )}
    </div>
  );
};

export default SearchSection;