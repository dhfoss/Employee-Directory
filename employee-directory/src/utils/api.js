import axios from 'axios';

const getUsers = () => {
    return new Promise ((resolve, reject) => {
        axios.get('https://randomuser.me/api/?results=100')
        .then(res => {
            resolve(res.data.results)
        })
        .catch(err => {
            reject(err);
        })
    })
}
// My first attempt at writing a promise.  But it did not have a reject parameter
// const getUsers = () => {
//     return new Promise(resolve => {
//         resolve(
//             axios.get('https://randomuser.me/api/?results=100')
//             .then(res => {
//                 return res.data.results
//             })
//         )
//     })
// }

export default getUsers;