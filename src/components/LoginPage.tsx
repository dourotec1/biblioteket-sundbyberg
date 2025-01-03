import React from 'react';
import { Header } from './Header';
import { HelpNotice } from './HelpNotice';
import { LoginForm } from './LoginForm';
import { Footer } from './Footer';

interface LoginPageProps {
  onLogin: () => void;
}

export function LoginPage({ onLogin }: LoginPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="container mx-auto px-4 mt-12 flex-grow">
        <div className="max-w-md mx-auto">
          <HelpNotice />
          <LoginForm onLogin={onLogin} />
        </div>
      </main>
      <Footer />
    </div>
  );
}