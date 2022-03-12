import React, { Suspense,lazy } from "react";
import { Banner } from "../components";
const CoinsTable = lazy(() => import("../components/CoinsTable/CoinsTable"));

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <CoinsTable />
      </Suspense>
    </div>
  );
};

export default HomePage;
