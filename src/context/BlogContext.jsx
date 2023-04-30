import { createContext, useState } from "react";

import Data from "../data/Data";

const BlogContext = createContext();

export function BlogProvider({ children }) {
  const [open, setOpen] = useState(false);
  const { articles, setArticles, user, setUser } = Data();

  console.log(articles);

  return (
    <BlogContext.Provider
      value={{
        articles,
        setArticles,
        user,
        setUser,
        open,
        setOpen,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
}

export default BlogContext;
