import React from 'react-native'
import Header from './Header'
import t from 'tcomb-form-native'

const Form = t.form.Form
const { View, Text, StyleSheet, ScrollView } = React

const ExpenseType = t.enums({
  'Communications': 'Communications',
  'Design': 'Design',
  'Donation': 'Donation',
  'Engineering': 'Engineering',
  'Food & Beverage': 'Food & Beverage',
  'Marketing': 'Marketing',
  'Legal': 'Legal',
  'Supplies & materials': 'Supplies & materials',
  'Travel': 'Travel',
  'Team': 'Team',
  'Office': 'Office',
  'Other': 'Other',
  'Web services': 'Web services',
})

const ExpensePaymentMethods = t.enums({
    'paypal': 'PayPal',
    'manual': 'Already paid'
})

const Expense = t.struct({
  title: t.String,
  amount: t.String,
  date: t.Date,
  type: ExpenseType,
  payment_method: ExpensePaymentMethods
})

const expenseOptions = {
  fields: {
    amount: {
      placeholder: '$ 0.00'
    }
  }
}

class TransactionNew extends React.Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <Header title="Submit expense" hasBackButton={true} navigator={this.props.navigator}/>
        <ScrollView>
          <Form
            ref="expense"
            type={Expense}
            options={expenseOptions}
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1
  }
})

export default TransactionNew;
