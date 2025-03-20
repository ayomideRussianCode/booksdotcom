import React from 'react';
import { ChevronDown, ShoppingCart, Tag, LogOut, User, BookOpen } from 'lucide-react';
import Logo from '../components/Logo';
// import NavBar2 from '../components/NavBar2';

const Sidebar = () => (
  <div className="w-64 bg-blue-600 h-screen p-4 text-white text-xs font-font1">
    <div className="mb-8">
      <Logo src="/Logo.png"/>
   </div>
    
    <nav className="space-y-4">
      <a href="/package.json" className="flex items-center p-3 bg-blue-500/30 rounded-lg">
        <User className="w-5 h-5 mr-3" />
        <span>Author Account Management</span>
      </a>
      
      <a href="/" className="flex items-center justify-between p-3 hover:bg-blue-500/30 rounded-lg">
        <div className="flex items-center">
          <BookOpen className="w-5 h-5 mr-3" />
          <span>Manage Product</span>
        </div>
        <ChevronDown className="w-4 h-4" />
      </a>
      
      <a href="/" className="flex items-center p-3 hover:bg-blue-500/30 rounded-lg">
        <ShoppingCart className="w-5 h-5 mr-3" />
        <span>Order management</span>
      </a>
      
      <a href="/" className="flex items-center p-3 hover:bg-blue-500/30 rounded-lg">
        <Tag className="w-5 h-5 mr-3" />
        <span>Discount and promotions</span>
      </a>
    </nav>
    
    <div className="absolute bottom-8 w-52 space-y-4">
      <a href="/" className="flex items-center p-3 hover:bg-blue-500/30 rounded-lg">
        <LogOut className="w-5 h-5 mr-3" />
        <span>Log out</span>
      </a>
      
      <div className="flex items-center p-3">
        <div className="w-8 h-8 bg-gray-300 rounded-full mr-3"></div>
        <span>Daniel Oludare</span>
      </div>
    </div>
  </div>
);

const BookCard = ({ title, author, reviews, ratings, image }) => (
  <div className="bg-white font-font1 text-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex justify-between items-center cursor-pointer">
    <div className="flex items-center space-x-4">
      <img src={image} alt={title} className="w-16 h-20 object-cover rounded" />
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">by {author}</p>
        <div className="flex items-center space-x-4 mt-1">
          <span className="text-sm text-gray-500">{reviews} reviews</span>
          <span className="text-sm text-gray-500">{ratings} ratings</span>
          <div className="flex text-yellow-400">★★★★★</div>
          <span>{ratings}.0</span>
        </div>
      </div>
    </div>
    <ChevronDown className="w-6 h-6 text-gray-400" />
  </div>
);

const ProgressCard = ({ title, author, progress, image }) => (
  <div className="flex items-center space-x-4 p-3">
    <img src={image} alt={title} className="w-12 h-16 object-cover rounded" />
    <div className="flex-1">
      <h4 className="font-medium">{title}</h4>
      <p className="text-sm text-gray-600">by {author}</p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
        <div 
          className="bg-blue-500 h-2 rounded-full" 
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
    <span className="text-sm text-gray-600">{progress}%</span>
  </div>
);

const AuthorDashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <main className="flex-1 p-8">
        <div className="bg-gradient-to-r from-blue-900 to-cyan-500 text-white p-8 rounded-2xl flex justify-between items-center mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-2">Your books sales and management</h2>
            <p className='text-customWhite text-xs font-font1'>Engage your  book store and make sales everyday.</p>
          </div>
         
        </div>

        <h2 className="text-xl font-semibold mb-4">Your Books</h2>
        
        <div className="space-y-4 mb-8">
          <BookCard 
            title="The Answer Is"
            author="Alex Trebek"
            reviews={100}
            ratings={50}
            image="/popularbook4.png"
          />
          <BookCard 
            title="The Song of Achilles"
            author="Madeline Miller"
            reviews={100}
            ratings={50}
            image="/popularbook3.png"
          />
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-semibold mb-4">Sold Books</h3>
            <ProgressCard 
              title="The Answer Is"
              author="Alex Trebek"
              progress={30}
              image="/popularbook4.png"
            />
            <ProgressCard 
              title="The Song of Achilles"
              author="Madeline Miller"
              progress={80}
              image="/popularbook3.png"
            />
          </div>

          <div className="bg-white p-6 rounded-xl">
            <h3 className="font-semibold mb-4">Read Books</h3>
            <ProgressCard 
              title="The Answer Is"
              author="Alex Trebek"
              progress={50}
              image="/popularbook4.png"
            />
            <ProgressCard 
              title="The Song of Achilles"
              author="Madeline Miller"
              progress={20}
              image="/popularbook3.png"
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AuthorDashboard;