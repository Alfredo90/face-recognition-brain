import './ImagineLinkForm.css'

import React from 'react'

const ImageLinkForm = () => {
    return (
        <div >
            <p className='f2 center '>
                {'This Magic Brain will detect faces in your pictures. Git it a try.'}
            </p>
            <div className='center' >
                <div className=' form pa4 br3 shadow-5 center'>
                    <input className='f4 pa2 w-70 ' type="text" />
                    <button className='w-30  grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
                </div>
            </div>
        </div >
    )
}

export default ImageLinkForm
