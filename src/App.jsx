import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HendrikManhaeveUX from "./pages/blog/HendrikManhaeveUX";
import SimonVerdonckCombell from "./pages/blog/SimonVerdonckCombell";
import CampusCloudCafe from "./pages/blog/CampusCloudCafe";
import N5TechChallenge from "./pages/blog/N5TechChallenge";
import TechMeetMix from "./pages/blog/TechMeetMix";
import ThomasDeBruyneTesting from "./pages/blog/ThomasDeBruyneTesting";
import Home from "./pages/Home";
import DrupalCampAI from "./pages/blog/DrupalCampAI";
import DrupalCampLivewire from "./pages/blog/DrupalCampLivewire";
import DrupalCampMultilingual from "./pages/blog/DrupalCampMultilingual";

function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html').style.backgroundColor = 'rgb(68 64 60)';
      document.documentElement.classList.add("dark");
    } else {
      document.querySelector('html').style.backgroundColor = 'white';
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const sun = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
      />
    </svg>
  );

  const moon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="white"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
      />
    </svg>
  );

  return (
    <Router>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed right-20 top-4 z-10 rounded-md bg-violet-300 p-2 text-lg dark:bg-orange-300"
      >
        {theme === "dark" ? sun : moon}
      </button>
      <div className="font-inter min-h-screen bg-white text-stone-900 dark:bg-stone-700 dark:text-stone-300">
        <Routes>
          <Route path="/hendrik-manhaeve-ux" Component={HendrikManhaeveUX} />
          <Route
            path="/simon-verdonck-combell"
            Component={SimonVerdonckCombell}
          />
          <Route path="/n5-tech-challenge" Component={N5TechChallenge} />
          <Route
            path="/thomas-de-bruyne-testing"
            Component={ThomasDeBruyneTesting}
          />
          <Route path="/campus-cloud-cafe" Component={CampusCloudCafe} />
          <Route path="/tech-meet" Component={TechMeetMix} />
          <Route path="/the-genesis-of-generative-grace" Component={DrupalCampAI} />
          <Route path="/bringing-livewire-to-drupal" Component={DrupalCampLivewire} />
          <Route
            path="/multilingual-content-with-local-country-validation"
            Component={DrupalCampMultilingual}
          />
          <Route path="/" Component={Home} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
