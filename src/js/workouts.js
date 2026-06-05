function getBodyPart() {
    const stringParams = window.location.search;
    const urlParams = new URLSearchParams(stringParams);
    const bodyPart = urlParams.get("bodyPart");

    return bodyPart;
}

function getWorkoutList() {
    let workoutList = localStorage.getItem(getBodyPart());
    return workoutList;
}

function addWorkout(workout){
    localStorage.setItem(getBodyPart(), workout)
}

function renderWorkouts() {
    const treinos = getWorkoutList();
    const grid = document.getElementById("workouts");

    if (treinos.length === 0) {
        grid.innerHTML = "<h1>Nenhum treino registrado<h1>";
    } else {
        let cards = "";
        treinos.forEach((treino) => {
            cards += `
        <div data-id="${treino.id}" class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-2 workout">
            <h2 class="text-xl font-semibold text-gray-800 capitalize">${treino.name}</h2>
            <p class="text-sm text-gray-500">
                Última vez realizado em <span class="font-medium text-gray-700">${treino.date}</span>
            </p>
        </div>
        `;
        });

        grid.innerHTML = cards;

        const workoutCards = document.querySelectorAll(".workout");

        workoutCards.forEach((card) => {
            card.addEventListener("click", (event) => {
                const id = event.currentTarget.getAttribute("data-id");
                window.location.href = `workout-details.html?id=${id}`;
            });
        });
    }
}

function showDetails() {
    const treinos = getWorkoutList();
    const stringParams = window.location.search;
    const urlParams = new URLSearchParams(stringParams);
    const id = urlParams.get("id");

    if (!id) {
        window.location.href = "index.html";
        return;
    }

    const treino = treinos.find((t) => t.id == id);

    const container = document.getElementById("workout-info");

    if (treino) {
        const falhaBadge = treino.untilFailure
            ? `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-green-500 uppercase tracking-wide">Até a falha</span>`
            : `<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-red-500 uppercase tracking-wide">Sem falha</span>`;

        container.innerHTML = `
            <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                
                <div class="p-6 md:p-8 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 class="text-3xl font-bold text-gray-800 capitalize">${treino.name}</h1>
                    <div>${falhaBadge}</div>
                </div>
                
                <div class="p-6 md:p-8">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-500 mb-1">Data do Treino</span>
                            <span class="text-lg font-semibold text-gray-900">${treino.date}</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-500 mb-1">Carga Utilizada</span>
                            <span class="text-lg font-semibold text-gray-900">${treino.weight} kg</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-500 mb-1">Repetições</span>
                            <span class="text-lg font-semibold text-gray-900">${treino.reps}x</span>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-gray-100">
                        <h3 class="text-sm font-medium text-gray-500 mb-3">Observações do Atleta</h3>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p class="text-gray-700 italic">
                                "${treino.observations}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `;
    } else {
        container.innerHTML = `
            <div class="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
                <p class="text-red-500 text-xl font-semibold mb-2">Treino não encontrado!</p>
                <p class="text-gray-500">O ID solicitado não existe na nossa base de dados.</p>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("workouts")) {
        renderWorkouts();
    }
    if (document.getElementById("workout-info")) {
        showDetails();
    }
});
