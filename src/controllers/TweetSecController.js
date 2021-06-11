import React from 'react'
import {TwitterTweetEmbed} from 'react-twitter-embed';

class TweetSecController extends React.Component {

    render() {
        return (
            <div class="justify-content-center p-2" >
                <TwitterTweetEmbed tweetId='1278764736876773383' options={{
                    align: 'center'
                    //maxWidth: 500,
                  }} /> 
            </div>
        )
    }
}

export default (props) => (
    <TweetSecController/>
)