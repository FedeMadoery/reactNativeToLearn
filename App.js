/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Dimensions, Platform, StyleSheet, Text, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Swiper from 'react-native-swiper';
import Carousel from 'react-native-snap-carousel';
import {CreditCardInput, LiteCreditCardInput} from "react-native-credit-card-input";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type
Props = {};

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

function wp(percentage) {
    const value = (percentage * viewportWidth) / 100;
    return Math.round(value);
}

const slideHeight = viewportHeight;
const slideWidth = wp(75);
const itemHorizontalMargin = wp(2);

export const sliderWidth = viewportWidth;
export const itemWidth = slideWidth + itemHorizontalMargin * 2;

export default class App extends Component<Props> {
    ENTRIES1 = [
        {
            title: 'Sleepy Dead Pool',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: require('./components/resources/deadpool.json')
        },
        {
            title: ':O Emoji',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: require('./components/resources/emoji_shock.json')
        },
        {
            title: 'Tongue Emoji',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: require('./components/resources/emoji_tongue.json')
        },
        {
            title: 'Loading....',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
            illustration: require('./components/resources/loading.json')
        },
        {
            title: 'A simple crazy animation',
            subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
            illustration: require('./components/resources/newAnimation.json')
        },
        {
            title: ' I`m so thirsty',
            subtitle: 'Lorem ipsum dolor sit amet',
            illustration: require('./components/resources/thirsty.json')
        },
    ];

    _renderItem({item, index}) {
        return (
            <View style={styles.containerSlide}>
                <Text style={styles.title}>{item.title}</Text>
                <LottieView
                    source={item.illustration}
                    autoPlay
                    loop
                    style={{width: 200, height: 200}}
                />
            </View>
        );
    }

    _onChangeCreditCard(form) {
        console.log(form)
    } ;

    _indexChanged(index) {
        switch (index) {
            case 1:
                break;
            case 2:
                this._carousel.snapToItem(1, true, true);
                break;
            case 3:
                break;

        }
    };

    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={true} onIndexChanged={this._indexChanged()}>
                <View style={styles.container}>
                    <Text style={styles.welcome}>Welcome to React Native!</Text>
                    <Text style={styles.instructions}>To get started, edit App.js</Text>
                    <Text style={styles.instructions}>{instructions}</Text>
                </View>
                <View style={styles.container}>
                    <Carousel
                        ref={(c) => {
                            this._carousel = c;
                        }}
                        data={this.ENTRIES1}
                        useScrollView={true}
                        renderItem={this._renderItem}
                        itemHeight={viewportHeight}
                        itemWidth={itemWidth}
                        sliderHeight={slideHeight}
                        sliderWidth={slideWidth}
                    />
                </View>
                <View style={styles.slide3}>
                    <CreditCardInput
                        onChange={this._onChangeCreditCard}
                        ref={(c) => {
                            this._creditCard = c;
                        }}
                        autoFocus={false}
                        requiresName={true}/>
                </View>
            </Swiper>
        );
    }
}

const IS_IOS = Platform.OS === 'ios';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9df4ab',
    },
    containerSlide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9df4ab',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
        borderRadius: IS_IOS ? 8 : 0,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    }
});
