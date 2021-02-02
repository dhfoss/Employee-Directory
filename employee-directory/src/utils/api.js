import axios from 'axios';

const API = () => {
    return new Promise(resolve => {
        resolve(
            axios.get('https://randomuser.me/api/?results=100')
            .then(res => {
                return res.data.results
            })
        )
    })
} 

export default API;


// function API() {
    // axios.get('https://randomuser.me/api/?results=100')
    // .then(res => {
    //     setEmployees(res.data.results);
    // })
// }
