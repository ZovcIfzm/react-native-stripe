/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {StripeProvider} from '@stripe/stripe-react-native';
import PaymentScreen from './screens/paymentScreen';
import {publishableKey} from './env.js';
const App = () => {
  return (
    <StripeProvider publishableKey={publishableKey}>
      <PaymentScreen />
    </StripeProvider>
  );
};
const styles = StyleSheet.create({});
export default App;
