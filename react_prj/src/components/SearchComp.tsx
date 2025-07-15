import { Search } from "lucide-react";

const SearchComp = () => {
  return (
    <div
      id="searchBox"
      className="w-full flex items-center gap-4 bg-white border border-gray-200 rounded-lg p-6"
    >
      {/* select box - 화살표 커스터마이징 */}
      <div id="selectBox" className="flex-shrink-0">
        <select 
          className="w-28 pl-4 pr-10 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#d7e2f9] focus:border-[#d7e2f9] bg-white cursor-pointer"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
            backgroundPosition: 'right 12px center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '14px 14px',
            WebkitAppearance: 'none',
            MozAppearance: 'none',
            appearance: 'none'
          }}
        >
          <option>이름</option>
          <option>이메일</option>
          <option>권한</option>
        </select>
      </div>
      
      {/* search box */}
      <div id="searchInput" className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          placeholder="검색어를 입력하세요"
          className="w-full pl-10 pr-4 py-2 text-sm placeholder-gray-400 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d7e2f9] focus:border-[#d7e2f9] outline-none"
        />
      </div>
      
      {/* search button */}
      <div className="flex-shrink-0">
        <button 
          type="button"
          className="px-6 py-2 bg-[#d7e2f9] border border-gray-200 text-gray-700 text-sm font-medium rounded-lg hover:bg-[#c3d4f4] focus:ring-2 focus:ring-[#d7e2f9] focus:ring-offset-2 transition-colors"
        >
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchComp;