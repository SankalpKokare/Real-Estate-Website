import { Suspense } from "react";
import "./App.css";
import { MantineProvider } from "@mantine/core";
import Website from "./pages/Website.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout/Layout.jsx";
import Properties from "./pages/Properties/Properties.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property.jsx";
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <MantineProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Suspense fallback={<div>Loading....</div>}>
              <Routes>
                <Route path="/" element={<Layout />}>
                  <Route index element={<Website />} />
                  <Route path="/properties">
                    <Route index element={<Properties />} />
                    <Route path=":propertyId" element={<Property />} />
                  </Route>
                </Route>
              </Routes>
            </Suspense>
          </BrowserRouter>
          <ToastContainer />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </MantineProvider>
    </>
  );
}

export default App;
