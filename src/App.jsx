import React from "react";
import Layout from "./layout";
import HomePage from "./pages/home";

const App = () => {
  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default App;
