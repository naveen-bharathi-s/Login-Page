import React from 'react'
import { useLocation, Link } from 'react-router-dom'

const Success = () => {
  const location = useLocation()
  const {name} = location.state || {name:"guest"}
  return (
    // <div>
    //   <h2>Login Success</h2>
    //   <p>Welcome, <b>{name}</b></p>
    //   <p><Link to="/">Logout</Link></p>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}>
  <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-lg w-full max-w-md text-center">
    <h2 className="text-3xl font-bold text-green-400 mb-4">Login Success</h2>
    <p className="text-white text-lg mb-6">
      Welcome, <b className="text-blue-400">{name}</b>
    </p>
    <Link to="/" className="inline-block bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-lg transition">
      Logout
    </Link>
  </div>
</div>
  )
}

export default Success