"use client";

import FailureBadge from "@/components/FailureBadge";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Suspense } from "react";

function WorkoutDetailsContent() {
  const searchParams = useSearchParams();
  const bodyPart = searchParams.get("bodyPart");
  const workoutId = searchParams.get("id");
  const [workout, setWorkout] = useState();

  useEffect(() => {
    fetch(`http://localhost:3001/${bodyPart}/${workoutId}`)
      .then((res) => res.json())
      .then((workout) => setWorkout(workout))
      .catch((err) => console.error(err));
  }, [bodyPart, workoutId]);

  return (
    <div className="max-w-3xl mx-auto py-8 px-6">
      {workout ? (
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-100 bg-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="text-3xl font-bold text-gray-800 capitalize">
              {workout.name}
            </h1>
            <FailureBadge workout={workout}></FailureBadge>
          </div>
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">
                  Data do workout
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {workout.date}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">
                  Carga Utilizada
                </span>
                <span className="text-lg font-semibold text-gray-900">
                  {workout.weight} kg
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-500 mb-1">Repetições</span>
                <span className="text-lg font-semibold text-gray-900">
                  {workout.reps}x
                </span>
              </div>
            </div>

            <div className="pt-6 border-t border-gray-100">
              <h3 className="text-sm font-medium text-gray-500 mb-3">
                Observações do Atleta
              </h3>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                <p className="text-gray-700 italic">{workout.obs}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-2xl border border-gray-200">
          <p className="text-red-500 text-xl font-semibold mb-2">
            Treino não encontrado!
          </p>
          <p className="text-gray-500">
            O ID solicitado não existe na nossa base de dados.
          </p>
        </div>
      )}
    </div>
  );
}

export default function WorkoutDetails() {
  <Suspense
    fallback={
      <div className="text-center py-12 text-gray-500">
        Carregando detalhes do treino...
      </div>
    }
  >
    <WorkoutDetailsContent />
  </Suspense>;
}
