    import {useState} from 'react';
import axios from 'axios';
import { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './SignInPage.css';
export default function SignInPage(){
    const location=useLocation();
    const navigate=useNavigate();
    const [gmail,setGmail]=useState('');
    const [password,setPassword]=useState('');
    const handle=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const send={gmail,password};
        try{
            const response=await axios.post('http://localhost:5000/add/new/SignIn',send,{withCredentials:true});
            if(response.data.message=== 'login successfully'){
                const user=response.data.data;
                 const redirectPath =new URLSearchParams(location.search).get("redirect");
                if(user?.role=== 'ADMIN'){
                    navigate('/AdminPage');
                    return;
                }
                if(redirectPath){
                    navigate(redirectPath);
                }
                else if(user?.role=== 'STUDENT'){
                    navigate('/HomePage');
                }
            }
        }catch(err){
            const error=err as AxiosError<{message:string}>;
            if(error.response?.data?.message=== 'provide proper detail'){
                alert('provide proper detail');
            }else if(error.response?.data?.message=== 'gmail not found'){
                alert('gmail not found');
                navigate('/');
            }else if(error.response?.data?.message=== 'something went wrong'){
                alert('something went wrong');
            }
        }
    }
     const [animKey, setAnimKey] = useState(0);
     const handleClick = (path: string) => {
    setAnimKey(prev => prev + 1); 
    navigate(path);
  };
    return(
        <>
         <motion.header className="headeraaaaa"
          key={animKey}
         initial={{y:-20,opacity:0}}
         animate={{y:0,opacity:1}}
         transition={{duration:0.2,ease:"easeOut"}}
         style={{ backgroundColor: "#0f172a" }}
         >
           
   <div className="header-left">
    <span onClick={()=>navigate('/SignInPage')}  className="header-item">CodeVerdict</span>
  </div>
    <div className="header-center">
    <span onClick={()=>handleClick('/SignInPage')} className="header-item">Home</span>
    <span onClick={()=>handleClick('/SignInPage')} className="header-item">Problems</span>
    <span onClick={()=>handleClick('/SignInPage')} className="header-item">Contest</span>
    <span onClick={()=>handleClick('/SignInPage')} className="header-item">Leaderboard</span>
  </div>
  <div className="header-right">
    <span onClick={()=>handleClick('/SignInPage')} className="header-item">Profile</span>
  </div>
     </motion.header>
        <div className='signin-page-wrapper'>
        <div className="signin-page">
        <h1>Welcome Back</h1>
        <p>Enter your Credentials to access your account</p>
        <form onSubmit={handle}>
            <label>Email</label>
          <input type="email" placeholder='Enter your email here' value={gmail} onChange={(e)=>setGmail(e.target.value)}/>
          <label>Password</label>
          <input type="password" placeholder='Enter your password here' value={password} onChange={(e)=>setPassword(e.target.value)} />
              <button type='submit'>Login</button>
              <div className="signup-link">
          Don't have an account?{" "}
          <Link to="/">SignUp</Link>
        </div>
            </form> 
        </div>
        </div>
        </>
    );
}