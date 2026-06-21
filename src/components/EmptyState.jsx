export default function EmptyState({title, description}) {
    return (
        <div className="col-span-full flex flex-col items-center justify-center text-center py-16 px-4 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl mt-6" >
            <div className="bg-gray-100 p-4 rounded-full text-gray-400 mb-4">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5M3.75 12h16.5M4 6h16a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V7a1 1 0 011-1z"></path>
                </svg>
            </div>
            <h3 className="text-lg font-bold text-gray-800 mb-1">{title}</h3>
            <p className="text-sm text-gray-500 max-w-sm">{description}</p>
        </div>
    )
}