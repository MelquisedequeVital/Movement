import { useForm } from "react-hook-form";
import Button from "./Button";

export default function AddWorkoutModal({ text, modalHidden, closeModal, addWorkout}) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (dados) => {
        addWorkout(dados)
        reset();
        closeModal()
    }

    return (
        <div id="modalOverlay" className={`${modalHidden} fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4`}>
            <form id="addTaskForm" onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md bg-white border-2 border-black rounded-2xl p-5 grid grid-cols-2 gap-4">
                <div className="col-span-2 flex justify-between items-center border-b pb-2 mb-2">
                    <h2 className="text-lg font-bold text-gray-900">Novo Treino</h2>
                    <button onClick={closeModal} type="button" id="closeModalBtn" className="text-gray-500 hover:text-black font-bold text-xl">✕</button>
                </div>

                <div className="col-span-2">
                    <label className="block text-sm font-bold mb-1">Nome do Treino</label>
                    <input type="text"
                        id="workoutName"
                        {...register("name", { required: "O nome do treino é obrigatório" })}
                        className="w-full border border-black rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-black" />
                    {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Data do Treino</label>
                    <input type="date"
                        id="workoutDate"
                        {...register("date", { required: "A data do treino é obrigatória" })}
                        className="w-full border border-black rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-black" />
                    {errors.date && <p className="text-xs text-red-500 mt-1">{errors.date.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Carga</label>
                    <div className="flex items-center gap-1">
                        <input type="number"
                            id="workoutWeight"
                            {...register("weight", { required: "A carga do treino é obrigatória" })}
                            className="w-full border border-black rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-black" />
                        <span className="text-sm font-bold">kg</span>
                    </div>
                    {errors.weight && <p className="text-xs text-red-500 mt-1">{errors.weight.message}</p>}
                </div>

                <div>
                    <label className="block text-sm font-bold mb-1">Repetições</label>
                    <input type="number"
                        id="workoutReps"
                        {...register("reps", { required: "O número de repetições é obrigatório" })}
                        className="w-full border border-black rounded-lg px-3 py-1.5 text-sm focus:outline-none focus:ring-1 focus:ring-black" />
                    {errors.reps && <p className="text-xs text-red-500 mt-1">{errors.reps.message}</p>}
                </div>

                <div className="flex items-center gap-2 pt-6 pl-1">
                    <input type="checkbox"
                        id="workoutUntilFailure"
                        {...register("untilFailure")}
                        className="w-4 h-4 accent-black cursor-pointer rounded border-black focus:ring-0" />
                    <label htmlFor="workoutUntilFailure" className="text-sm font-bold cursor-pointer select-none">Até a falha</label>
                </div>

                <div className="col-span-2">
                    <label className="block text-sm font-bold mb-1">Observações</label>
                    <textarea id="workoutObs"
                        rows="3"
                        {...register("obs")}
                        className="w-full border border-black rounded-lg px-3 py-1.5 text-sm resize-none focus:outline-none focus:ring-1 focus:ring-black"></textarea>
                </div>

                <div className="col-span-2 mt-2 flex justify-end">
                    <Button text={text} type="submit" />
                </div>
            </form>
        </div>
    );
}