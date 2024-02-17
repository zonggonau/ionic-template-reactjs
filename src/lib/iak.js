import md5 from 'md5';


const getBalance = async () => {
    const req = await fetch(process.env.REACT_APP_IAK_API_DEV + '/api/check-balance', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": process.env.REACT_APP_IAK_USERNAME,
            "sign": md5(process.env.REACT_APP_IAK_MD5 + 'bl')
        })
    })
    const { data } = await req.json();
    return data.balance;
}


const getPriceList = async () => {
    const req = await fetch(process.env.REACT_APP_IAK_API_DEV + '/api/pricelist', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "username": process.env.REACT_APP_IAK_USERNAME,
            "sign": md5(process.env.REACT_APP_IAK_MD5 + 'pl'),
            "status": "all"
        })
    })
    const { data } = await req.json();
    return data.pricelist
}



export { getBalance, getPriceList }

