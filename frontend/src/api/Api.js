import axios from "axios";

export async function getData(url, token)
{
    return await axios.get(url, {
        headers: { Authorization: `Bearer ${ token }` }
    }).then(response => {
        return response.data.data;
    });
}

export async function insertData(url, token, data)
{
    return await axios.post(process.env.REACT_APP_CLIENTS_URL, {data: data}, {
        headers: { 'Content-Type': 'application/json', 
                    'Authorization': `Bearer ${process.env.REACT_APP_CLIENTS_TOKEN}` }
    })
}

