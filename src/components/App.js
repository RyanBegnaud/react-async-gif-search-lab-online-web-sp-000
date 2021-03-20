import React, {component} from 'react'

import NavBar from './NavBar'

// the App component should render out the GifListContainer component 

class App extends component {
render(){
  return (
    <div>
        < NavBar color='black' title="Giphy Search" />
    </div>
  )
  
}
}

export default App
