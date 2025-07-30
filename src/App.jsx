import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Diabetes from "./pages/diseases/Diabetes";
import Hypertension from "./pages/diseases/Hypertension";
import HivAids  from "./pages/diseases/HivAids";
import Depression from "./pages/diseases/Depression";
import Obesity from "./pages/diseases/Obesity";
import Cancer from "./pages/diseases/Cancer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import DoctorDiscovery from "./pages/DoctorDiscovery";
import BookingConsultation from "./pages/BookingConsultation";
import Homepage from "./pages/Homepage";
import Layout from "./components/Layout";
import BMICalculator from "./pages/BMICalculator";
import Privacy from "./pages/Privacy";
import Disclaimer from "./pages/Disclaimer";
import TermsOfUse from "./pages/TermsOfUse";
import Accessibility from "./pages/Accessibility";
import Resources from "./pages/Resources";
import HealthScreening from "./pages/HealthScreening";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/disclaimer" element={<Disclaimer />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/accessibility" element={<Accessibility />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/screening" element={<HealthScreening />} />
              
              {/* Main Pages */}


              <Route path="/homepage" element={<Homepage />} />
              <Route path="/doctor-discovery" element={<DoctorDiscovery />} />
              <Route path="/booking/:doctorId" element={<BookingConsultation />} />
              <Route path="/bmi-calculator" element={<BMICalculator />} />

              {/* Disease Pages */}
              <Route path="/diseases/diabetes" element={<Diabetes />} />
              <Route path="/diseases/hypertension" element={<Hypertension />} />
              <Route path="/diseases/hiv-aids" element={<HivAids />} />
              <Route path="/diseases/depression" element={<Depression />} />
              <Route path="/diseases/obesity" element={<Obesity />} />
              <Route path="/diseases/cancer" element={<Cancer />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          </Route>
          {/* Catch-all route for 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
