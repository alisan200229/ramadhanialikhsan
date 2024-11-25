import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ramadhani al ikhsan </Text>
      <Text style={styles.title}>sistem informasi</Text>
      <Text style={styles.title}>0702212142</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Mengisi seluruh layar
    justifyContent: 'center', // Posisi vertikal di tengah
    alignItems: 'center', // Posisi horizontal di tengah
    backgroundColor: '#00000', // Warna latar belakang (biru muda)
  },
  title: {
    fontSize: 24, // Ukuran teks
    fontWeight: 'bold', // Teks tebal
    color: '#2c3e50', // Warna teks (biru tua)
  },
});