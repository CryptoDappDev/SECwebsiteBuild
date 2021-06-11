import { render } from '@testing-library/react'
import React from 'react'
import {TwitterTweetEmbed} from 'react-twitter-embed';
import TweetMemeView from '../views/TweetMemeView';
import TweetSecController from './TweetSecController';

class TweetMemeController extends React.Component {
    state = {}

    render() {
        return (
            <div class = 'TwitterMemeWrapper'>
                <TwitterTweetEmbed tweetId='1276418907968925696' options = {{
                    height : 200
                    }}/> 
            </div>
        )
    }
}

export default (props) => (
    <TweetSecController/>
)

//Meme Tweet
//