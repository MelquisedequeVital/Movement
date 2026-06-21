export default function FailureBadge({workout}){
    return(
        workout.untilFailure
            ? <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-green-500 uppercase tracking-wide">Até a falha</span>
            : <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-red-500 uppercase tracking-wide">Sem falha</span>
    )
}