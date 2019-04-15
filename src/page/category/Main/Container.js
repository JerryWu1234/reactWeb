/***
 * @description 将react设置成热更新的组件
 */

import React from 'react';
import Main from './Main'
import {hot} from 'react-hot-loader'


class Container extends React.Component{
    render() {
        return <Main />
    }
}

export default hot(module)(Container)
