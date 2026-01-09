import { ThemeProvider } from "@/components/ThemeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import BlogPost from "@/pages/BlogPost";

function App() {
   return (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Index />} />
               <Route path="/writing/:slug" element={<BlogPost />} />
               <Route path="*" element={<NotFound />} />
            </Routes>
         </BrowserRouter>
      </ThemeProvider>
   );
}

export default App;
