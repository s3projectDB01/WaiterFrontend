import React, { useState } from 'react';

export function GenerateQr(){
    const [qr, getqr] = useState("https://picsum.photos/200");
    //const [tableNr, setTableNr] = useState("");
    const [nr, oneup] = useState(0);
   
    return(
        <div>
            <button
                    onClick={() => getQrCode()}
                >
                Create Qr code
            </button>
            <div>
                <img src={qr} alt="qr"/>
                <h1>{nr}</h1>
            </div>
        </div>
    );
    
    async function getQrCode(){
        //const response = await fetch("https://localhost:6001/QrCode");
        oneup(nr + 1)
        getqr("https://localhost:6001/QrCode/" + nr);
    }
}


