import { Backdrop } from "@mui/material";
import { Suspense, lazy } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import ContextProvider from "./context/Context";

const Home = lazy(() => import('./pages/Home'));
const Instance = lazy(() => import('./pages/Instance'));

const App = () => {
    return (
        <BrowserRouter>
            <ContextProvider>
                <Suspense fallback={<Backdrop open />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/instance/:_id" element={<Instance />} />
                    </Routes>
                </Suspense>
            </ContextProvider>
        </BrowserRouter>
    );
}

export default App;