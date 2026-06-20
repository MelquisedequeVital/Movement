"use client";
import EmptyState from "@/components/EmptyState";
import WorkoutCard from "@/components/WorkoutCard";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function WorkoutList() {
  const searchParams = useSearchParams();
  const bodyPart = searchParams.get("bodyPart");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3001/workouts/${bodyPart}`)
      .then((res) => res.json())
      .then((dados) => (Array.isArray(dados) ? dados : []))
      .catch((err) => {
        console.error(err);
        setWorkouts([]);
      });
  }, [bodyPart]);

  return workouts.length === 0 ? (
    <EmptyState
      title={"Nenhum treino registrado"}
      description={
        "Você ainda não adicionou rotinas para esta parte do corpo. Clique no botão acima para começar!"
      }
    ></EmptyState>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
      {workouts.map((workout) => (
        <WorkoutCard key={workout.id} treino={workout} />
      ))}
    </div>
  );
}
