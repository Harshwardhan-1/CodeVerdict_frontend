import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ProblemPage.css';
import { AxiosError } from 'axios';
export default function ProblemPage(){
    const navigate=useNavigate();
    interface Question{
        _id:string
        title:string,
        description:string,
        constraint:string,
        sampleInput:string,
        sampleOutput:string,
        difficulty:string,
        topic:string,
    }
    const [data,setData]=useState<Question[]>([]);
    const [search,setSearch]=useState<string>('');
    useEffect(()=>{
        const fetch=async()=>{
            try{
const response=await axios.get('https://codeverdict-backend.onrender.com/api/newQuestion/seeAllQuestion',{withCredentials:true});
if(response.data.message=== 'all question'){
    setData(response.data.data);
} 
            }catch(err){
                const error=err as AxiosError<{message:string}>
                if(error.response?.data?.message=== 'this are all the question'){
                    alert('this are all the question');
                }
            }
        };
        fetch();
    },[]);

    const handleTitle=async(all:Question)=>{
        navigate('/ParticularProblem',{state:{harsh:all}})
    }


    const mySubmission=async()=>{
        navigate('/AllSubmission');
    }

    const allPoints=async()=>{
        navigate('/AllPoints');
    }
    return(
        <>
          <div className="problem-page">
        <header className="problem-header">
          <button>Home</button>
          <button>Problems</button>
          <button onClick={allPoints}>Points</button>
          <button onClick={mySubmission}>My Submission</button>
          <button>Profile</button>
        </header>


         <h2>List Of Problems</h2>



        <input className='seacrh-box' type="text" placeholder='Search by problem name/title' value={search} onChange={(e)=>setSearch(e.target.value)}/>

    <div className="problem-list">
        {
            data.filter((item)=>
             item.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((all,index)=>(
                <div  className="problem-card" key={index}>
                    <span className="problem-number"> {index + 1}.</span>
                    <button onClick={()=>handleTitle(all)}>{all?.title}</button>
                    <span>{all.difficulty}</span>

                </div>
            ))
        }
        </div>
        </div>
        </>
    );
}