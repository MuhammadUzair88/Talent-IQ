import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { useUser } from "@clerk/clerk-react";
import ProblemsPage from "./pages/ProblemsPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  const { isSignedIn } = useUser();
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to={"/"} />}
        />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
