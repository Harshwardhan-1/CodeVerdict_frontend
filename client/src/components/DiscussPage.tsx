import { useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { AxiosError } from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import './DiscussPage.css';
export default function DiscussPage(){
    const navigate=useNavigate();
    const location=useLocation();
    const harsh=location.state?.ram;
    const [approach,setApproach]=useState<string>('');
useEffect(()=>{
    if(!harsh?.title)return;
    const sendUseEff={title:harsh?.title};
    const fetch=async()=>{
        try{
            const response=await axios.post('http://localhost:5000/api/discuss/getDiscussion',sendUseEff,{withCredentials:true});
            if(response.data.message=== 'successfull'){
                setApproach(response.data.data.approach);
            }
        }catch(err){
            const error=err as AxiosError<{message:string}>
            if(error.response?.data?.message=== 'provide proper detail'){
                alert('provide proper detail');
                //change here
            }else if(error.response?.data?.message=== 'no discussions of this question'){
                alert('no discussion of this question');
            }
        }
    };
    fetch();
},[harsh?.title]);




    const handleSubmit=async(e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
const send={title:harsh?.title,userCode:harsh?.userCode,approach};
try{
    const response=await axios.post('http://localhost:5000/api/discuss/addDiscuss',send,{withCredentials:true});
    if(response.data.message=== 'successfully submitted'){
        Swal.fire({
            icon:"success",
            title:"successfully Submitted",
            text:"successfully submitted thanks for discussion",
            timer: 1000,
        background: "#0b1b2b",
        color: "#e2e8f0",
        })
    }
}catch(err){
    const error=err as AxiosError<{message:string}>
    if(error.response?.data?.message=== 'provide proper detail'){
        alert('provide proper detail');
    }else if(error.response?.data?.message=== 'approach must be atleast of 10 characters'){
        alert('approach must be atleast of 10 characters');
    }else if(error.response?.data?.message=== 'try some other question you have already discuss It'){
        alert('try some other question you have already discuss It');
    }else{
        alert("server problem");
    }
}
    }

    return(
        <>
         <header className="headera">
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
             </header>
           <div className="discuss-container">
      <div className="code-section">
        <h2>{harsh?.title}</h2>
       <pre className="code-box"><code>{harsh?.userCode}</code></pre>
       </div>
        <div className="discussion-section">
        <h2>Discuss Your Approach</h2>
<textarea placeholder="Explain your approach, logic, time complexity, edge cases..." value={approach} onChange={(e)=>setApproach(e.target.value)}/>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
      </div>
        </>
    );
}