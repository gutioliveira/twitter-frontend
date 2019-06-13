import React from 'react';
import SETTINGS from '../../settings';

export default class ProfileInfo extends React.Component {

    render() {
        return (
            <div style={{
                display: 'flex',
                borderWidth: 1,
                borderColor: 'grey',
                borderStyle: 'solid',
                flexDirection: 'column',
                backgroundColor: SETTINGS.colors.darkBlue,
                marginLeft: 30,
                marginTop: 20,
                marginBottom: 20,
                marginRight: 8,
                width: 300,
                height: 200
            }}>

                <img style={{
                    overFlow: 'hidden',
                    objectFit: 'cover',
                    height: '45%',
                    width: '100%'
                }} src={require('../../assets/images/dinossaur.jpg')}/>

                <div style={{height: '55%', width: '100%', backgroundColor: 'red'}}>

                    <table>
                        <tr>
                            <td>
                                Tweets
                            </td>
                            <td>
                                Seguindo
                            </td>
                            <td>
                                Seguidores
                            </td>
                        </tr>
                        <tr>
                            <td>
                                dhsau
                            </td>
                            <td>
                                dhsau
                            </td>
                            <td>
                                dhsau
                            </td>
                        </tr>
                    </table>

                </div>
            </div>
        )
    }
};
