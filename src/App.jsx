import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/MainLayout";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { UserContextProvider } from './components/userContext'
import { Login } from './components/Login/Login'
import { UserPostsPage } from "./pages/UserPostsPage";
import{UserPage} from './pages/UserPage'


//loin komponent -Post  til en server og få en bruge tilbage
//User Komponent -Se brugeres

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage title='HOME' />} />
            <Route path="/about" element={<AboutPage title='ABOUT' />} />
            <Route path="/user" element={<UserPage title='USER' />} />
            <Route path="/login" element={<Login />} />
            <Route path='/userposts' element={<UserPostsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </UserContextProvider>

  );
}

export default App;
