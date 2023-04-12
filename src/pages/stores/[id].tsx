import { useRouter } from "next/router";
import React from "react";

const Stores = () => {
  const router = useRouter();
  return <div>Stores {router.query.id}</div>;
};

export default Stores;
