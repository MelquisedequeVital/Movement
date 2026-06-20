import { useRouter } from "next/router"
import { useEffect, useRef } from "react"

export default function WorkoutCard({ treino }) {

    const router = useRouter()

    return (
        <div onClick={() => {router.push(`/workout-details?id=${treino.id}`)}} class="bg-white border border-gray-200 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-2 workout">
            <h2 class="text-xl font-semibold text-gray-800 capitalize">{treino.name}</h2>
            <p class="text-sm text-gray-500">
                Última vez realizado em <span class="font-medium text-gray-700">{treino.date}</span>
            </p>
        </div>
    )
}