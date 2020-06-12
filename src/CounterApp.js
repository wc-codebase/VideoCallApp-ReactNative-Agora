import React, {Component} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {connect} from 'react-redux';

class CounterApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  increaseCounter = () => {
    this.setState({counter: this.state.counter + 1});
  };

  decreaseCounter = () => {
    this.setState({counter: this.state.counter - 1});
  };

  render() {
    return (
      <SafeAreaView style={styles.main}>
        <View style={styles.context}>
          <TouchableOpacity
            style={styles.plusBtn}
            onPress={() => {
              this.increaseCounter();
            }}>
            <Text style={styles.title}> + </Text>
          </TouchableOpacity>
          <Text style={styles.number}>{this.state.counter}</Text>
          <TouchableOpacity
            style={styles.minusBtn}
            onPress={() => {
              this.decreaseCounter();
            }}>
            <Text style={styles.title}> - </Text>
          </TouchableOpacity>
        </View>
        <Button
          title="Go to Home"
          backgroundColor="red"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </SafeAreaView>
    );
  }
}

function mapStateToProps(state) {
  return {
    counter: state.counter,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    increaseCounter: () => dispatch({type: 'INCREASE_COUNTER'}),
    decreaseCounter: () => dispatch({type: 'DECREASE_COUNTER'}),
  };
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  context: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  plusBtn: {
    backgroundColor: 'green',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
  },
  minusBtn: {
    backgroundColor: 'tomato',
    width: 50,
    height: 50,
    borderRadius: 100,
    marginLeft: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 24,
    color: 'brown',
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CounterApp);
