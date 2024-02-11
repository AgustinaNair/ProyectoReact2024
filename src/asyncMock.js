const mockData = [
    {
        id: 1,
        name: "Samsung Z Flip 5",
        description: "Samsung Galaxy Z Flip 5 con 8gb de RAM y 256 gb de almacenamiento. Doble cámara y más detalles:sus 2 cámaras traseras de 12 Mpx/12 Mpx te permitirán tomar imágenes con más detalles y lograr efectos únicos como el famoso modo retrato de poca profundidad de campo.",
        img:"https://multipoint.com.ar/Image/0/750_750-h14.jpg",
        price:"2000$",
        category: 'celulares',
        stock: 10
      },
      {
        id: 2,
        name: "Moto Edge 40 Pro",
        description: "Dejate cautivar por el diseño curvo, elegante y sin bordes del celular Motorola Edge 40 Pro, el cuál te brindará una comodidad excepcional. Su parte posterior presenta un increíble sistema de triple cámara y una estructura mate que ofrece una sensación suave como la seda.",
        img:"https://armoto.vtexassets.com/arquivos/ids/164333-800-auto?v=638201145159000000&width=800&height=auto&aspect=true",
        price:"1199$",
        category: 'celulares',
        stock: 16
      },
      {
        id: 3,
        name: "Tablet Samsung Galaxy Tab A7",
        description: "Disfruta de películas y juegos en una amplia pantalla de 8.7 pulgadas. Los biseles reducidos ofrecen una mayor relación pantalla-cuerpo sin aumentar el tamaño de la tableta. Además, el factor de forma cómodamente compacto ayuda a que no se te cansen las manos, incluso cuando llevas horas jugando.",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_949825-MLU72561171367_102023-F.webp",
        price:"250$",
        category: 'tablets',
        stock: 15
      },
      {
        id: 4,
        name: "Tablet Enova 10",
        description: "Esta tablet es la combinación perfecta de rendimiento y versatilidad, ideal para acompañar cada una de tus actividades. Transferir, sincronizar y acceder a tus dispositivos las veces que quieras ahora es posible. Sus conexiones wi-fi, 4g lte, bluetooth, usb te permiten potenciar sus funciones al máximo.",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_622045-MLA53644948940_022023-F.webp",
        price:"135$",
        category: 'tablets',
        stock: 19
      },
      {
        id: 5,
        name: "Notebook Lenovo Ip1",
        description: "La notebook Lenovo IdeaPad IdeaPad 1 fue pensada para hacer tu vida más sencilla. Su diseño elegante e innovador y su comodidad para transportarla, la convertirá en tu PC favorita. Cualquier tarea que te propongas, ya sea en casa o en la oficina, la harás con facilidad gracias a su poderoso rendimiento.",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_840882-MLA71499659981_092023-F.webp",
        price:"468$",
        category: 'notebooks',
        stock: 7
      },
      {
        id: 6,
        name: "Notebook Asus X515EA",
        description: "La notebook Asus X515EA es una solución tanto para trabajar y estudiar como para entretenerte. Al ser portátil, el escritorio dejará de ser tu único espacio de uso para abrirte las puertas a otros ambientes ya sea en tu casa o en la oficina.",
        img:"https://http2.mlstatic.com/D_NQ_NP_2X_870455-MLA72359895389_102023-F.webp",
        price:"659$",
        category: 'notebooks',
        stock: 3
      }
]

export const pedirDatosDeCategoria =(category) =>{
  return new Promise ((resolve, reject) =>{
      setTimeout(()=>{
          if(category === undefined){
            resolve(mockData)
          }else{
            resolve(mockData.filter((prod => prod.category === category)))
          }
      },1000)
    })
} 

 export const getItem =(id) =>{
  return new Promise ((resolve, reject) =>{
      setTimeout(()=>{
          if(id === undefined){
            resolve(console.log('No se seleccionó un producto correctamente'))
          }else{
            resolve(mockData[id-1])
          }
      },1000)
    })
}