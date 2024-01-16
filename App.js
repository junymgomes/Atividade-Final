import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const [exercises, setExercises] = useState([
    { id: '1', title: 'Corrida', image: { uri: 'https://img.freepik.com/fotos-gratis/full-shot-pessoas-correndo-juntas_23-2149033473.jpg?size=626&ext=jpg&ga=GA1.1.1130237424.1705419330&semt=sph' }, tips: 'A corrida é uma excelente forma de queimar calorias, melhorar o condicionamento cardiovascular e fortalecer as pernas.' },
    { id: '2', title: 'Flexões', image: { uri: 'https://img.freepik.com/fotos-gratis/jovem-homem-caucasiano-sorrindo-confiante-treinando-no-centro-esportivo_839833-25613.jpg?w=996&t=st=1705434486~exp=1705435086~hmac=5deee18d772b03ad5ce1bd3aa6d522aa1c427259e14c2e1f1e363e9e73d6162P' }, tips: 'As flexões são ótimas para fortalecer os músculos do peito, ombros e tríceps, além de ajudar a desenvolver a estabilidade do core.' },
    { id: '3', title: 'Abdominais', image: { uri: 'https://img.freepik.com/fotos-gratis/mulher-atletica-adulta-exercitando-e-treinando-ao-ar-livre_23-2150393437.jpg?w=996&t=st=1705434546~exp=1705435146~hmac=01d1ef2459527b0fdc51a598d5552661f70dc92197eafb58ab7826275b0adb37' }, tips: 'Os abdominais são essenciais para fortalecer os músculos do core, melhorar a postura e proporcionar estabilidade para a parte inferior das costas.' },
    // Adicione mais exercícios físicos aqui
  ]);

  const renderProfileImage = () => (
  <Image
    style={{
      width: 100,
      height: 100,
      position: 'absolute',
      top: 20,
      backgroundColor: 'black', // Barra superior preta
      borderRadius: 40, // Tornando a imagem redonda
    }}
    source={{ uri: 'https://avatars.githubusercontent.com/junymgomes' }}
  />
);
  <View><text>Meu treino</text></View>
  const renderFooter = () => (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.facebook.com/junymgomes')}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://image-link-facebook' }} 
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Linking.openURL('https://www.instagram.com/junymgomes')}>
        <Image
          style={styles.icon}
          source={{ uri: 'https://image-link-instagram' }}  
        />
      </TouchableOpacity>
      {/* Adicione mais links e ícones conforme necessário */}
    </View>
  );

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => openLink(item)}>
      <Image source={item.image} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.tips}>{item.tips}</Text>
    </TouchableOpacity>
  );

  const openLink = (item) => {
    const links = {
      Facebook: 'https://www.facebook.com/junymgomes',
      Instagram: 'https://www.instagram.com/junymgomes',
      Flexões: 'https://www.smartfit.com.br/news/fitness/flexao-braco/',
      Abdominais: 'https://nav.dasa.com.br/blog/abdominal',
      Corrida: 'https://blog.integralmedica.com.br/beneficios-da-corrida?gad_source=1&gclid=CjwKCAiA75itBhA6EiwAkho9ezdniAKNPDG4zG0F3wTDmH391zy7MjmpGVclCt6j-2RDwcCNYIpwJhoCDAEQAvD_BwE',
    };

    if (links[item.title]) {
      Linking.openURL(links[item.title]);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: '100%',
          height: '90%',
          position: 'absolute',
        }}
        source={{ uri: 'https://img.freepik.com/fotos-premium/macho-barbudo-adulto-com-toalha-no-ombro-olhando-para-a-tela-do-celular_386167-14129.jpg?w=360' }}
      />
      {renderProfileImage()}
      <Text style={styles.header}>Dicas de exercícios</Text>
      <FlatList
        data={exercises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
        ListFooterComponent={renderFooter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 32,
    color: '#ECF0F1',
    fontWeight: 'bold',
    marginBottom: 100,
  },
  flatList: {
    paddingHorizontal: 30,
    paddingLeft: 30,
    paddingRight:30,
  },
  item: {
    padding: 10,
    marginVertical: 4,
    backgroundColor: 'transparent',
    borderRadius: 10,
    alignItems: 'left',
  },
  image: {
    width: 120,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ECF0F1',
  },
  tips: {
    fontStyle: 'italic',
    color: '#BDC3C7',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    // Adicione estilos adicionais conforme necessário
  },
});
