import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import { CommandPalette } from "./components/CommandPalette";
import { UsernameOnboarding } from "./components/UsernameOnboarding";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Templates from "./pages/Templates";
import ProjectBuilder from "./pages/ProjectBuilder";
import Billing from "./pages/Billing";
import Admin from "./pages/Admin";
import Github from "./pages/Github";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Support from "./pages/Support";
import Docs from "./pages/Docs";
import Community from "./pages/Community";
import Discover from "./pages/Discover";
import Learn from "./pages/Learn";

const App = () => {
  return (
    <>
      <CommandPalette />
      <UsernameOnboarding />
      <Routes>
        <Route
          path="/project/:id"
          element={
            <AppLayout>
              <ProjectBuilder />
            </AppLayout>
          }
        />
        <Route
          path="/"
          element={
            <AppLayout>
              <Home />
            </AppLayout>
          }
        />
        <Route
          path="/projects"
          element={
            <AppLayout>
              <Projects />
            </AppLayout>
          }
        />
        <Route
          path="/templates"
          element={
            <AppLayout>
              <Templates />
            </AppLayout>
          }
        />
        <Route
          path="/billing"
          element={
            <AppLayout>
              <Billing />
            </AppLayout>
          }
        />
        <Route
          path="/admin"
          element={
            <AppLayout>
              <Admin />
            </AppLayout>
          }
        />
        <Route
          path="/github"
          element={
            <AppLayout>
              <Github />
            </AppLayout>
          }
        />
        <Route
          path="/profile"
          element={
            <AppLayout>
              <Profile />
            </AppLayout>
          }
        />
        <Route
          path="/settings"
          element={
            <AppLayout>
              <Settings />
            </AppLayout>
          }
        />
        <Route
          path="/support"
          element={
            <AppLayout>
              <Support />
            </AppLayout>
          }
        />
        <Route
          path="/docs"
          element={
            <AppLayout>
              <Docs />
            </AppLayout>
          }
        />
        <Route
          path="/community"
          element={
            <AppLayout>
              <Community />
            </AppLayout>
          }
        />
        <Route
          path="/discover"
          element={
            <AppLayout>
              <Discover />
            </AppLayout>
          }
        />
        <Route
          path="/learn"
          element={
            <AppLayout>
              <Learn />
            </AppLayout>
          }
        />
      </Routes>
    </>
  );
};

export default App;
