import React from 'react';
import { View, Text } from 'react-native';

import Spinner from 'react-native-loading-spinner-overlay';

class LoadingSpinner extends React.Component {

  constructor(props) {
    super();
    this.state = {
      visible: true,
    };
  }

  /* eslint react/no-did-mount-set-state: 0 */
  componentWillMount() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Spinner visible={this.state.visible} textContent={'Loading...'} textStyle={{ color: '#FFF' }} />
      </View>
    );
  }
}

export default LoadingSpinner;