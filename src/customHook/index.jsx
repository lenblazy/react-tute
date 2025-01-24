import {useEffect, useState} from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url);
            const data = await response.json();
            if (data && data.length) setData(data);
        }
        fetchData();
    }, [])

    return {data}
}

export default UseFetch;