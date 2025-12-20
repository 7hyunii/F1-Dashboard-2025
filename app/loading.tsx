export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center gap-4">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600"></div>
        <p className="text-white text-lg font-medium animate-pulse">Loading F1 Data...</p>
      </div>
    </div>
  );
}
