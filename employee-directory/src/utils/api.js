import axios from 'axios';

const getUsers = () => {
    return new Promise(resolve => {
        resolve(
            axios.get('https://randomuser.me/api/?results=100')
            .then(res => {
                return res.data.results
            })
        )
    })
} 

export default getUsers;


// function API() {
    // axios.get('https://randomuser.me/api/?results=100')
    // .then(res => {
    //     setEmployees(res.data.results);
    // })
// }
