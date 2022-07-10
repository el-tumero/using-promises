import axios from "axios";

const serverUrl = "http://localhost:3000" 



async function main(){
    const data = await getAllNumbers([1, 5, 6])
    console.log(data)
}


function getAllNumbers(numberArr:number[]){
    return Promise.all(numberArr.map(num => getNumber(num)))
}

function getNumber(num:number){
    return new Promise<number>((resolve, reject) => {
        axios.get(serverUrl+'/'+num).then(response => {
            // do poprawienia (typy, interfejsy)
            resolve(response.data.message)
        }).catch(error => {
            reject("Wrong argument given!")
        })
    })
}

export {getAllNumbers}

// exec
// main()