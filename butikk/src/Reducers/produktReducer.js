

const initialState={ 
    produkter:[
        { 
        id:1,
            prodNavn:'Seilbåt',
        
    pris:45,
description:'Fin fin seilbåt'   , 
thumbnail:'https://static1.clickandboat.com/v1/p/itahnk4am5g4mdfblfceqoww1wuzp730.big.jpg.gz',
antall:30
},
{ 
    id:2,
        prodNavn:'Bil',
    
pris:400000,
description:'Fin fin bil'   , 
thumbnail:'https://cdn2.rcstatic.com/images/car_images/new_images/peugeot/108_lrg.jpg',
antall:46
},
{ 
    id:3,
        prodNavn:'Sykkel',
    
pris:200000,
description:'Kjekk sykkel'   , 
thumbnail:'https://images.giant-bicycles.com/b_white,c_pad,h_400,q_80/pg5zyuxlj5uldxu5ht7y/TCRAdvanced1_ColorA_Carbon.jpg',
antall:5
},
{ 
    id:4,
        prodNavn:'Hytte',
    
pris:200000,
description:'Kjekk hytte'   , 
thumbnail:'https://www.norgeshus.no/images/made/dynamic/upload/bilder/Hytter/Tinn_Tradisjon/tinn-tradisjon2016_web_1920_1166_85_c1.jpg',
antall:10
}



    ]
}

export default function (state=initialState,action) {
    console.log("produktReduser",action)
    switch(action.type){

        case 'DECREMENT_ANT':
        console.log("decrement kjører i reduser",action.payload)

//Kopierer state.items arrayen over i copyOfItems
const copyOfProdukter =state.produkter.slice();

copyOfProdukter[action.payload-1].antall=copyOfProdukter[action.payload-1].antall-1;
//lager en ny state
return Object.assign({},state,{produkter:copyOfProdukter});

       default:return state;
        


    }
        
       

    
        
    }
   
        