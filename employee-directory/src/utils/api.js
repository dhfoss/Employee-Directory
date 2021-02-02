const api = () => {

        fetch('https://randomuser.me/api/')
        .then(res => res.json())
        .then(data => {
            return data;
        })
}

api();

export default api;