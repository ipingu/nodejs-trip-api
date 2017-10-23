import React from 'react'
import {connect} from 'react-redux'
import {addPlace} from '../actions'

let AddPlace = ({ dispatch }) => {
    let name
    let summary

    return (
      <section className="form">
        <h4>Where are you ?</h4>
          <input type="text" placeholder="Location" ref={node => {name = node}} />
          <textarea ref={node => {summary = node}}/>
          <input type="submit" id="postStory" value="Publish" onClick={e => {
            dispatch(addPlace(name.value, name.value, summary.value))
          }}/>
      </section>
  )
}

AddPlace = connect()(AddPlace)

export default AddPlace;
