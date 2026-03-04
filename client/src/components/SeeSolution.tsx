import { useLocation } from "react-router-dom";
import './SeeSolution.css';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
export default function SeeSolution(){
    const navigate=useNavigate();
    interface seeSolution{
        name:string,
        problemTitle:string,
        userCode:string,
        approach:string,
        date:Date,
    }
    const location=useLocation();
    const harsh=location.state?.ra as seeSolution[];    
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
            <span onClick={()=>
            Swal.fire({
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
        <div className="see-container">
        <h1>This Are The List Of Submission</h1>
        {
            harsh.map((all,index)=>(
                <div className="submission-card" key={index}>
                    <p>Submitted By:{all?.name}</p>
                    <p>Problem Name:{all?.problemTitle}</p>
                    <p>Date Of Submission{new Date(all?.date).toLocaleDateString()}</p>
                    <p>Approach:{all?.approach}</p>
                    <pre className="code-box"> <code>{all.userCode}</code></pre>
                </div>
            ))
        }
        </div>
        </>
    );
}