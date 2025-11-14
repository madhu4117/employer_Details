import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Loginpage = lazy(() => import("./containers/Loginpage/Loginpage"));
const PageNotFound = lazy(() =>
  import("./containers/PageNotFound/PageNotFound")
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/login" element={<Loginpage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
