const dummyID = '5fcac6d4c0549154953906dc';

const getPostagens = async (callback) => {

    const cabecalho = {
        method: "GET",
        headers:{
            'Content-Type': "application/json",
            'app-id': dummyID
        }
    }

    const feedHTTP = await(fetch("https://dummyapi.io/data/api/post", cabecalho));
    const respostaJson = await feedHTTP.json();
    //console.log(respostaJson.data)
    callback(respostaJson.data);

}

export default getPostagens;