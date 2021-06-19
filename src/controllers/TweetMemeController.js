import { render } from '@testing-library/react'
import React from 'react'
import {TwitterTweetEmbed} from 'react-twitter-embed';
import TweetSecController from './TweetSecController';
import { Tweet } from 'react-twitter-widgets'

class TweetMemeController extends React.Component {
    state = {}

    render() {
        return (
            <div class = 'justify-content-center'>
                < Tweet tweetId="1276418907968925696"/>
            </div>
        )
    }
}

export default (props) => (
    <div></div>
)

//Meme Tweet
//