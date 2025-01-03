import React, { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { RefundPage } from './components/RefundPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return isLoggedIn ? <RefundPage /> : <LoginPage onLogin={() => setIsLoggedIn(true)} />;
}

export default App;