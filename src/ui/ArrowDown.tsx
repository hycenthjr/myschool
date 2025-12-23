import { ChevronDown } from 'lucide-react';


const ArrowDown = () => {
  return (
    <span className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-gray-500">
      <ChevronDown className="h-4 w-4" />
    </span>
  );
}

export default ArrowDown