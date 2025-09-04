document.getElementById("btnMensaje").addEventListener("click", function() {
    alert("¡Gracias por visitar mi página personal!");
    this.style.transform = "rotate(5deg) scale(1.2)";
    setTimeout(() => {
        this.style.transform = "rotate(0) scale(1)";
    }, 500);
});
