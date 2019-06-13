import React from 'react';

import {Link} from "react-router-dom";
import SETTINGS from "../../settings";

export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
            mouseOver: null,
            options: [
                {
                    icon: require('../../assets/icons/web-page-home.svg'),
                    icon_gray: require('../../assets/icons/web-page-home_gray.svg'),
                    text: 'Página Inicial',
                    route: SETTINGS.routes.home
                },
                {
                    icon: require('../../assets/icons/flash.svg'),
                    icon_gray: require('../../assets/icons/flash_gray.svg'),
                    text: 'Moments',
                    route: SETTINGS.routes.moments
                },
                {
                    icon: require('../../assets/icons/notification.svg'),
                    icon_gray: require('../../assets/icons/notification_gray.svg'),
                    text: 'Notificações',
                    route: SETTINGS.routes.notifications
                },
                {
                    icon: require('../../assets/icons/envelope.svg'),
                    icon_gray: require('../../assets/icons/envelope_gray.svg'),
                    text: 'Mensagens',
                    onClick: () => {}
                }
            ]
        }
    };

    clickMenuItem = (index, item) => {
        item.route && this.setState({selected: index});
        item.onClick && item.onClick();
    };

    onMouseOver = (index) => {
        this.setState({mouseOver: index});
    };

    ternaryCondition = (condition, positiveReturn, negativeReturn) => {
        return condition ? positiveReturn : negativeReturn;
    };

    render() {
        return (
            <div style={{backgroundColor: 'red'}}>
                <div style={{
                    height: 50,
                    paddingLeft: 30,
                    paddingRight: 30,
                    backgroundColor: '#1A2431',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: 14,
                }}>

                    <div style={{display: 'flex'}}>
                        {
                            this.state.options.map((item, index) => {

                                const isSelected = (this.state.selected === index || this.state.mouseOver === index);

                                return (
                                    <Link to={item.route} style={{textDecoration: 'none'}}>
                                        <div
                                            onMouseLeave={() => this.setState({mouseOver: null})}
                                            onMouseOver={() => this.onMouseOver(index)}
                                            onClick={() => this.clickMenuItem(index, item)}
                                            style={{
                                                cursor: 'pointer',
                                                height: 50,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderStyle: 'solid',
                                                borderWidth: 0,
                                                borderBottomWidth: 3,
                                                boxSizing: 'border-box',
                                                borderColor: this.ternaryCondition(isSelected, '#188ADB', 'transparent'),
                                                color: this.ternaryCondition(isSelected, '#188ADB', '#7D8E9C'),
                                            }}>

                                            <Link to={this.state.options[index].route}/>

                                            <img src={this.ternaryCondition(isSelected, item.icon, item.icon_gray)}
                                                 style={{
                                                     width: 20,
                                                     height: 20,
                                                     marginLeft: 16,
                                                 }}>

                                            </img>

                                            <div style={{margin: 4}}/>

                                            <a style={{
                                                marginRight: 16,
                                            }}>
                                                {
                                                    item.text
                                                }
                                            </a>

                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>

                    <div style={{
                        cursor: 'pointer',
                        width: 70,
                        height: 35,
                        display: 'flex',
                        backgroundColor: 'red',
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        verticalAlign: 'center',
                    }}>

                        {
                            "Tweetar"
                        }

                    </div>
                </div>
            </div>
        );
    }
}
