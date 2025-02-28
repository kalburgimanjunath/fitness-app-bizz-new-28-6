import Header from "./components/header";
import {
  Home,
  ExcersiseVideos,
  Clothing,
  Nuetrition,
  Plan,
  Journey,
  Resources,
  Recommendation,
  Support,
  Tracking,
  ExcersiseVideoDetail,
  Dance1,
} from "./pages/";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main className="flex flex-col items-center gap-8 py-16 max-w-[1280px] mx-auto">
      <Header />
      <Routes>
        <Route path="/plan" element={<Plan />} />
        <Route path="/tracking" element={<Tracking />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/support" element={<Support />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/dance" element={<Dance1 />} />
        <Route path="/nuetrition" element={<Nuetrition />} />
        <Route path="/:id" element={<ExcersiseVideoDetail />} />
        <Route path="/excersisevideos" element={<ExcersiseVideos />} />

        <Route path="/*" exact element={<ExcersiseVideos />} />
      </Routes>
    </main>
  );
}

export default App;
