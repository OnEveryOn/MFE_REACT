import React from "react";
import { X, Save, Circle, ChevronDown } from "lucide-react";

const RegisterPopup = () => {
  return (
    <div className="min-w-[400px] min-h-[450px] bg-white p-10 border border-gray-300 rounded-lg shadow shadow-gray-300">
      {/* title */}
      <div className="mb-2">
        <h2 className="text-lg font-medium">사용자 등록</h2>
      </div>
      {/* 구분선 */}
      <div className="mb-4">
        <div className="border-t border-gray-300"></div>
      </div>
      {/* register form */}
      <div className="text-sm">
        <div className="flex flex-col gap-3">
          <label className="font-medium flex items-center">
            <Circle className="w-1.5 h-1.5 text-[#7e9feb] fill-current mr-2" />
            이름
          </label>
          <input className="mb-3 h-10 p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-[#d7e2f9] focus:border-[#d7e2f9]" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-medium flex items-center">
            <Circle className="w-1.5 h-1.5 text-[#7e9feb] fill-current mr-2" />
            이메일
          </label>
          <input className="mb-3 h-10 p-2 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-[#d7e2f9] focus:border-[#d7e2f9]" />
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-medium flex items-center">
            <Circle className="w-1.5 h-1.5 text-[#7e9feb] fill-current mr-2" />
            역할
          </label>
          <div className="relative mb-3">
            <select className="w-full h-10 pl-3 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-[#d7e2f9] focus:border-[#d7e2f9] bg-white cursor-pointer appearance-none text-gray-700 hover:border-gray-400 transition-colors">
              <option value="" disabled className="text-gray-500">선택</option>
              <option value="admin">관리자</option>
              <option value="user">사용자</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label className="font-medium flex items-center">
            <Circle className="w-1.5 h-1.5 text-[#7e9feb] fill-current mr-2" />
            상태
          </label>
          <div className="relative mb-6">
            <select className="w-full h-10 pl-3 pr-10 border border-gray-300 rounded-lg outline-none focus:ring-1 focus:ring-[#d7e2f9] focus:border-[#d7e2f9] bg-white cursor-pointer appearance-none text-gray-700 hover:border-gray-400 transition-colors">
              <option value="" disabled className="text-gray-500">선택</option>
              <option value="active">활성</option>
              <option value="inactive">비활성</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>
        {/* buttons */}
        <div className="flex gap-3 justify-center">
          <div 
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <X className="w-3 h-3 text-gray-500" />
            <span className="text-gray-700 font-medium">취소</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-[#7e9feb] border border-[#7e9feb] rounded-lg hover:bg-[#5a84e6] cursor-pointer transition-colors">
            <Save className="w-3 h-3 text-white" />
            <span className="text-white font-medium">저장</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPopup;