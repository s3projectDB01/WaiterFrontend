import React, { useState } from 'react';

export function GenerateQr(){
    const [qr, setQr] = useState("https://picsum.photos/200");
    const [tableNr, setTableNr] = useState();
    const [cusName, setCusName] = useState("");
    const [sessionId, setSessionId] = useState("");

    const onCusNameUpdate = (e) => {
        setCusName(e.target.value);
    }
    const onTableNrUpdate = (e) => {
        setTableNr(parseInt(e.target.value));
    }

     
    const CreateSession = (e) =>{
        e.preventDefault();

        const isTableNrProvided = tableNr && tableNr !== "";
        const iSCusNameProvided = cusName && cusName !== "";

        if(isTableNrProvided && iSCusNameProvided){
            const newSession = {
                tableNumber: tableNr, 
                name: cusName
            }
    
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newSession)
            };
    
            fetch(window.globalConfig.API_URL + "/Order/Session", requestOptions)
                .then(response => response.json())
                .then(data => {
                    setSessionId(data.id)
                    setQr(window.globalConfig.API_URL + "/Order/Session/GetQR/" + data.id);
                })
        } else {
            alert('Please insert a table nr and name');
        }   
    }    
   
    return(
        <div>
            <div>
                <form>
                    <center>
                    <label>Name</label>
                    <br/>
                    <input
                        value = {cusName}
                        onChange = {onCusNameUpdate}
                    />
                    <br/>
                    <label>Table Nr</label>
                    <br/>
                    <input   
                        value = {tableNr}
                        onChange = {onTableNrUpdate}
                    />
                    <br/>
                    <button onClick={CreateSession} >Create Customer QR</button>
                    </center>
                </form>
            </div>

            <br/>
            <div>
                {/* <button
                        onClick={() => getQrCode()}
                    >
                    Create Qr code
                </button> */}
                <div>
                    <img src={qr} alt="qr"/>
                    <h1>{sessionId}</h1>
                </div>
            </div>

        </div>
    );
}


