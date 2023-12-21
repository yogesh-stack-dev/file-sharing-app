import React from 'react'

function AnnouncementMsg() {
  return (
    <div>
        <div className="fixed inset-x-0 bottom-0 p-4">
            <div className="relative flex items-center justify-between gap-4 rounded-lg bg-primary px-4 py-3 text-white shadow-lg">
                <p className="text-sm font-medium">
                    File will be Successfully uploaded
                </p>
            </div>
        </div>      
    </div>
  )
}

export default AnnouncementMsg