// const check = (() => {
  //   // let logindetails = axios.get(`http://localhost:3000/login?name=${user}&pass=${pass}`)
  //   let logindetails = axios.post("http://localhost:3000/login", {"name":user, "pass":pass})
  //   logindetails.then((data) => {
  //     // console.log(data.data)
  //     if(data.data === true){
  //       console.log("Login Success")
  //       navigate("/success")
  //     }else{
  //       console.log("Login Fail")
  //       navigate("/fail")
  //     }
  //   })
  // })

import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import Success from './pages/Success.jsx'

function App() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const navigate = useNavigate()

  const handleemail = ((evt) => {
    setEmail(evt.target.value)
  })

  const handlepass = ((evt) => {
    setPass(evt.target.value)
  })

  const handleLogin = () => {
    if( !email.trim() || !pass.trim()) {
        alert("Please Fill in all fields")
        return
    }

    axios.post("https://login-page-feys.onrender.com/", {"email":email, "pass":pass})
    .then((res) => {
      if(res.data.success){
        // alert("Login Successful!")
        navigate("/success", {state: {name: res.data.name}})
      }else{
        alert("User not found! Please Sign Up.")
        // navigate("/signup")
      }
    })
    .catch(err => console.log(err))
  }

  return (
    // <div>
    //     <h2 className="text-3xl font-bold underline">Login</h2>
    //     <label htmlFor="email">Email: </label>
    //     <input type="email" name="email" id='name' placeholder='Enter the Email' 
    //     onChange={handleemail} /><br /><br />
    //     <label htmlFor="password">Password : </label>
    //     <input type="password" name="pass" id='password' placeholder='New Password' 
    //     onChange={handlepass} /> <br /> <br />
    //     <button onClick={handleLogin}>Login</button>
    //     <p>New to Account ? <Link to="/signup">SignUp</Link></p>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" 
     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')" }}>
  <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="text-3xl font-bold text-white text-center mb-6">Login</h2>

    <label htmlFor="email" className="block text-gray-300 mb-2">Email:</label>
    <input type="email" id="email"
      className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handleemail} />

    <label htmlFor="password" className="block text-gray-300 mb-2">Password:</label>
    <input type="password" id="password"
      className="w-full p-3 mb-6 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handlepass} />

    <button onClick={handleLogin}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
      Login
    </button>

    <p className="text-gray-300 mt-4 text-center">
      New to Account? <Link to="/signup" className="text-blue-400 hover:underline">Sign Up</Link>
    </p>
  </div>
</div>

  )
}

export default App
