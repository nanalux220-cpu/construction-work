import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About } from "./pages/About";
import { Blog } from "./pages/Blog";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Privacy, Terms } from "./pages/Legal";
import { NotFound } from "./pages/NotFound";
import { PostPage } from "./pages/PostPage";
import { ProjectPage } from "./pages/ProjectPage";
import { Projects } from "./pages/Projects";
import { ServicePage } from "./pages/ServicePage";
import { Services } from "./pages/Services";

export function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:slug" element={<ProjectPage />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<PostPage />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
