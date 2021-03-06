import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import TouchableScale from 'react-native-touchable-scale';
import LinearGradient from 'react-native-linear-gradient';
import { ListItem as Item } from 'react-native-elements';

const styles = StyleSheet.create({
  title: { color: 'white', fontWeight: '500', fontSize: 15 },
  subtitle: { color: 'white' },
  container: { borderRadius: 15, marginVertical: 5 },
});

const ListItem = ({
  title, subtitle, avatar, onPress, chevron,
}) => (
  <Item
    Component={TouchableScale}
    containerStyle={styles.container}
    friction={90}
    tension={100}
    activeScale={0.95}
    linearGradientProps={{
      colors: ['#0AC4BA', '#2BDA8E'],
      start: { x: 1, y: 0 },
      end: { x: 0.2, y: 0 },
    }}
    ViewComponent={LinearGradient}
    leftAvatar={{
      rounded: true,
      source: { uri: avatar },
    }}
    title={title}
    titleStyle={styles.title}
    onPress={onPress}
    subtitle={subtitle}
    subtitleStyle={styles.subtitle}
    chevronColor="white"
    chevron={chevron}
  />
);

ListItem.propTypes = {
  title: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  subtitle: PropTypes.oneOfType([null, PropTypes.string, PropTypes.element]),
  chevron: PropTypes.bool,
};

ListItem.defaultProps = {
  subtitle: null,
  chevron: true,
};

export default ListItem;
