import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";
import './SeeAllParticularSubmission.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
export default function SeeAllParticularSubmission(){
    const navigate=useNavigate();
    interface submission{
        title:string,
        description:string,
        userCode:string,
        createdAt:Date,
    }
    const [data,setData]=useState<submission[]>([]);
    const location=useLocation();
    const harsh=location?.state.har;
    const send={title:harsh?.title};
    useEffect(()=>{
        const fetch=async()=>{
            try{
                const response=await axios.post('http://localhost:5000/api/submit/submission',send,{withCredentials:true});
                if(response.data.message=== 'successfull'){
                    setData(response.data.data);
                }
            }catch(err){
                const error=err as AxiosError<{message:string}>
                if(error.response?.data?.message=== 'provide proper detail'){
                    alert('something went wrong');
                }else if(error.response?.data?.message=== 'no submission yet'){
                    alert('no submission yet');
                }
            }
        };
        fetch();
    });
    return(
        <>
        <motion.header className="hea"
      >
   <div className="header-left">
    <span onClick={()=>navigate('/HomePage')}  className="header-item">CodeVerdict</span>
  </div>
    <div className="header-center">
    <span onClick={()=>navigate('/HomePage')} className="header-item">Home</span>
    <span onClick={()=>navigate('/ProblemPage')} className="header-item">Problems</span>
    <span onClick={()=>navigate('/ContestPage')} className="header-item">Contest</span>
    <span onClick={()=>Swal.fire({
       icon: "info",
    title: "Leaderboard",
    text: "Leaderboard will be added soon",
    timer: 1000,
    showConfirmButton: false,
    background: "#0b1b2b",
    color: "#e2e8f0",
    })} className="header-item">Leaderboard</span>
  </div>
  <div className="header-right">
    <span onClick={()=>navigate('/ProfilePage')} className="header-item">Profile</span>
  </div>
     </motion.header>
        <div className="st">
               <div className="submission-page">
        <h1>This are all the submission of this question</h1>

        {
            data.map((all,index)=>(
                <div className="submission-card" key={index}>
                    <p>Title:{all?.title}</p>
                    <p>Description:{all?.description}</p>
                    <pre>{all?.userCode}</pre>
                    <p>Submitted On:{new Date(all?.createdAt).toLocaleDateString()}</p>
                </div>
            ))
        }
        </div>
        </div>
      </>
    );
}