import React from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar";
import { Outlet } from "react-router-dom";
export default function LandingPage() {
  return (
    <div className={styles.landingPage}>
      <Navbar />
      <Outlet />
    </div>
  );
}
