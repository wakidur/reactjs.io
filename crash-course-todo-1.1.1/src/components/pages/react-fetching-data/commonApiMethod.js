const Constants = {
}; // Declare constant

function get(url) {
    return new Promise((resolve, reject) => {
        // Unfortunately, the native fetch API doesn't use its catch block for every erroneous status code.
        fetch(url).then((result) => {
            if (result.ok) {
                resolve(result.json());

            } else {
                throw new Error('Something went wrong ...');
            }
        }).catch((err) => {
            reject(err);
        });
    });
}


Constants.getFetchApiUrl = "https://jsonplaceholder.typicode.com/todos?_limit=20";
// Expose all dependency
module.exports = {
    Constants,
    get,
}