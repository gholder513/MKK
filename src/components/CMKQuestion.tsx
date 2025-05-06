import React, { useState, useEffect } from 'react';
import { CMKOption, CMKQuestion as CMKQuestionType } from '../types';
import { Shuffle } from 'lucide-react';

interface CMKQuestionProps {
  question: CMKQuestionType;
  onSubmit: (choice: { communion: string; marry: string; kill: string }) => void;
  questionNumber: number;
  totalQuestions: number;
}

const CMKQuestion: React.FC<CMKQuestionProps> = ({ 
  question, 
  onSubmit, 
  questionNumber,
  totalQuestions
}) => {
  const [options, setOptions] = useState<CMKOption[]>(question.options);
  const [selectedOptions, setSelectedOptions] = useState<{
    communion: string | null;
    marry: string | null;
    kill: string | null;
  }>({
    communion: null,
    marry: null,
    kill: null,
  });

  // Reset the state when the question changes
  useEffect(() => {
    setOptions(question.options);
    setSelectedOptions({
      communion: null,
      marry: null,
      kill: null,
    });
  }, [question]);

  // Shuffle the options
  const shuffleOptions = () => {
    setOptions([...options].sort(() => 0.5 - Math.random()));
  };

  // Check if an option is selected
  const getSelectedType = (optionId: string) => {
    if (selectedOptions.communion === optionId) return 'communion';
    if (selectedOptions.marry === optionId) return 'marry';
    if (selectedOptions.kill === optionId) return 'kill';
    return null;
  };

  // Handle option selection
  const handleSelect = (optionId: string, type: 'communion' | 'marry' | 'kill') => {
    // If already selected for this type, deselect it
    if (selectedOptions[type] === optionId) {
      setSelectedOptions({
        ...selectedOptions,
        [type]: null,
      });
      return;
    }

    // If selected for another type, remove it from there
    const newSelected = { ...selectedOptions };
    
    if (newSelected.communion === optionId) newSelected.communion = null;
    if (newSelected.marry === optionId) newSelected.marry = null;
    if (newSelected.kill === optionId) newSelected.kill = null;
    
    // Select for new type
    newSelected[type] = optionId;
    
    setSelectedOptions(newSelected);
  };

  // Handle form submission
  const handleSubmit = () => {
    if (selectedOptions.communion && selectedOptions.marry && selectedOptions.kill) {
      onSubmit({
        communion: selectedOptions.communion,
        marry: selectedOptions.marry,
        kill: selectedOptions.kill,
      });
      // Selections will be reset by the useEffect when the parent component
      // updates the question prop
    }
  };

  // Check if all options are selected
  const isComplete = selectedOptions.communion && selectedOptions.marry && selectedOptions.kill;

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      <div className="flex justify-between items-center mb-6">
        <div className="text-sm font-medium text-purple-300">
          Question {questionNumber} of {totalQuestions}
        </div>
        <button 
          onClick={shuffleOptions}
          className="flex items-center text-purple-300 hover:text-yellow-400 transition-colors"
        >
          <Shuffle size={16} className="mr-1" />
          <span className="text-sm">Shuffle</span>
        </button>
      </div>
      
      <h2 className="text-2xl font-serif text-center mb-8 text-white">Communion, Marry, Kill</h2>
      
      <div className="grid gap-4 md:grid-cols-3">
        {options.map((option) => {
          const selectedType = getSelectedType(option.id);
          
          let bgColor = 'bg-gray-800';
          let borderColor = 'border-gray-700';
          let textColor = 'text-white';
          
          if (selectedType === 'communion') {
            bgColor = 'bg-purple-900';
            borderColor = 'border-purple-500';
            textColor = 'text-white';
          } else if (selectedType === 'marry') {
            bgColor = 'bg-green-900';
            borderColor = 'border-green-700';
            textColor = 'text-white';
          } else if (selectedType === 'kill') {
            bgColor = 'bg-red-900';
            borderColor = 'border-red-500';
            textColor = 'text-white';
          }
          
          return (
            <div 
              key={option.id}
              className={`${bgColor} ${borderColor} border-2 rounded-lg p-4 flex flex-col transition-all duration-300 hover:shadow-lg transform hover:scale-102`}
            >
              <div className="flex-grow mb-4">
                <p className={`${textColor} text-lg font-medium text-center`}>{option.text}</p>
              </div>
              
              <div className="grid gap-2 mt-auto">
              <button
                  onClick={() => handleSelect(option.id, 'marry')}
                  className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                    selectedType === 'marry'
                      ? 'bg-green-700 text-white'
                      : 'bg-green-900 text-green-200 hover:bg-green-700'
                  }`}
                >
                  Marry
                </button>
                <button
                  onClick={() => handleSelect(option.id, 'communion')}
                  className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                    selectedType === 'communion'
                      ? 'bg-purple-500 text-white'
                      : 'bg-purple-900 text-purple-200 hover:bg-purple-700'
                  }`}
                >
                  Communion
                </button>
                <button
                  onClick={() => handleSelect(option.id, 'kill')}
                  className={`px-2 py-1 rounded text-sm font-medium transition-colors ${
                    selectedType === 'kill'
                      ? 'bg-red-500 text-white'
                      : 'bg-red-900 text-red-200 hover:bg-red-700'
                  }`}
                >
                  Kill
                </button>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 flex justify-center">
        <button
          onClick={handleSubmit}
          disabled={!isComplete}
          className={`px-6 py-3 rounded-lg font-medium text-white transition-all duration-300 transform hover:scale-105 ${
            isComplete
              ? 'bg-gradient-to-r from-purple-600 to-indigo-700 hover:from-purple-700 hover:to-indigo-800 shadow-lg'
              : 'bg-gray-600 cursor-not-allowed opacity-50'
          }`}
        >
          {isComplete ? 'Submit Choices' : 'Select All Options to Continue'}
        </button>
      </div>
    </div>
  );
};

export default CMKQuestion;