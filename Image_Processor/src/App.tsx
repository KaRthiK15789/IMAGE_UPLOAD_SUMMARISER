import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () =>
<QueryClientProvider client={queryClient} data-id="0byb26bwf" data-path="src/App.tsx">
    <TooltipProvider data-id="o8jwujjkz" data-path="src/App.tsx">
      <Toaster data-id="7ti6sy9y2" data-path="src/App.tsx" />
      <BrowserRouter data-id="ncqede6ho" data-path="src/App.tsx">
        <Routes data-id="qu8mm7kbb" data-path="src/App.tsx">
          <Route path="/" element={<HomePage data-id="m7a60md1i" data-path="src/App.tsx" />} data-id="aeci22iw2" data-path="src/App.tsx" />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound data-id="hxcvjoyuu" data-path="src/App.tsx" />} data-id="xjrcnujsv" data-path="src/App.tsx" />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>;


export default App;