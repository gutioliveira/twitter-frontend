import React from 'react';

import ProfileInfo from '../../components/profileInfo'

export default class Home extends React.Component {

    componentDidMount() {
        console.log('componentDidMount()')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('didUpdate()')
    }

    render(){
        return (
            <div>
                <ProfileInfo/>
            </div>
        )
    }
}
