// src/components/UI/LoadingShimmer.jsx
export default function LoadingShimmer() {
    return (
        <div className="full-viewport flex items-center justify-center bg-gradient-to-br from-navy via-gray-900 to-black">
            <div className="relative">
                <div className="w-24 h-24 rounded-full border-4 border-transparent border-t-white border-r-white animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-gold to-yellow-300 animate-pulse" />
                </div>
            </div>
        </div>
    )
}