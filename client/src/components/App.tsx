import { Container } from "@chakra-ui/react";
import { Navbar } from "./Navbar";
import { ProductList } from "./ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Profile } from "./profile/Profile";
import { AuthContextProvider } from "./AuthContextProvider";
import { Signin } from "./profile/Signin";
import { Signup } from "./profile/Signup";
import { RequireAuth } from "./RequireAuth";
import { AdminPanel } from "./AdminPanel";

function App() {
    return (
        <AuthContextProvider>
            <BrowserRouter>
                <Container maxW="container.lg">
                    <Navbar />
                    <Routes>
                        <Route index element={<ProductList />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/signin" element={<Signin />} />
                        <Route path="/signup" element={<Signup />} />
                        <Route
                            path="/admin"
                            element={
                                <RequireAuth>
                                    <AdminPanel />
                                </RequireAuth>
                            }
                        />
                    </Routes>
                </Container>
            </BrowserRouter>
        </AuthContextProvider>
    );
}

export default App;