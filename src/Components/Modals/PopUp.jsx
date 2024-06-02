const Popup = ({ isVisible, onClose, campaignName }) => {
      return (
        <div>
          {isVisible && (
            <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 text-center'>
            <div className="bg-white p-6 rounded-md w-1/3 md:w-[500px] absolute md:top-4/5 top-[300px] md:left-3/5 left-2/5">
            <h2 className="text-xl font-bold mb-4">Campaign Deleted</h2>
            <p>The {campaignName} campaign has been successfully deleted.</p>
            <div className="mt-4 flex justify-end">
              <button className="bg-gray-300 px-4 py-2 rounded" onClick={onClose} >
                Go back to Campaign list
              </button>
              
              
            </div>
          
            </div>
            </div>
          )}
        </div>
      );
    };
    
    export default Popup;