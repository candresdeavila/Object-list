const estadosguitars = [
     {
        tipodeGuitar: "Fender", modelos:[
            {
                nombre: "stratocaster", año: "1970"
            },
            {
                nombre: "Telecaster", año: "1960"
            }
        ]
     },
     {
        tipodeGuitar: "Gibson", modelos:[
            {
                nombre: "Gary", año:"1960"
            },
            {
                nombre: "Slash", año:"1980"
            }
        ]
     }
]






const guitars = [
    {
    name: "Stratocaster",
    brand: "Fender",
    color: "Blanco",
    artists: ["Eric Clapton", "Jimi Hendrix", "David Gilmour"]
    },
    {
    name: "SG",
    brand: "Gibson",
    color: "Negro",
    artists: ["Angus Young", "Tony Iommi", "Derek Trucks"]
    },
    {
    name: "RG",
    brand: "Ibanez",
    color: "Azul",
    artists: ["Steve Vai", "Joe Satriani", "Paul Gilbert"]
    },
    {
    name: "Pacific",
    brand: "Yamaha",
    color: "Rojo",
    artists: ["Dave Mustaine", "Marty Friedman", "John Petrucci"]
    }
    ];
    

    const guitarsL = [
        {
            name: "Colguitar",
            brand: "guitarras de Colombia",
            Color: "Negro",
            artists: "Noel Petro"
        }
        
    ]

    const WorldGuitars = [
        guitars,
        guitarsL
    ]
   
   const ulItems = []

   for (let index = 0; index < WorldGuitars.length; index++) {
       const guitar = WorldGuitars[index];
       const ilElement = "<li>" +
                                  "<span>"+ "name:"  + guitar.name + "</span>"+
                                  "<span>"+ "codigo de calidad:"  + guitar.estadosguitars + "</span>"+
                         "</li>";
        ulItems.push(ilElement);                   
   }

   document.querySelector('#app').innerHTML = "<ul>" + ulItems.join("") + "</ul>" 

    console.log(ulItems, ulItems.join(""))