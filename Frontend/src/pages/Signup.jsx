import { useState } from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const navigate = useNavigate()

  const clearForm = () => {
        setName("")
        setEmail("")
        setPass("")
        setConfirmPass("")
  }

  const handlename = ((evt) => {
    setName(evt.target.value)
  })

  const handleemail = ((evt) => {
    setEmail(evt.target.value)
  })

  const handlepass = ((evt) => {
    setPass(evt.target.value)
  })

  const handleconfirmpass = ((evt) => {
    setConfirmPass(evt.target.value)
  })

  const handleSignup = () => {

    if(!name.trim() || !email.trim() || !pass.trim() || !confirmPass.trim()) {
        alert("Please Fill in all fields")
        return
    }

    if(pass !== confirmPass){
        alert("Passwords do not match")
        return
    }

    axios.post("https://login-page-feys.onrender.com/signup", {"name":name, "email":email, "pass":pass})
    .then((res) => {
      if(res.data.success){
        alert("Signup Successful! Please login.")
        clearForm()
        navigate("/")
      }else{
        alert(res.data.message)
        clearForm()
      }
    })
    .catch((err) => {
        if(err.response && err.response.data){
            alert(err.response.data.message)
            clearForm()
        }else{
            console.log(err)
            alert("Someting went wrong")
            clearForm()
        }
        
    })
  }

  return (
    // <div>
    //     <h2>Sign Up</h2>
    //     <label htmlFor="name">Name: </label>
    //     <input type="text" name="name" id='name' placeholder='Enter the Name' value={name}
    //     onChange={handlename} /><br /><br />
    //     <label htmlFor="email">Email: </label>
    //     <input type="email" name="email" id='email' placeholder='Enter the Email' value={email}
    //     onChange={handleemail} /><br /><br />
    //     <label htmlFor="newPassword">New Password: </label>
    //     <input type="password" name="pass" id='newPassword' placeholder='New Password' value={pass}
    //     onChange={handlepass} /> <br /> <br />
    //     <label htmlFor="confirmpassword">Confirm Password: </label>
    //     <input type="password" name="pass" id='confirmpassword' placeholder='Confirm Password' value={confirmPass}
    //     onChange={handleconfirmpass} /> <br /> <br />
    //     <button onClick={handleSignup} >SignUp</button>
    //     <p>Back to <Link to="/">Login</Link></p>
    // </div>
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center"
     style={{ backgroundImage: "url('https://images.unsplash.com/photo-1505238680356-667803448bb6')" }}>
  <div className="bg-black bg-opacity-70 p-8 rounded-2xl shadow-lg w-full max-w-md">
    <h2 className="text-3xl font-bold text-white text-center mb-6">Sign Up</h2>

    <label htmlFor="name" className="block text-gray-300 mb-2">Name:</label>
    <input type="text" id="name" value={name}
      className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handlename} />

    <label htmlFor="email" className="block text-gray-300 mb-2">Email:</label>
    <input type="email" id="email" value={email}
      className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handleemail} />

    <label htmlFor="newPassword" className="block text-gray-300 mb-2">New Password:</label>
    <input type="password" id="newPassword" value={pass}
      className="w-full p-3 mb-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handlepass} />

    <label htmlFor="confirmpassword" className="block text-gray-300 mb-2">Confirm Password:</label>
    <input type="password" id="confirmpassword" value={confirmPass}
      className="w-full p-3 mb-6 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={handleconfirmpass} />

    <button onClick={handleSignup}
      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition">
      Sign Up
    </button>

    <p className="text-gray-300 mt-4 text-center">
      Back to <Link to="/" className="text-blue-400 hover:underline">Login</Link>
    </p>
  </div>
</div>
  )
}

export default Signup