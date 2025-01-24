import React, { Component, useState, useEffect } from "react";
import Loading from "./components/Loading.jsx";

const NewsApp = () => {

    //state
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('10');
    const [url, setUrl] = useState(`https://api.randomuser.me/?nat=KE&results=10`);
    const [loading, setLoading] = useState(true);

    const fetchNews = () => {
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(data => (setNews(data.results), setLoading(false)))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        fetchNews();
    }, [url]);


    const handleChange = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setUrl(`https://api.randomuser.me/?nat=KE&results=${searchQuery}`);
    }

    const showLoading = () => ( loading ? <Loading message="Loading..." /> : "")

    const searchForm = () => (
        <form onSubmit={handleSubmit}>
            <input type={'text'} value={searchQuery} onChange={handleChange}/>
            <button>Submit</button>
        </form>
    )

    const showNews = () => (
        news.map((item, idx) => (<p key={idx}>{item.name.first}</p>))
    );

    return (
        <div>
            <h1>News App</h1>
            { showLoading() }
            { searchForm() }
            { showNews() }
        </div>
    )
}

export default NewsApp;