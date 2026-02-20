import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import './SeeAllContest.css';
export default function SeeAllContest(){
    interface contest{
        _id:string,
        name:string,
        gmail:string,
        organizingDate:string,
        startingTimeOfContest:string,
        endingTimeOfContest:string,
        instructions:string,
        questions:string[],
    }
    const [data,setData]=useState<contest[]>([]);
    useEffect(()=>{
        const fetch=async()=>{
            try{
                const response=await axios.get('http://localhost:5000/api/contest/seeAllContest',{withCredentials:true});
                if(response.data.message=== 'got successfull'){
                    setData(response.data.data);
                }
            }catch(err){
                const error=err as AxiosError<{message:string}>
                if(error.response?.data?.message=== 'not found'){
                    alert('you dont add any contest of yours');
                }
            }
        };
        fetch();
    },[]);

    const deleteContest=async(_id:string)=>{
        const send={id:_id};
        try{
            const response=await axios.post('http://localhost:5000/api/contest/deleteContest',send,{withCredentials:true});
            if(response.data.message=== 'succssfully deleted'){
                alert('successfully deleted');
            }
        }catch(err){
            const error=err as AxiosError<{message:string}>
            if(error.response?.data?.message=== 'not found'){
                alert('contest not found');
            }else if(error.response?.data?.message=== 'provide proper detail'){
                alert('provide proper detail');
            }
        }
    }

    

    return(
        <>

    <div className="see-contest-wrapper">
        <h1>This are the list of all your contest</h1>
        {
            data.map((all,index)=>(
                <div className="contest-card" key={index}>
                   <p>Name:{all?.name}</p>
                    <p>Gmail:{all?.gmail}</p>
                    <p>Instruction:{all?.instructions}</p>
                    <p>Organizing Date:{new Date(all?.organizingDate).toLocaleDateString()}</p>
                    <p>Starting time of Contest:{new Date(all?.startingTimeOfContest).toLocaleTimeString("en-IN",{
                        hour:"2-digit",
                        minute:"2-digit",
                        hour12:true
                    })}</p>
                    <p>Ending Time Of Contest:{new Date(all?.endingTimeOfContest).toLocaleTimeString("en-IN",{
                        hour:"2-digit",
                        minute:"2-digit",
                        hour12:true,
                    })}</p>
                    <button onClick={()=>deleteContest(all?._id)}>Delete Contest</button>
                    <p>
  Join Link :<Link to={`http://localhost:5173/join/${all._id}`} target="_blank"
    rel="noopener noreferrer" style={{ color: "blue" }}>
    http://localhost:5173/join/{all._id}
  </Link>
</p>
                </div>
            ))
        }
        </div>
        </>
    );
}