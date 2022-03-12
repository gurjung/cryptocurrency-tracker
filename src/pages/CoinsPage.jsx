import React, { Suspense, lazy } from "react";
const CoinSummary = lazy(() => import("../components/CoinSummary/CoinSummary"));
const CoinsPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <CoinSummary />
      </Suspense>
    </div>
  );
};
export default CoinsPage;
