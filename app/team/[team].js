import { Link, useLocalSearchParams } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/FilmCard";


const DATA = [
    {
      id: "1",
      name: "Harry Potter",
      logo: "https://i.pinimg.com/564x/6f/9a/9f/6f9a9fcd6f6b8bc8c4de77ad7a42c766.jpg",
    },
    {
      id: "2",
      name: "The Dark Knight",
      logo: "https://berita.99.co/wp-content/uploads/2021/07/1.-the-dark-knight.jpg",
    },
    {
      id: "3",
      name: "Artamis Fowl",
      logo: "https://digitek.id/wp-content/uploads/2020/03/film-action-2020-artemis-fowl.jpg",
    },
  ];

  const TeamDetail = () => {
    const { team } = useLocalSearchParams();
    const selectedTeam = DATA.filter(function (item) {
      return item.name === team;
    });
  
    console.log(selectedTeam);
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "grey",
          flex: 1,
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FilmCard item={selectedTeam[0]} />
      </SafeAreaView>
    );
  };
  
  export default TeamDetail;