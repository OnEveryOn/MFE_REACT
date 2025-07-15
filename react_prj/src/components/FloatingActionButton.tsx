import { Plus } from 'lucide-react';
interface FABProps {
  onClick: () => void;
}

const FloatingActionButton = ({ onClick }: FABProps) => {
  return (
    <button 
      onClick={onClick}
      className="fixed bottom-6 right-6 w-14 h-14 bg-[#7e9feb] text-white rounded-full shadow-lg hover:bg-[#5a84e6] hover:shadow-xl transform hover:scale-110 transition-all duration-200 flex items-center justify-center z-50"
    >
      <Plus className="w-6 h-6" />
    </button>
  );
};

export default FloatingActionButton;