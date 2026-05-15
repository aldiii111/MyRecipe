import { AlertCircle, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ErrorProp {
  message: string | null;
  retry: () => void;
}

export function ErrorView({ message, retry }: ErrorProp) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6 animate-in fade-in zoom-in duration-300">
      <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
        <AlertCircle className="w-10 h-10 text-red-500" />
      </div>
      <h2 className="text-2xl font-black text-foreground tracking-tight">Oops! Something went wrong</h2>
      <p className="text-muted-foreground mt-2 max-w-sm mx-auto font-medium leading-relaxed">
        {message || "We couldn't fetch the recipes. Please check your internet connection and try again."}
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <Button 
          onClick={retry} 
          className="rounded-full px-10 py-6 font-bold gap-3 shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
        >
          <RefreshCw className="w-4 h-4" /> Try Again
        </Button>
        <Link to="/">
          <Button 
            variant="outline" 
            className="rounded-full px-10 py-6 font-bold border-2 hover:bg-muted transition-colors"
          >
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}