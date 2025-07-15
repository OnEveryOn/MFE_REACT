import React, { useState } from "react";
import SearchComp from "../components/SearchComp";
import FloatingActionButton from "../components/FloatingActionButton";
import RegisterPopup from "../components/RegisterPopup";
import ListComp from "../components/ListComp";

const UserManage = () => {
  const [showRegisterModal, setShowRegisterModal] = useState(false);

  const handleAddUser = () => {
    setShowRegisterModal(true);
  };

  const handleCloseModal = () => {
    setShowRegisterModal(false);
  };

  return (
    <div className="min-h-screen p-6">
      {/* 메인 콘텐츠 */}
      <div className="max-w-[1000px] mx-auto">
        <div className="mb-4">
          <SearchComp />
        </div>
        <div className="mb-4">
          <ListComp />
        </div>
      </div>

      {/* FAB 버튼 */}
      <FloatingActionButton onClick={handleAddUser} />

      {/* 모달 */}
      {showRegisterModal && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-30 flex items-center justify-center z-50">
          <RegisterPopup />
        </div>
      )}
    </div>
  );
};

export default UserManage;
