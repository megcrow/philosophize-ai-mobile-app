import React from 'react';
import { Text } from 'react-native';

// function TabBarIcon(props) {
//     const {
//         name,
//         focused
//     } = props

//     return (
//         <Icon.Ionicons
//             name={name}
//             size={26}
//             style={{ marginBottom: -3 }}
//             color={focused? Colors.tabIconSelected : Colors.tabIconDefault}
//         />
//     );
// }

// export default (TabBarIcon);

export default class TabBarIcon extends React.Component {
    render() {
      return (
        <Text
        style={{fontSize: 15}}
        >
        {this.props.title}
        </Text>
      );
    }
  }
