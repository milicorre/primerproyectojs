const tienda = [{nombre:"LIFTING", precio: 1400, tiempo: "2hs", zona:"pestañas"},
                {nombre:"LIFTING NUTRITIVO", precio: 1800, tiempo: "2hs 30min", zona:"pestañas"},
                {nombre:"EXTENSIONES", precio: 2400, tiempo: "3hs", zona:"pestañas"},
                {nombre:"SERVICE DE EXTENSIONES", precio: 1700, tiempo: "1hs 30min", zona:"pestañas"},
                {nombre:"PERFILADO", precio: 800, tiempo: "40min", zona:"cejas" },
                {nombre:"LAMINADO", precio: 2000, tiempo: "1hs 30min", zona:"cejas"},
                {nombre:"TINTE DE CEJAS", precio: 650, tiempo: "20min", zona:"cejas"}

    
]

class Servicio {
    constructor(servicio) {
        this.nombre = servicio.nombre;
        this.precio = servicio.precio;
        this.tiempo = servicio.tiempo;
        this.zona = servicio.zona
    
    }
     
}

const extraccion = new Servicio({nombre:"Extracción de extensiones", precio: 1000, tiempo: "1hs", zona:"pestañas"})
tienda.push(extraccion)

console.log (tienda)


const carrito = [];


let servicioAdquirido = prompt("Que servicio desea adquirir? Lifting, Extensiones, Perfilado o Laminado ").toUpperCase(); 


const adquisicion = (servicio) => {

    while(servicio !== "NINGUNO"){

        let compra = tienda.find(serv => serv.nombre == servicio )
    
        if(compra){
            carrito.push(compra);    
        }
        else{
            console.log("El servicio ingresado no se encuentra disponible");
        }
        servicio = prompt("Que servicio desea adquirir? Lifting, Extensiones, Perfilado o Laminado ").toUpperCase();
    }
    
  
}

adquisicion(servicioAdquirido) ;
console.log (carrito)

const totalServicios = (carrito) =>{
    let total=0;
    for (let i = 0 ; i < carrito.length; i++){
        total = total + carrito[i].precio;
    }
    return  total;
}


alert(`El valor total a pagar es $ ${totalServicios(carrito)}`)








/*

const busquedap = tienda.find(servicio => servicio.zona === "pestañas");
console.log(busquedap)

const busquedac = tienda.filter(servicio => servicio.zona === "cejas");
console.log(busquedac)



const nuevoValor = tienda.map (valor => valor.precio * 1.20 );
console.log (nuevoValor)*/