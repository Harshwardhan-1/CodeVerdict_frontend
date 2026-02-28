import {useNavigate } from "react-router-dom";
import './HomePage.css';
import { useEffect } from "react";
import { useState } from "react";
import { motion,useMotionValue,animate } from "framer-motion";
import axios, { AxiosError } from "axios";
import Swal from "sweetalert2";
export default function HomePage() {
  const navigate = useNavigate();

const [questionCount,setQuestionCount]=useState(0);
  useEffect(()=>{
    const fetch=async()=>{
    try{
      const response=await axios.get('http://localhost:5000/api/newQuestion/getQuestionCounts',{withCredentials:true});
      if(response.data.message=== 'successfull'){
        setQuestionCount(response.data.data.count);
      }
    }catch(err){
      const error=err as AxiosError<{message:string}>
      if(error.response?.data?.message=== 'no question find'){
        alert('no question find');
      }
    }
    };
    fetch();
  })

const [displayCount,setDisplayCount]=useState(0);

  const count=useMotionValue(0);
  useEffect(() => {
    const controls = animate(count, questionCount,{  
      duration: 0.3, 
      onUpdate(value) {
        setDisplayCount(Math.floor(value)); 
      }
    });

    return () => controls.stop(); 
  },[count,questionCount]);


  const [displayTopicCount,setDisplayTopicCount]=useState(0);
const topicCounts=useMotionValue(0);
  useEffect(()=>{
    const controls=animate(topicCounts,20,{
      duration:0.4,
      onUpdate(value){
        setDisplayTopicCount(Math.floor(value));
      }
    });
    return ()=>controls.stop();
  },[topicCounts]);
  return (
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
      <div className="home">
        <section className="hero">
          <h1 className="hero-title">
            Become a Better Programmer
          </h1>
          <p className="hero-subtitle">
            Practice coding problems, prepare for interviews, and compete with developers worldwide.
          </p>

          <div className="hero-actions">
            <motion.button className="primary-btn"
              onClick={()=> navigate("/ProblemPage") }
            >Start Solving</motion.button>
            <motion.button className="secondary-btn"
              onClick={()=> navigate("/ProblemPage")}
            >Explore Problems</motion.button>
          </div>
        </section>




        <motion.section className="stats"
        initial={{y:40,opacity:0}}
        animate={{y:0,opacity:1}}
        transition={{duration:0.8,ease:"easeIn"}}
        viewport={{once:true,amount:0.3}}
>



          <div className="stat-card"
          
          >
            <motion.h2>{displayCount}+</motion.h2>
            <p>Problems</p>
          </div>
          
          <div className="stat-card"
          
          >
            <motion.h2>{displayTopicCount}+</motion.h2>
            <p>Topics</p>
          </div>
          <div className="stat-card">
            <h2>Weekly</h2>
            <p>Contests</p>
          </div>
          <div className="stat-card">
            <h2>Global</h2>
            <p>Leaderboard</p>
          </div>
        </motion.section>

        <section className="features">
          <motion.div className="feature-card"
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true,amount:0.3}}
          >
            <h3>Structured Learning</h3>
            <p>
              Solve problems by topic and difficulty to build strong fundamentals.
            </p>
          </motion.div>

          <motion.div className="feature-card"
          initial={{opacity:0,y:50}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8}}
          viewport={{once:true,amount:0.3}}
          >
            <h3>Interview Preparation</h3>
            <p>
              Curated problems asked by top tech companies.
            </p>
          </motion.div>

          <motion.div className="feature-card"
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          transition={{duration:0.8,ease:"easeInOut"}} 
          viewport={{once:true,amount:0.3}}
          >
            <h3>Compete & Improve</h3>
            <p>
              Join contests and track your progress on the leaderboard.
            </p>
          </motion.div>
        </section>

        <motion.section className="laset"
        initial={{y:50,opacity:0}}
        whileInView={{y:0,opacity:1}}
        transition={{duration:0.8,ease:"easeInOut"}}
        viewport={{once:true,amount:0.3}}
        >
          <h1>Ready To Level Up Your Coding Skills</h1>
          <button onClick={()=>navigate("/ProblemPage")} className="hr">Start practicing now</button>
        </motion.section>
      </div>
    </>
  );
}