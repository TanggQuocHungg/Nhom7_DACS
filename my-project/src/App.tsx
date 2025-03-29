// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import Signup from './components/Signup';
import Profile from './components/Profile';
import { AuthProvider } from './authContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="font-sans bg-[#f9f9f9] min-h-screen">
          <Header />
          <main className="p-6">
            <Routes>
              <Route path="/" element={
                <>
                  <h2 className="text-3xl font-bold text-gray-700 mb-4">
                    📚 Welcome to the Library!
                  </h2>
                  <p className="text-gray-600">
                    Explore a wide variety of books and manage your reading easily.
                  </p>
                </>
              } />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
