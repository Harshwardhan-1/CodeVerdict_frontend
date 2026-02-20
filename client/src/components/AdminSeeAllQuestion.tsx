import { useEffect } from "react";
import axios from "axios";
import { AxiosError } from "axios";
import { useState } from "react";
import './AdminSeeAllQuestion.css';
export default function AdminSeeAllQuestion(){
    interface showQuestion{
        _id:string,
        title:string,
        description:string,
        constraint:string,
        sampleInput:string,
        sampleOutput:string,
        difficulty:string,
        topic:string,
        points:number,
    }
    const [data,setData]=useState<showQuestion[]>([]);
    const [selectedId,setSelectedId]=useState<string>('');
    const [updateTite,setUpdateTitle]=useState<string>('');
    const [updateDescription,setUpdateDescription]=useState<string>('');
    const [UpdateConstraint,setUpdateConstraint]=useState<string>('');
     const [updateSampleInput,setSampleInput]=useState<string>('');
      const [updateSampleOutput,setSampleOutput]=useState<string>('');
      const [updateDifficult,setUpdateDifficult]=useState<string>('');
      const [updateTopic,setUpdateTopic]=useState<string>('');
      const [updatePoints,setUpdatePoints]=useState<number>(0);

    useEffect(()=>{
        const fetch=async()=>{
            try{
                const response=await axios.get('http://localhost:5000/api/newQuestion/getAllAdminQuestion',{withCredentials:true});
                if(response.data.message=== 'successfull'){
                    setData(response.data.data);
                }
            }catch(err){
                const error=err as AxiosError<{message:string}>
                if(error.response?.data?.message=== 'something went wrong'){
                    alert('something went wrong');
                }else if(error.response?.data?.message=== 'no question to show'){
                    alert('no question to show first add question');
                }
            }
        };
        fetch();
    },[])


    const handleDelete=async(_id:string)=>{
        const send={id:_id};
        try{
            const response=await axios.post('http://localhost:5000/api/newQuestion/deleteQuestion',send,{withCredentials:true});
            if(response.data.message=== 'delete successfull'){
                alert('delete successfull');
            }
        }catch(err){
            const error=err as AxiosError<{message:string}>
            if(error.response?.data?.message=== 'provide proper detail'){
                alert('provide proper detail');
            }else if(error.response?.data?.message=== 'question not found'){
                alert('question not found');
            }
        }
    }

const handleUpdate=async(all:showQuestion)=>{
    setSelectedId(all._id);
    setUpdateTitle(all?.title);
    setUpdateDescription(all?.description);
    setUpdateConstraint(all?.constraint);
    setSampleInput(all?.sampleInput);
    setSampleOutput(all?.sampleOutput);
    setUpdateDifficult(all?.difficulty);
    setUpdateTopic(all?.topic);
    setUpdatePoints(all?.points);
}

const submitUpdate=async()=>{
    const send={id:selectedId,title:updateTite,description:updateDescription,constraint:UpdateConstraint,sampleInput:updateSampleInput,sampleOutput:updateSampleOutput,difficulty:updateDifficult,topic:updateTopic,points:updatePoints};
    try{
        const response=await axios.post('http://localhost:5000/api/newQuestion/updateQuestion',send,{withCredentials:true});
        if(response.data.message=== 'successfull'){
            alert('successfull updated');
            setSelectedId('');
        }
    }catch(err){
        const error=err as AxiosError<{message:string}>
        if(error.response?.data?.message=== 'provide proper detail'){
            alert('provide proper detail');
        }else if(error.response?.data?.message=== 'question not found'){
            alert('question not found');
        }
    }
}
  
    return(
        <>
         <div className="admin-question-page">
    <h1 className="page-title">All Questions (Admin Panel)</h1>

    <div className="question-grid">
      {data.map((all, index) => (
        <div key={index} className="question-card">
          
          <p className="question-id">ID: {all?._id}</p>
          <h2 className="question-title">{all?.title}</h2>
          
          <p><strong>Description:</strong> {all?.description}</p>
          <p><strong>Constraint:</strong> {all?.constraint}</p>
          <p><strong>Sample Input:</strong> {all?.sampleInput}</p>
          <p><strong>Sample Output:</strong> {all?.sampleOutput}</p>
          
          <div className="meta-info">
            <span className="difficulty">{all?.difficulty}</span>
            <span className="topic">{all?.topic}</span>
            <span className="points">{all?.points} pts</span>
          </div>

          <div className="btn-group">
            <button className="delete-btn" onClick={() => handleDelete(all?._id)}>
              Delete
            </button>
            <button className="update-btn" onClick={() => handleUpdate(all)}>
              Update
            </button>
          </div>

          {selectedId === all._id && (
            <div className="update-form">
              <input value={updateTite} onChange={e => setUpdateTitle(e.target.value)} placeholder="Title" />
              <textarea value={updateDescription} onChange={e => setUpdateDescription(e.target.value)} placeholder="Description" />
              <input value={UpdateConstraint} onChange={e => setUpdateConstraint(e.target.value)} placeholder="Constraint" />
              <input value={updateSampleInput} onChange={e => setSampleInput(e.target.value)} placeholder="Sample Input" />
              <input value={updateSampleOutput} onChange={e => setSampleOutput(e.target.value)} placeholder="Sample Output" />
              <input value={updateDifficult} onChange={e => setUpdateDifficult(e.target.value)} placeholder="Difficulty" />
              <input value={updateTopic} onChange={e => setUpdateTopic(e.target.value)} placeholder="Topic" />
              <input type="number" value={updatePoints} onChange={(e) => setUpdatePoints(Number(e.target.value))} placeholder="Points" />

              <button className="save-btn" onClick={submitUpdate}>
                Save Update
              </button>
            </div>
          )}

        </div>
      ))}
    </div>
  </div>
        </>
    );
}