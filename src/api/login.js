const efetuarLogin = async (email, senha) => {

    const cabecalho = {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: senha
        }),
        headers:{
            'Content-Type': "application/json"
        }
    }

    const loginHTTP = await(fetch("https://reqres.in/api/login", cabecalho));
    const respostaJson = await loginHTTP.json();
    return respostaJson
    
  }

export default efetuarLogin;