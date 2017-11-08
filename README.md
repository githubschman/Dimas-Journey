# Group Chat Bot

![screencast](https://github.com/githubschman/group-chat-bot/blob/master/example.gif?raw=true)

## How To Use:

Cick [here](https://group-chat-bot.herokuapp.com/) to start chatting with two bots!

## About the Project:

I wanted to make a simple chat bot that emulates a group chat, an entertaining and often silly way for several friends stay in touch.

I used data from a three-person group chat, by downloading their Facebook messages, and turning the HTML into a JSON object.

To find the best response, I compared the user's input to messages in the data by finding the [Sorensen-Dice index](http://www.algomation.com/algorithm/sorensen-dice-string-similarity), or the similarity of two strings based off of the number of common bigrams. I then returned the responses of the highest match as the output!
