import React from "react";

import { BlogProvider } from "./context/BlogContext";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import AdminPanel from "./pages/AdminPanel";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";
import Profile from "./pages/Profile";
import NotFound from "./components/NotFound/NotFound";
import AllArticles from "./components/AllArticles/AllArticles";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/articles" element={<AllArticles />} />
        <Route path={`/articles/:id`} element={<ArticleDetail />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <BlogProvider>
      <RouterProvider router={router}></RouterProvider>
    </BlogProvider>
  );
}

export default App;
