import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './ProblemPage.css';

interface Question{
    _id: string;
    title: string;
    description: string;
    constraint: string;
    sampleInput: string;
    sampleOutput: string;
    difficulty: string;
    topic: string;
    successRate?: number;
}

export default function ProblemPage() {
    const navigate = useNavigate();
    const [data, setData] = useState<Question[]>([]);
    const [search, setSearch] = useState<string>('');
    const [selectDiff, setSelectDiff] = useState<string>('All Difficulties'); 
    const [selectTopic, setSelectTopic] = useState<string>('All Topics');     

    useEffect(() => {
        const fetch = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/newQuestion/seeAllQuestion', {withCredentials:true});
                if(response.data.message === 'all question'){
                    setData(response.data.data.map((q: Question) => ({
                        ...q,
                        successRate: q.difficulty.toLowerCase() === "easy" ? Math.floor(Math.random()*26+65)
                                    : q.difficulty.toLowerCase() === "medium" ? Math.floor(Math.random()*26+40)
                                    : Math.floor(Math.random()*26+15)
                    })));
                }
            } catch(err) {
                console.log(err);
            }
        };
        fetch();
    }, []);

    const filteredData = data.filter(item => {
        const matchedSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchedDiff = selectDiff === "All Difficulties" || item.difficulty.toLowerCase() === selectDiff.toLowerCase();
        const matchedTopic =
            selectTopic === "All Topics" || 
            item.topic.split(',').map(t => t.trim().toLowerCase()).includes(selectTopic.toLowerCase());
        return matchedSearch && matchedDiff && matchedTopic;
    });

    const handleTitle = (all: Question) => navigate('/ParticularProblem', {state:{harsh: all}});
    const handleContest = () => navigate('/ContestPage');
    const handleProfile = () => navigate('/ProfilePage');
    const home = () => navigate('/HomePage');
    const handleCode = () => navigate('/HomePage');

    return (
        <div className="problems-page">
            <header className="problem-header-form">
                <form>
                    <span onClick={handleCode} className="header-item">CodeVerdict</span>
                    <span onClick={home} className="header-item">Home</span>
                    <span className="header-item">Problems</span>
                    <span onClick={handleContest} className="header-item">Contest</span>
                    <span onClick={handleProfile} className="header-item">Profile</span>
                </form>
            </header>
            <div className="problems-filters">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search problems"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <select
                    className="filter-select"
                    value={selectDiff}
                    onChange={(e) => setSelectDiff(e.target.value)}
                >
                    <option>All Difficulties</option>
                    <option>Easy</option>
                    <option>Medium</option>
                    <option>Hard</option>
                </select>
                <select
                    className="filter-select"
                    value={selectTopic}
                    onChange={(e) => setSelectTopic(e.target.value)}
                >
                    <option>All Topics</option>
                    <option>Array</option>
                    <option>String</option>
                    <option>Hashing</option>
                    <option>Dynamic Programming</option>
                    <option>MergeSort</option>
                </select>
            </div>
            <div className="problems-table">
                <div className="table-header">
                    <span>S.No</span>
                    <span>Title</span>
                    <span>Difficulty</span>
                    <span>Acceptance</span>
                </div>
                {filteredData.map((all, index) => (
                    <div className="table-row" key={index} onClick={() => handleTitle(all)}>
                        <span className="serial">{index + 1}</span>
                        <span className="problem-title">{all.title}</span>
                        <span className={`difficulty ${all.difficulty.toLowerCase()}`}>{all.difficulty}</span>
                        <span className="acceptance">{all.successRate}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
}