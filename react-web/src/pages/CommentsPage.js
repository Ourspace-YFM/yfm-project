import React from 'react'
import TextArea from '../components/atoms/TextArea'

const Comments = () => (
  <div>
    <div>
      <h1>Installer Instructions</h1>
      <TextArea label={ 'Installer Instructions' } />
    </div>

    <br />

    <div>
      <h1>YFM Comments</h1>
      <TextArea label={ 'YFM Comments' } />
    </div>
  </div>
)

export default Comments
