function i(){const t=window.location.search;return new URLSearchParams(t).get("bodyPart")}function d(){return localStorage.getItem(i())}function l(){const t=d(),a=document.getElementById("workouts");if(t.length===0)a.innerHTML="<h1>Nenhum treino registrado<h1>";else{let r="";t.forEach(e=>{r+=`
        <div data-id="${e.id}" class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-2 workout">
            <h2 class="text-xl font-semibold text-gray-800 capitalize">${e.name}</h2>
            <p class="text-sm text-gray-500">
                Última vez realizado em <span class="font-medium text-gray-700">${e.date}</span>
            </p>
        </div>
        `}),a.innerHTML=r,document.querySelectorAll(".workout").forEach(e=>{e.addEventListener("click",o=>{const s=o.currentTarget.getAttribute("data-id");window.location.href=`workout-details.html?id=${s}`})})}}function c(){const t=d(),a=window.location.search,n=new URLSearchParams(a).get("id");if(!n){window.location.href="index.html";return}const e=t.find(s=>s.id==n),o=document.getElementById("workout-info");if(e){const s=e.untilFailure?'<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-green-500 uppercase tracking-wide">Até a falha</span>':'<span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-red-500 uppercase tracking-wide">Sem falha</span>';o.innerHTML=`
            <div class="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                
                <div class="p-6 md:p-8 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <h1 class="text-3xl font-bold text-gray-800 capitalize">${e.name}</h1>
                    <div>${s}</div>
                </div>
                
                <div class="p-6 md:p-8">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-500 mb-1">Data do Treino</span>
                            <span class="text-lg font-semibold text-gray-900">${e.date}</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-500 mb-1">Carga Utilizada</span>
                            <span class="text-lg font-semibold text-gray-900">${e.weight} kg</span>
                        </div>
                        <div class="flex flex-col">
                            <span class="text-sm text-gray-500 mb-1">Repetições</span>
                            <span class="text-lg font-semibold text-gray-900">${e.reps}x</span>
                        </div>
                    </div>

                    <div class="pt-6 border-t border-gray-100">
                        <h3 class="text-sm font-medium text-gray-500 mb-3">Observações do Atleta</h3>
                        <div class="bg-gray-50 p-4 rounded-xl border border-gray-100">
                            <p class="text-gray-700 italic">
                                "${e.observations}"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        `}else o.innerHTML=`
            <div class="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
                <p class="text-red-500 text-xl font-semibold mb-2">Treino não encontrado!</p>
                <p class="text-gray-500">O ID solicitado não existe na nossa base de dados.</p>
            </div>
        `}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("workouts")&&l(),document.getElementById("workout-info")&&c()});
