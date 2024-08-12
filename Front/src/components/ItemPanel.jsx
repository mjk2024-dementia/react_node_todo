import React from 'react';
import { useSelector } from 'react-redux';

const ItemPanel = () => {
  const userInfo = useSelector((state) => state.auth.userToken);

  return (
  <div className="panel">
    {userInfo.userToken ? (
        <h2>{userInfo.userName}이 로그인 하셨습니다.</h2>
      ) : (
        <h2>로그인이 필요합니다.</h2>
      )}
  </div>
  );
};

export default ItemPanel;