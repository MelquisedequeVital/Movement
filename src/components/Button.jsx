export default function Button({ text, btnAction, type = "button" }) {
    return (
        <button 
            type={type}
            onClick={btnAction}
            className="bg-gray-200 py-2 px-4 border-2 border-black border-b-4 rounded-2xl text-base font-bold active:border-b-2 active:border-r-2 active:translate-x-0.5 active:translate-y-0.5"
        >
            {text}
        </button>
    );
}