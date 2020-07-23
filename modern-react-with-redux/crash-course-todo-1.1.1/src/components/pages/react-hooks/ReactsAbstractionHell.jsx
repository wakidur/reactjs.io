import React from 'react';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';

function ReactsAbstractionHell({ history, state, dispatch }) {
    return (
        <ThemeContext.Consumer>
            {theme => <Content theme={theme}> </Content>}
        </ThemeContext.Consumer>
    )
}

export default compose(withRouter, withReducer(reducer, initialState))(ReactsAbstractionHell);


function App() {
    const theme = useTheme();
    const history = useRouter();
    const [state, dispatch] = useReducer(reducer, initialState);
   
    return (
      <Content theme={theme}>
        ...
      </Content>
    );
  }
   
  export default App;