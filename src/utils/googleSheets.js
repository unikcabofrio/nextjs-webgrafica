'use server'

let cache = null;
let lastFetchTime = 0;


export async function getAPI(sheetName,uuid = "") {
    const currentTime = Date.now();


    if (sheetName === "products" && cache && currentTime - lastFetchTime < 1800000) {
        console.log("Retornando dados do cache");
        return cache;
    }

    try {
        const sheet_url = process.env.SHEET_URL
        const sheet_id = process.env.SHEET_ID
        const URL = sheet_url.replace('::ID', sheet_id)

        const headers = new Headers();
        headers.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "sheetName": sheetName,
            "type": "ser",
            "uuid":uuid
        });

        const requestOptions = {
            method: "POST",
            headers: headers,
            body: raw,
            redirect: "follow"
        };

        const response = await fetch(URL, requestOptions)
        const data = await response.json();
        
        // Atualiza o cache e o horário da última atualização
        if (sheetName === "products"){
            cache = data;
            lastFetchTime = currentTime;
        }
        

        console.log("Dados atualizados e armazenados no cache");
        return data;

    } catch (error) {
        console.log(error)
        return error
    }
}
