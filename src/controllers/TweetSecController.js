import React from 'react'
import {TwitterTweetEmbed} from 'react-twitter-embed';
class TweetSecController extends React.Component {

    render() {
        return (
                <TwitterTweetEmbed tweetId='1278764736876773383' options={{
                    align: 'center',
                    width: '50%',
                    //maxWidth: 500,
                  }} /> 
        )
    }
}

export default (props) => (
    <TweetSecController/>
)