'use strict';


module.exports = class Api{

    constructor(url, param){
        this.url = url;
        
        if( typeof this.param !== undefined){
            
            this.param = param;
        } 
        
    }

    getUrl(){ return this.url; }

    setUrl(url){ this.url = url; }

    getParam(){ return this.param; }

    setParam(param){ this.param = param; }

    mountUrlGet(){

        var parans = '';
        let count = 0;
        
        for (const [key, value] of Object.entries(this.param) ) {
            
            if( count == 0){
                
                parans = '?' + key + '=' + value;
            }else{

                parans += '&' + key + '=' + value;
            }
            count++;   
        }

        return this.url + parans;
    }

    showRequestApiGet(){
        
        let parans = this.mountUrlGet();

        const axios = require('axios');

        axios.get(parans)
        .then(function (response){

            console.log(response.data["Time Series (Daily)"]['2022-09-30']);
        })
        .catch(function (error){

            console.log(error);
        })
        .then(function(){

            console.log("Finalizando o comando");
        });
    }

    showRequestApiGetOld(){
        
        let parans = this.mountUrlGet() ;
        
        var request = require('request');

        request.get({

            url: parans,
            json: true,
            headers:{'User-Agent':'request'}


        }, (err, res, data) => {
        
            if(err){
                console.log('Error:', err);
            }else if(res.statusCode !== 200){
                console.log('Status:', res.statusCode);
            }else{
                console.log(data["Time Series (Daily)"]['2022-09-30']);
            }
        
        });

       


    }

    showRequestApiPost(){

        axios.post('', {

        })
        .then(function (response){

            console.log(response);
        })
        .catch(function (error){

            console.log(error);
        });

    }

}



