document.addEventListener("DOMContentLoaded", () => {

  // Carga de los servicios
  const servicesContainer = document.querySelector(".services-container");

  if (!servicesContainer) return;

  fetch("/data/services.json")
    .then((res) => {
      if (!res.ok) throw new Error("Error al cargar servicios");
      console.log("Servicios cargados correctamente");
      return res.json();
    })
    .then((services) => {
      services.forEach((service) => {
        const card = document.createElement("div");
        card.className =
          "bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300 mb-4";

        card.innerHTML = `
            <h3 class="text-lg font-semibold text-indigo-700 mb-2">${service.name}</h3>
            <p class="text-sm text-gray-600">${service.description}</p>
          `;

        servicesContainer.appendChild(card);
      });
    })
    .catch((err) => {
      console.error(err);
      servicesContainer.innerHTML = `
          <p class="text-red-500 text-center p-4">No se pudieron cargar los servicios. Intenta de nuevo más tarde.</p>
        `;
    });
});
