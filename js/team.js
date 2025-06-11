document.addEventListener("DOMContentLoaded", () => {

  // Carga DE los miembros del equipo

  const teamContainer = document.querySelector(".team-members");

  if (!teamContainer) return;

  // Obtenemos la data del JSON (de momento, en el futuro habrá una API)
  fetch("./data/team.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error en la red");
      }
      return response.json();
    })
    .then((teamMembers) => {
      teamContainer.className =
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4";

      teamMembers.forEach((member) => {
        const teamCard = document.createElement("div");
        teamCard.className =
          "bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-shadow duration-300 p-4";

         teamCard.innerHTML = `
          <div class="w-[150px] h-[150px] mb-4">
            <img src="${member.image}" alt="${member.name}" class="w-full h-full rounded-full object-cover">
          </div>
          <h3 class="text-lg font-semibold text-gray-800">${member.name}</h3>
          <p class="text-sm text-indigo-600 mb-2">${member.role}</p>
          <p class="text-sm text-gray-600"><strong>Experiencia:</strong> ${member.experience}</p>
          <p class="text-sm text-gray-600"><strong>Especialidad:</strong> ${member.specialty}</p>
        `;

        teamContainer.appendChild(teamCard);
      });
    })
    .catch((error) => {
      teamContainer.innerHTML =
        '<p class="text-red-500 text-center p-4">No se pudieron cargar los miembros del equipo. Por favor, intente de nuevo más tarde.</p>';
    });

});
