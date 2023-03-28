import React from "react";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <main style={{ padding: "2rem" }}>
      <span className="text-uppercase fw-7 fs-24 ls-1">BOOKS</span>
      <SearchForm />
      <Outlet />
    </main>
  );
};

export default Home;