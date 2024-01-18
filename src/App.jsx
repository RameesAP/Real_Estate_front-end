import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/about"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/Signup"

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App