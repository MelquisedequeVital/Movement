"use client";
import AddWorkoutModal from "@/components/AddWorkoutModal";
import Button from "@/components/Button";
import EmptyState from "@/components/EmptyState";
import WorkoutCard from "@/components/WorkoutCard";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, query, where } from "firebase/firestore";
import { db } from "@/firebase";

function WorkoutListContent() {
  const searchParams = useSearchParams();
  const bodyPart = searchParams.get("bodyPart");
  const [workouts, setWorkouts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [workoutToEdit, setWorkoutToEdit] = useState(null);

  console.log("LOG 1 - bodyPart capturado da URL:", bodyPart);

  useEffect(() => {
    async function getWorkouts() {
      try {
        const q = query(
          collection(db, "workouts"),
          where("bodyPart", "==", bodyPart),
        );
        const querySnapshot = await getDocs(q);
        const workoutsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWorkouts(workoutsData);
        console.log(`LOG 2 - Workouts fetched for ${bodyPart}:`, workoutsData);
      } catch (error) {
        console.error(`Error fetching workouts for ${bodyPart}:`, error);
      }
    } 

    

    getWorkouts();
  }, [bodyPart]);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onCreateWorkout = () => {
    setWorkoutToEdit(null);
    toggleModal();
  };

  const onEditWorkout = (workout) => {
    setWorkoutToEdit(workout);
    toggleModal();
  };

  const addWorkout = async (data) => {
    try {
      const docRef = await addDoc(collection(db, "workouts"), {
        ...data,
        bodyPart: bodyPart,
      });
      setWorkouts((prev) => [...prev, { id: docRef.id, ...data }]);
    } catch (error) {
      console.error(`Error adding workout to ${bodyPart}:`, error);
    }
  };

  const removeWorkout = async (id) => {
    try {
      const docRef = doc(db, "workouts", id);
      await deleteDoc(docRef);
      setWorkouts((prev) => prev.filter((workout) => workout.id !== id));
    } catch (error) {
      console.error(`Error removing workout from ${bodyPart}:`, error);
    }
  };

  const updateWorkout = async (updatedWorkout, id) => {
    try{
      const docRef = doc(db, "workouts", id);
      await updateDoc(docRef, updatedWorkout);
      setWorkouts((prev) =>
        prev.map((workout) =>
          workout.id === id ? { ...workout, ...updatedWorkout } : workout
        )
      );
    } catch (error) {
      console.error(`Error updating workout in ${bodyPart}:`, error);
    }
  };

  console.log("LOG 3 - Estado 'workouts' na renderização:", workouts);

  return (
    <div className="max-w-5xl mx-auto p-6 mt-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-900 capitalize">
          {bodyPart}
        </h1>
        <Button text="Adicionar Treino" btnAction={onCreateWorkout} />
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
            <WorkoutCard
              removeWorkout={removeWorkout}
              editWorkout={onEditWorkout}
              key={workout.id}
              treino={workout}
              bodyPart={bodyPart}
            />
          ))}
        </div>
      )}

      {isOpen && (
        <AddWorkoutModal
          closeModal={toggleModal}
          addWorkout={addWorkout}
          updateWorkout={updateWorkout}
          workoutToEdit={workoutToEdit}
          text={workoutToEdit ? "Atualizar Treino" : "Salvar Treino"}
        />
      )}
    </div>
  );
}

export default function WorkoutList() {
  return (
    <Suspense
      fallback={
        <div className="max-w-5xl mx-auto p-6 mt-6 text-gray-500">
          Carregando lista de treinos...
        </div>
      }
    >
      <WorkoutListContent />
    </Suspense>
  );
}
