import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { User, LogOut, MessageCircle, Home } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NavigationProps {
  user: any;
  onShowChat: () => void;
  onShowHome: () => void;
  showChat: boolean;
}

const Navigation = ({ user, onShowChat, onShowHome, showChat }: NavigationProps) => {
  const [profile, setProfile] = useState<any>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching profile:', error);
      } else {
        setProfile(data);
      }
    } catch (error) {
      console.error('Profile fetch error:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Signed out successfully",
      });
    } catch (error: any) {
      console.error('Sign out error:', error);
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive",
      });
    }
  };

  return (
    <nav className="bg-white border-b border-medical-200 px-4 py-3 shadow-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-bold text-medical-600">
            HealthAI Assistant
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant={showChat ? "medical" : "outline"}
            onClick={onShowHome}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Home
          </Button>
          
          <Button
            variant={showChat ? "outline" : "medical"}
            onClick={onShowChat}
            className="flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Chat
          </Button>

          <div className="flex items-center gap-2 text-sm text-medical-600">
            <User className="h-4 w-4" />
            <span>
              {profile?.full_name || user?.email || "User"}
            </span>
          </div>

          <Button
            variant="outline"
            onClick={handleSignOut}
            className="flex items-center gap-2 text-medical-600 border-medical-300 hover:bg-medical-50"
          >
            <LogOut className="h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;