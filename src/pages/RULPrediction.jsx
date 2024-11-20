import React from 'react'

const RULPrediction = () => {
  return (
    <div className="bg-customColor-otherpagesbackground min-h-screen w-screen flex flex-col items-center py-8">
      <div className="min-w-[1300px] bg-customColor-rmcardbackground rounded-lg shadow-xl p-8">
        {/* Header */}
        <div className="flex justify-between space-x-52 items-center mb-8">
          <button className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">
            Start Monitoring
          </button>
          <h1 className="text-2xl font-semibold text-gray-700">REALTIME METRICS</h1>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
            Stop Monitoring
          </button>
        </div>
        
        {/* Grid Section */}
        <div className="flex flex-row justify-between">
          <div className="grid grid-cols-2 gap-x-14 gap-y-8">
            
          </div>
          
          <div>

          </div>
        
        </div>
        
      </div>
    </div>
  )
}

export default RULPrediction