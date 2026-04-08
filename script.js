const texto = document.getElementById("texto");

let velocidad = 12; // segundos

function cambiarVelocidad(nuevaVelocidad) {
    texto.style.animationDuration = nuevaVelocidad + "s";
}

// Cambiar velocidad después de 3 segundos
setTimeout(() => {
    cambiarVelocidad(8);
}, 3000);