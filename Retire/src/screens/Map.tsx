import MapboxGL from '../services/mapbox';
import React from 'react';
import { Dimensions, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { BarsMenu, DestinationsSearch } from '../styles/screens/map';
import colors from '../styles/colors';

// import { Container } from './styles';

const Map: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <MapboxGL.MapView
        // logoEnabled={false}
        // attributionEnabled={false}
        styleURL={MapboxGL.StyleURL.Light}
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <MapboxGL.Camera
          centerCoordinate={[-46.4961449, -23.4877088]}
          zoomLevel={15}
        />
      </MapboxGL.MapView>
      <BarsMenu>
        <Icon name="menu" size={35} color={colors.main_green} />
      </BarsMenu>
      <DestinationsSearch
        selectionColor={colors.third_green}
        placeholderTextColor={colors.main_grey}
        placeholder="Digite aqui sua pesquisa"
      />
    </View>
  );
};

export default Map;
