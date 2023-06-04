import { BrowserRouter, Routes, Route } from "react-router-dom";

// LAYOUTS
import LayoutAdmin from "./layouts/LayoutAdmin";
// PAGES
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Recordarpass from "./pages/auth/Recordarpass";
// PAGES ADMINS
import Home from "./pages/admin/Home";
import Chat from "./pages/admin/Chat";
import Fotos from "./pages/admin/Fotografias";
import Error404 from "./pages/Error404";

function App() {

  const isAuthenticated = localStorage.getItem("token") || null;

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LayoutAdmin />}>
          <Route index element={<Home />} />

          {
            isAuthenticated ?
              <>
                <Route path="chat" element={<Chat />} />
                <Route path="fotos" element={<Fotos />} />
              </>

              :
              <>
                <Route path="login" element={<Login />} />
                <Route path="registro" element={<Register />} />
                <Route path="olvide-pass" element={<Recordarpass />} />
              </>
          }

        </Route>

        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
