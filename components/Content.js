/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';

class Barang extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angkaPertama: '',
      angkaKedua: '',
      operator: '',
      jumlah: 0,
    };
}

  componentDidMount() {}

  angkaPertama = () => {
    return (
      <View style={styles.wrapper}>
        <TextInput
          onChangeText={this.handleInputangkaPertama}
          placeholder="Masukkan Angka"
          value={this.state.angkaPertama}
          keyboardType="numeric"
        />
      </View>
    );
  };

  angkaKedua = () => {
    const {angkaKedua} = this.state
    return (
      <View style={styles.wrapper}>
        <TextInput
          onChangeText={this.handleInputangkaKedua}
          placeholder="Masukkan Angka"
          value={angkaKedua}
          keyboardType="numeric"
        />
      </View>
    );
  };

  handleInputangkaPertama = event => {
    this.setState({angkaPertama: event});
  };

  handleInputangkaKedua = event => {
    this.setState({angkaKedua: event});
  };

  handleInputOperator = event => {
    this.setState({operator: event});
  }

  handleTambah = () => {
    this.setState({operator: '+'});
  };

  handleKurang = () => {
    this.setState({operator: '-'});
  }

  handleBagi = () => {
    this.setState({operator: '/'});
  };

  handleKali = () => {
    this.setState({operator: '*'});
  };

  handleClear = () => {
    this.setState({operator: 'C'});
  }

  handleSamaDengan = () => {
    const {angkaPertama, angkaKedua, operator} = this.state;
    if (operator === '+') {
      this.setState({jumlah: parseInt(angkaPertama) + parseInt(angkaKedua) });
    } 
    if (operator === '-') {
      this.setState({jumlah: parseInt(angkaPertama) - parseInt(angkaKedua) });
    }
    if (operator === '/') {
      this.setState({jumlah: parseInt(angkaPertama) / parseInt(angkaKedua) });
    }
    if (operator === '*') {
      this.setState({jumlah: parseInt(angkaPertama) * parseInt(angkaKedua) });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Tugas React Native 4</Text>
        </View>
        {this.angkaPertama()}
        <TouchableOpacity style={styles.plus}>
          <Text style={styles.plus__icon}>{this.state.operator}</Text>
        </TouchableOpacity>
        {this.angkaKedua()}
        <View style={styles.jumlahWrap}>
          <Text style={styles.jumlah}> {this.state.jumlah} </Text>
        </View>
        <View style={styles.wrapper}>
          <Text> Operator </Text>
          <View style={styles.wrapBtn}>
            <Button
              title=" + "
              style={styles.btn}
              onPress={this.handleTambah}
            />
            <Button
              title=" - "
              style={styles.btn}
              onPress={this.handleKurang}
            />
            <Button
              title=" / " 
              style={styles.btn}
              onPress={this.handleBagi}
            />
            <Button
              title=" * "
              style={styles.btn}
              onPress={this.handleKali}
            />
            <Button
              title=" C "
              style={styles.btn}
              onPress={this.handleClear}
            />
            <Button
              title="hitung"
              style={styles.btn}
              onPress={this.handleSamaDengan}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default Barang;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#00F280',
  },
  wrapper: {
    marginHorizontal: 15,
  },
  title: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    marginVertical: 30,
  },
  plus: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus__icon: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#1920E0',
  },
  jumlahWrap: {
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 1,
    borderBottomWidth: 0.7,
    color: '#D9D7E0',
    marginHorizontal: 15,
    marginBottom: 15,
  },
  jumlah: {
    fontSize: 40,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  wrapBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 20,
  },
  btn: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: 'red',
  },
});
