

const initialState={ 
    produkter:[
        { 
        id:1,
            prodNavn:'Seilbåt',
        
    pris:45,
description:'Fin fin seilbåt'   , 
thumbnail:'https://static1.clickandboat.com/v1/p/itahnk4am5g4mdfblfceqoww1wuzp730.big.jpg.gz'
},
{ 
    id:2,
        prodNavn:'Bil',
    
pris:45,
description:'Fin fin båt'   , 
thumbnail:'https://cdn2.rcstatic.com/images/car_images/new_images/peugeot/108_lrg.jpg'
}

    ]
}

export default function (state=initialState,action) {
    console.log("produktReduser",action)
    switch(action.type){

    }
        
       

    return state;
        
    }
   
        