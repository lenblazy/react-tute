import React, { Component, useState, useEffect } from "react";

const NewsApp = () => {

    //state
    const [news, setNews] = useState([]);
    const [searchQuery, setSearchQuery] = useState('10');
    const [url, setUrl] = useState(`https://api.randomuser.me/?nat=KE&results=10`);

    const fetchNews = () => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setNews(data.results)
            })
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

    return (
        <div>
            <h1>News App</h1>
            <form onSubmit={handleSubmit}>
                <input type={'text'} value={searchQuery} onChange={handleChange} />
                <button>Submit</button>
            </form>
            {
                news.map((item, idx) => (
                    <p key={idx}>{item.name.first}</p>
                ))
            }
        </div>
    )
}

export default NewsApp;