import { useEffect } from "react";
import { Octokit } from "octokit";
import Layout from "./layout/Layout";
import "./App.css";
import Issues from "./components/Issues";

const octokit = new Octokit({
  auth: import.meta.env.VITE_AUTH_TOKEN,
});

function App() {
  useEffect(() => {
    searchOpenIssues();
  }, []);

  const searchOpenIssues = async () => {
    try {
      const response = await octokit.request("GET /search/issues", {
        q: 'is:open+label:"good first issue"+label:blockchain',
        sort: "created",
        order: "desc",
        per_page: 100,
        page: 1,
      });
      console.log(response);
    } catch (error) {
      console.error("Error searching for an open issue", error);
    }
  };

  return (
    <>
      <Layout>
        <Issues />
        <Issues />
        <Issues />
        <Issues />
        <Issues />
        <Issues />
        <Issues />
        <Issues />
        <Issues />
        <Issues />
      </Layout>
    </>
  );
}

export default App;
