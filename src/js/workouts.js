function getBodyPart() {
    const stringParams = window.location.search;
    const urlParams = new URLSearchParams(stringParams);
    const bodyPart = urlParams.get("bodyPart");

    return bodyPart;
}

function getWorkoutList() {
    let workoutList = localStorage.getItem(getBodyPart());
    return workoutList ? JSON.parse(workoutList) : [];
}

function addWorkout(workout){
    localStorage.setItem(getBodyPart(), workout)
}

function showModal(){
    const overlay = document.getElementById("modalOverlay");
    if (overlay) {
        overlay.classList.remove("hidden");
    }
}

function closeModal(){
    const overlay = document.getElementById("modalOverlay");
    if (overlay) {
        overlay.classList.add("hidden");
    }
}

function handleFormSubmit(event) {
    event.preventDefault();

    const nameInput = document.getElementById("workoutName");
    const dateInput = document.getElementById("workoutDate");
    const weightInput = document.getElementById("workoutWeight");
    const repsInput = document.getElementById("workoutReps");
    const failureInput = document.getElementById("workoutUntilFailure");
    const obsInput = document.getElementById("workoutObs");

    if (!nameInput.value || !dateInput.value) {
        alert("Por favor, preencha pelo menos o nome e a data do treino.");
        return;
    }

    const novoTreino = {
        id: Date.now(),
        name: nameInput.value,
        date: dateInput.value,
        weight: weightInput.value || 0,
        reps: repsInput.value || 0,
        observations: obsInput.value || "",
        untilFailure: failureInput.checked,
    };

    const listaAtual = getWorkoutList();
    listaAtual.push(novoTreino);
    addWorkout(listaAtual);

    event.target.reset();
    closeModal();
    renderWorkouts();
}


function renderWorkouts() {
    const treinos = getWorkoutList();
    const grid = document.getElementById("workouts");

    if (treinos.length === 0) {
        grid.innerHTML = `<div class="col-span-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl mt-6">
                <div class="bg-gray-100 p-4 rounded-full text-gray-400 mb-4">
                    <svg class="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5M3.75 12h16.5M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"></path>
                    </svg>
                </div>
                <h3 class="text-lg font-bold text-gray-800 mb-1">Nenhum treino registrado</h3>
                <p class="text-sm text-gray-500 max-w-sm">Você ainda não adicionou rotinas para esta parte do corpo. Clique no botão acima para começar!</p>
            </div>`;
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

    const openModalBtn = document.getElementById("openModalBtn");
    if (openModalBtn) {
        openModalBtn.addEventListener("click", showModal);
    }

    const closeModalBtn = document.getElementById("closeModalBtn");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }

    const addTaskForm = document.getElementById("addTaskForm");
    if (addTaskForm) {
        addTaskForm.addEventListener("submit", handleFormSubmit);
    }
});
