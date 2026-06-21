"use client";
import AddWorkoutModal from "@/components/AddWorkoutModal";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import WorkoutCard from "@/components/WorkoutCard";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

function WorkoutListContent() {
  const searchParams = useSearchParams();
  const bodyPart = searchParams.get("bodyPart");
  const [workouts, setWorkouts] = useState([]);
  const [hidden, setHidden] = useState("hidden");
  const API_URL = `http://localhost:3001/${bodyPart}`;

  useEffect(() => {
    const getWorkout = () => {
      fetch(API_URL)
        .then((res) => res.json())
        .then((dados) => setWorkouts(Array.isArray(dados) ? dados : []))
        .catch((err) => {
          console.error(err);
          setWorkouts([]);
        });
    };

    getWorkout();
  }, [API_URL]);

  const toggleModal = () => {
    setHidden((prev) => (prev === "hidden" ? "" : "hidden"));
  };

  const addWorkout = (data) => {
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((newWorkout) => setWorkouts((old) => [...old, newWorkout]))
      .catch((err) => console.error(err));
  };

  return (
    <div className="max-w-5xl mx-auto p-6 mt-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 capitalize">
          {bodyPart}
        </h1>
        <Button text="Adicionar Treino" btnAction={toggleModal} />
      </div>

      {workouts.length === 0 ? (
        <EmptyState
          title={"Nenhum treino registrado"}
          description={
            "Você ainda não adicionou rotinas para esta parte do corpo. Clique no botão acima para começar!"
          }
        />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard key={workout.id} treino={workout} bodyPart={bodyPart} />
          ))}
        </div>
      )}

      <AddWorkoutModal
        modalHidden={hidden}
        closeModal={toggleModal}
        addWorkout={addWorkout}
        text="Salvar Treino"
      />
    </div>
  );
}


export default function WorkoutList() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto p-6 mt-6 text-gray-500">Carregando lista de treinos...</div>}>
      <WorkoutListContent />
    </Suspense>
  );}

