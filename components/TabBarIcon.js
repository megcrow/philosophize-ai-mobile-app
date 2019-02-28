import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

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
        <Icon.Ionicons
          name={this.props.name}
          size={26}
          style={{ marginBottom: -3, backgroundColor:'#282c34',}}
          color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
      );
    }
  }
