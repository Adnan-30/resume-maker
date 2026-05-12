import { Check, Layout } from 'lucide-react';
import React, { useState } from 'react'

const TemplateSelector = ({selectedTemplate, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);

    const templates=[
        {
            id: "classic",
            name: "Classic",
            preview: "A clean, traditional resume format"
        },
        {
            id: "modern",
            name: "Modern",
            preview: "Sleek design with strategic use"
        },
        {
            id: "minimal-image",
            name: "Minimal Image",
            preview: "Minimal design with single image"
        },
        {
            id: "minimal",
            name: "Minimal",
            preview: "Ultra-clean design"
        },
    ]
  return (
    <div className='relative'>
      <button onClick={()=> setIsOpen(!isOpen)} className=''>
        <Layout size={14} /> <span className='max-sm:hidden'>Template</span>
      </button>
      {isOpen && (
        <div className=''>
            {templates.map((template)=> (
                <div key={templates.id} onClick={()=>{onChange(template.id); setIsOpen(false)}} className={`   ${selectedTemplate===template.id? "border-blue-400 bg-blue-100" : "border-gray-300 hover:border-gray-400 hover:border-gray-100"}`}>
                    {selectedTemplate=== template.id && (
                        <div className='absolute top-2 right-2'>
                            <div className='size-5 bg-blue-400 rounded-full flex items-center justify-center'>
                                <Check className='w-3 h-3 text-white'/>
                            </div>
                        </div>
                    )}

                    <div className='space-y-1'>
                        <h4 className='font-medium text-gray-800'>{template.name}</h4>
                        <div className='mt-2 p-2 bg-blue-50 rounded text-xs text-gray-500 italic'>{template.preview}</div>
                    </div>
                </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default TemplateSelector
