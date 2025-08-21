import React from 'react';

interface Result {
  no: number;
  name: string;
  category: number;
  grade: number;
}

interface ResultCardProps {
  result: Result;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {result.name}
        </h3>
        <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-2.5 py-0.5 rounded">
          #{result.no}
        </span>
      </div>
      
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Category:</span>
          <span className="font-medium text-gray-900 dark:text-white">{result.category}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">Grade:</span>
          <span className="font-medium text-gray-900 dark:text-white">{result.grade}</span>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;