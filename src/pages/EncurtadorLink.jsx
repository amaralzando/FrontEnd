import React from "react";

import './style.css';
import $ from 'jquery';
// import IconBody from '../../assets/icon-body.png';
// import Iconheader from '../../assets/icon-header.png';

const EncurtadorLink = () => {

    function Encurtar() {
        //validar link
        var link = document.getElementById("input-url").value;
        if (!link) {
            alert("Informe um link válido!");
            return false;
        }
    
        //api key = 42b8c9a3036b4c8cb956ebbf5c847c86
    
        //Headers
        let headers = {
            "Content-Type": "application/json",
            "apikey": "42b8c9a3036b4c8cb956ebbf5c847c86"
        }
    
        //Dados
        let linkRequest = {
            destination: link,
            domain: { fullName: "rebrand.ly" }
          }
    
        // fetch("https://api.rebrandly.com/v1/links", {
        //     method: "POST",
        //     headers: headers,
        //     body: JSON.stringify(linkRequest)
        //     })
        //     .then(res => res.json())
        //     .then(jason => {
        //         console.log(jason);
        //         document.getElementById("input-url").value = jason.shortUrl;
        //     })
        //     .catch(err => {
        //         console.log(`Deu erro na Api ${err}`);
        //     })
        $.ajax({
            url: "https://api.rebrandly.com/v1/links",
            type: "post",
            data: JSON.stringify(linkRequest),
            headers: headers,
            dataType: "json",
            success: (res) => {
                console.log(`Long URL was ${res.destination}, short URL is ${res.shortUrl}`);
                document.getElementById("input-url-encurtada").value = res.shortUrl;
            }
          });
    }
    
    function Copiar() {
        var copyText = document.getElementById("input-url").value;
        if (!copyText) {
            alert("Informe um link válido!");
            return false;
        } 
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(copyText.value);
        alert("Link copiado: " + copyText.value);
    }

    return (
        <>
            <title>Encurtador de Link</title>
            <div class="box">
                <h1>Encurtador de Link </h1>
                <div class="box-input">
                    {/* <input class="input-url" id="input-url" type="text" placeholder="Coloque seu URL aqui: "> */}
                    <div class="divBtn">
                        <button class="btn" onclick={Encurtar()}>Encurtar</button>
                        <button class="btn" onclick={Copiar()}>Copiar</button>
                    </div>
                </div>
                <br />
                <div class="divUrl-encurtada">
                    <h2>URL Encurtada</h2>
                    {/* <input class="input-url-encurtada" id="input-url-encurtada" type="text" disabled> */}
                </div>
            </div>
        </>
    );
}

export default EncurtadorLink;