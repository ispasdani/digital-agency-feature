import { SlideOne } from "./components/SlideOne/SlideOne";
import { SlideTwo } from "./components/SlideTwo/SlideTwo";
import { SlideThree } from "./components/SlideThree/SlideThree";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DaysSchedule } from "./components/DaysSchedule/DaysSchedule";
import { DayOne } from "./components/DayOne/DayOne";
import { DayTwo } from "./components/DayTwo/DayTwo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/digital-agency-feature/" element={<SlideOne />} />
          <Route
            path="/digital-agency-feature/slideTwo"
            element={<SlideTwo />}
          />
          <Route
            path="/digital-agency-feature/slideThree"
            element={<SlideThree />}
          />
          <Route
            path="/digital-agency-feature/daysSchedule"
            element={<DaysSchedule />}
          />
          <Route path="/digital-agency-feature/dayOne" element={<DayOne />} />
          <Route path="/digital-agency-feature/dayTwo" element={<DayTwo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
