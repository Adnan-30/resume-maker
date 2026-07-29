import React from 'react'
import ClassicTemplate from './templates/ClassicTemplate'
import ModernTemplate from './templates/ModernTemplate'
import MinimalTemplate from './templates/MinimalTemplate'
import MinimalImageTemplate from './templates/MinimalImageTemplate'

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {

  // Uses native browser printing (Save as PDF) to prevent html2canvas thread freezes
  const handleDownload = () => {
    window.print();
  };

  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={data} accentColor={accentColor} />;

      case "minimal":
        return <MinimalTemplate data={data} accentColor={accentColor} />;

      case "minimal-image":
        return <MinimalImageTemplate data={data} accentColor={accentColor} />;
      
      default:
        return <ClassicTemplate data={data} accentColor={accentColor} />;
    }
  }

  return (
    <div className='w-full bg-gray-100 p-4'>
      {/* Download Action Bar - Hidden during printing */}
      <div className="max-w-[8.5in] mx-auto mb-4 flex justify-end print:hidden">
        <button 
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg shadow transition-colors duration-200 cursor-pointer flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
          </svg>
          Download PDF
        </button>
      </div>

      {/* Resume Document Area */}
      <div id="resume-preview" className={"border border-gray-200 print:shadow-none print:border-none " + classes}>
        {renderTemplate()}
      </div>

      <style jsx>
        {`
        @media print {
            /* Hide all page elements by default */
            body * {
                visibility: hidden;
            }

            /* Make only the resume container and its children visible */
            #resume-preview, #resume-preview * {
                visibility: visible;
            }

            /* Position the resume perfectly at the top-left of the page */
            #resume-preview {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                margin: 0 !important;
                padding: 0 !important;
                box-shadow: none !important;
                border: none !important;
            }

            /* Ensure clean page margins for the letter document */
            @page {
                size: letter;
                margin: 0;
            }
        }
        `}
      </style>
    </div>
  )
}

export default ResumePreview