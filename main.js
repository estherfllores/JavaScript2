const fechas = [
    { fecha: "20/12/2023", disponible: true },
    { fecha: "21/12/2023", disponible: true },
    { fecha: "22/12/2023", disponible: true },
    { fecha: "23/12/2023", disponible: true },
  ];
  
  let respuesta = prompt("Quieres reservar una fecha?");
  
  while (respuesta != "no") {
    let fecha = prompt("Ingrese la fecha que quiere reservar (DD/MM/AAAA)"); // 20/12/2023
  
    for (let i = 0; i < fechas.length; i++) {
      let item = fechas[i];
  
      if (item.fecha === fecha) {
        if (item.disponible) {
          fechas[i].disponible = false;
          alert("Reservaste la fecha");
        } else {
          alert("fecha no disponible");
        }
      }
    }
  
    respuesta = prompt("Quieres reservar una fecha?");
  }
  
  alert("Gracias por entrar a nuestra página");