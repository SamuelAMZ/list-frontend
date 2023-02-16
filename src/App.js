import React from "react";
import { Routes, Route } from "react-router-dom";
// css tailwind
import "./styles/tailwind.css";
// css components
import "./styles/index.min.css";
// react query
import { QueryClient, QueryClientProvider } from "react-query";
// components
import Sidebar from "./components/Sidebar/Sidebar";
// admin pages
import Login from "./pages/Admin/Login/Login";
import Home from "./pages/Admin/Home/Home";
import New from "./pages/Admin/New/New";
import All from "./pages/Admin/All/All";
import Expired from "./pages/Admin/Expired/Expired";
import Account from "./pages/Admin/Account/Account";
import Edit from "./pages/Admin/Edit/Edit";

const App = () => {
  // react query
  const client = new QueryClient();

  return (
    <>
      <QueryClientProvider client={client}>
        <>
          {/* component code */}
          <div className="site-container">
            <div className="notif"></div>

            {/* sidebar */}
            <Sidebar />

            {/* main */}
            <div className="main">
              <Routes>
                {/* auth pages */}
                <Route path="/app" exact element={<Login />} />

                {/* dashboad pages */}
                <Route path="/app/home" element={<Home />} />
                <Route path="/app/new" element={<New />} />
                <Route path="/app/all" element={<All />} />
                <Route path="/app/expired" element={<Expired />} />
                <Route path="/app/account" element={<Account />} />
                <Route path="/app/edit" element={<Edit />} />
              </Routes>
            </div>
          </div>
        </>
      </QueryClientProvider>
    </>
  );
};

export default App;
