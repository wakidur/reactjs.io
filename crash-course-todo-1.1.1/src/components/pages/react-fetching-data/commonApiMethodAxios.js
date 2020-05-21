
import axios from 'axios';


function axiosGet(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then((result) => {
            resolve(result)
        }).catch((err) => {
            reject(err);
        });
    })

}

// Expose all dependency
module.exports = {
    axiosGet
}