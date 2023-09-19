import { useSession } from "next-auth/react";

import React from "react";

const AdminPage = () => {
  const { data: user } = useSession();

  if (!user) {
    return <div>คุณต้องเข้าสู่ระบบเพื่อดูหน้านี้</div>;
  }

  return <div>AdminPage</div>;
};

export default AdminPage;
