const dummyID = '5fcac6d4c0549154953906dc';

const getNotificacoes = async (callback) => {

    const cabecalho = {
        method: "GET",
        headers:{
            'Content-Type': "application/json",
            'app-id': dummyID
        }
    }

    const feedHTTP = await(fetch(`https://dummyapi.io/data/api/post/SFAt3mJK0qu4QOd9LgSX/comment?limit=10`, cabecalho));
    const respostaJson = await feedHTTP.json();
    //console.log(respostaJson)
    callback(respostaJson.data);

}

export default getNotificacoes;