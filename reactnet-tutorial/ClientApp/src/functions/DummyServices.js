export async function fetchDataFromDataBase(action) {
    return new Promise((resolve,reject) => {
        fetch("dummydata/"+action).then(res => {
            if (res.ok) {
                try {
                    res.json().then(data => resolve(data));
                } catch (error) {
                    reject(error)
                }

            } else {
                reject("error :" + res.status)
            }
        });
    });

}

export async function deleteDataFromDataBase(action,id) {
    return new Promise((resolve,reject) => {
        fetch("dummydata/"+action + "/"+id, {
            method: 'DELETE'
          }).then(res => {
            if (res.ok) {
                try {
                    res.json().then(data => resolve(data));
                } catch (error) {
                    reject(error)
                }

            } else {
                reject("error :" + res.status)
            }
        });
    });

}

export async function createUser(user) {
    return new Promise((resolve,reject) => {
        fetch("dummydata/CreateUser", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(user)
          }).then(res => {
            if (res.ok) {
                try {
                    res.json().then(data => resolve(data));
                } catch (error) {
                    reject(error)
                }

            } else {
                reject("error :" + res.status)
            }
        });
    });

}

export async function updateUser(user) {
    return new Promise((resolve,reject) => {
        fetch("dummydata/UpdateUser", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify(user)
          }).then(res => {
            if (res.ok) {
                try {
                    res.json().then(data => resolve(data));
                } catch (error) {
                    reject(error)
                }
            } else {
                reject("error :" + res.status)
            }
        });
    });
}