import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LoginModal from "@/components/login-modal";

export interface LoginModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onLoginSuccess?: () => void; // Added onLoginSuccess prop
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    setIsLoginModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUsername("");
    window.location.href = "/";
  };

  const NavLink = ({
    to,
    children,
  }: {
    to: string;
    children: React.ReactNode;
  }) => (
    <Link to={to} className="block cursor-pointer">
      <Button
        variant="ghost"
        className="text-lg font-medium hover:bg-accent/50 hover:underline text-blue-600 dark:text-blue-400 transition-colors"
        onClick={() => setIsOpen(false)}
      >
        {children}
      </Button>
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b">
      {/* Login Modal */}
      <LoginModal
        open={isLoginModalOpen}
        onOpenChange={setIsLoginModalOpen}
        onLoginSuccess={handleLoginSuccess}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Website Logo */}
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary">KisanMandi</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <NavLink to="/market">Market Prices</NavLink>
              <NavLink to="/products">Farm Products</NavLink>
              <NavLink to="/services">Services</NavLink>
              <NavLink to="/about">About Us</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
            <div className="ml-4 flex items-center gap-2">
              <ModeToggle />
              {isLoggedIn ? (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium">Welcome, {username}</span>
                  <NavLink to="/dashboard">Dashboard</NavLink>
                  <Button variant="outline" size="sm" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => setIsLoginModalOpen(true)}
                >
                  Farmer Login
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full">
                  {/* Mobile menu icon... */}
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[350px]">
                <div className="flex flex-col h-full py-6">
                  <div className="flex flex-col gap-4">
                    <NavLink to="/market">Market Prices</NavLink>
                    <NavLink to="/products">Farm Products</NavLink>
                    <NavLink to="/services">Services</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                  </div>
                  <div className="mt-auto pt-6">
                    <ModeToggle />
                    {isLoggedIn ? (
                      <>
                        <span className="text-sm font-medium mb-2">Welcome, {username}</span>
                        <Button className="w-full" onClick={handleLogout}>
                          Logout
                        </Button>
                      </>
                    ) : (
                      <Button
                        className="w-full"
                        onClick={() => {
                          setIsOpen(false);
                          setIsLoginModalOpen(true);
                        }}
                      >
                        Farmer Login
                      </Button>
                    )}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}