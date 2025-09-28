import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import AuthForm from "@/components/AuthForm";
import Navigation from "@/components/Navigation";
import ChatInterface from "@/components/ChatInterface";
import AppointmentBooking from "@/components/AppointmentBooking";
import Index from "./pages/Index";

const queryClient = new QueryClient();

const App = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [currentView, setCurrentView] = useState<'home' | 'chat' | 'appointment'>('home');

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const handleAuthSuccess = () => {
    // Auth state will be updated by the listener
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-medical-600 mx-auto"></div>
          <p className="mt-2 text-medical-600">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {!user ? (
          <AuthForm onSuccess={handleAuthSuccess} />
        ) : (
          <div className="min-h-screen bg-background">
            <Navigation 
              user={user} 
              onShowChat={() => setCurrentView('chat')}
              onShowHome={() => setCurrentView('home')}
              onShowAppointment={() => setCurrentView('appointment')}
              currentView={currentView}
            />
            <main className="container mx-auto px-4 py-8">
              {currentView === 'chat' ? (
                <ChatInterface />
              ) : currentView === 'appointment' ? (
                <AppointmentBooking />
              ) : (
                <Index 
                  onShowChat={() => setCurrentView('chat')}
                  onShowAppointment={() => setCurrentView('appointment')}
                />
              )}
            </main>
          </div>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
