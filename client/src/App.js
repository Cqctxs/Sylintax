//Components
import Layout from "./components/Layout";
import Login from "./components/Login";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";
import Unauthorized from "./components/Unauthorized";
import Home from "./components/Home";
import Missing from "./components/Missing";

import PersistLogin from "./components/PersistLogin";
import { Routes, Route } from "react-router-dom";
import Lesson from "./components/Lesson";
import Lessons from "./components/Lessons";
import Account from "./components/Account";
import Photocam from "./components/Photocam";


const ROLES = {
  User: 2001,
  Editor: 1984,
  Admin: 5150,
};

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          

          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]} />}>
              <Route path="lessons" element={<Lessons />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]} />}>
              <Route path="lesson/:id" element={<Lesson />} />
            </Route>
            <Route element={<RequireAuth allowedRoles={[ROLES.Admin, ROLES.Editor, ROLES.User]} />}>
              <Route path="account" element={<Account />} />
            </Route>
          </Route>

          {/* Just changes the allowedRoles array to change the allowed roles */}

          <Route path="*" element={<Missing />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="camera" element={<Photocam />} />
      </Routes>
    </div>
  );
}

export default App;
