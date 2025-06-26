$(document).ready(function () {
    // Evento hover para btn-cerrar (ya existente)
    $(".btn-cerrar").hover(
        function () {
            $(this).addClass("hovered");
        },
        function () {
            $(this).removeClass("hovered");
        }
    );

    // Evento para aceptar o rechazar solicitudes
    $(".request .actions button").click(function () {
        const $request = $(this).closest(".request");
        const $section = $request.closest("section");
        const $conexionesTitle = $(".section h3:contains('Tus Conexiones')");
        let conexionesText = $conexionesTitle.text();
        let match = conexionesText.match(/\d+/);
        let conexiones = match ? parseInt(match[0]) : 500;

        if ($(this).text().trim() === "✓") {
            // Aumentar el número de conexiones en 1
            conexiones++;
            $conexionesTitle.text(`Tus Conexiones (${conexiones}+)`);
        }
        // Quitar la solicitud
        $request.remove();
    });
        $(".edit").click(function (e) {
        e.preventDefault();
        $(".profile-info h2").text("Brunilda Gonzales");
        $(".profile-info img").attr("src", "img/brunilda.jpg");
    });
});
