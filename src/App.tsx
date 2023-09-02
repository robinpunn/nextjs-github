import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import Layout from "./layout/Layout";
import "./App.css";
import Issues from "./components/Issues";

const octokit = new Octokit({
  auth: import.meta.env.VITE_AUTH_TOKEN,
});

function App() {
  const [category, setCategory] = useState<string>("documentation");
  const [issues, setIssues] = useState<any[]>([]);
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    searchOpenIssues();
  }, [category, key]);

  const searchOpenIssues = async () => {
    setIsLoading(true);
    try {
      const label = category.includes(" ") ? `"${category}"` : category;
      const response = await octokit.request("GET /search/issues", {
        q: `is:open+label:"good first issue"+label:${label}`,
        sort: "created",
        order: "desc",
        per_page: 100,
        page: 1,
      });
      const items = response.data.items;
      // console.log(items[0].title, items[0].labels, items[0].html_url);
      setIssues(items);
    } catch (error) {
      console.error("Error searching for an open issue", error);
    }
    setIsLoading(false);
  };

  const handleSetCategory = (category: string) => {
    setCategory(category);
    setKey((prevKey) => prevKey + 1);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Layout setCategory={handleSetCategory} category={category}>
        {isLoading ? <h3>Loading ...</h3> : <Issues issues={issues} />}
      </Layout>
    </>
  );
}

export default App;
