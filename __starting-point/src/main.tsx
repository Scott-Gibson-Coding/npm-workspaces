/** Main project entrypoint */

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppLayout from "./library/components/AppLayout";
import ConsumerApp from "./apps/consumer/App";
import AdminApp from "./apps/admin/App";
import "./index.css";

let currentApp: "consumer" | "admin" = "consumer";
const subfolders = window.location.pathname.substring(1).split("/");
if (subfolders[0] === "admin") currentApp = "admin";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppLayout>
      {currentApp === "consumer" ? <ConsumerApp /> : <AdminApp />}
    </AppLayout>
  </StrictMode>,
);
