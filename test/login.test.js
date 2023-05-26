const fetch = require('node-fetch2');

it("Should test validity of the token",async ()=>{
    let token =  "";

    const options = {
        method:'POST',
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify({
            userName:"scmurdock@gmail.com",
            password:"P@ssw0rd"
        })
    };
    const response = await fetch('https://dev.stedi.me/login',options);
    token = await response.text();
    expect(token.length).toBe(36);
});