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