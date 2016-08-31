import React, { Component } from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Navigator
} from 'react-native';

import Store from 'ticketReservation/app/store';
import Login from 'ticketReservation/app/components/login';

export default class TicketReservation extends Component {  
  constructor(){
    super();

  }
  
  renderScene(route, navigator){
    if(route.title == 'Login'){
      return <Login title={route.title} navigator={navigator} />
    }
  }
  
  render() {
    console.log('Root render');
    return (
      <Provider store={Store}>
        <Navigator initialRoute={{ title : 'Login' }} renderScene={ this.renderScene } >
        </Navigator>
      </Provider>
    );
  }
}



const styles = StyleSheet.create({
  navigator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});