# Group Chat Bot

![screencast](https://github.com/githubschman/group-chat-bot/blob/master/example.gif?raw=true)

## How To Use:

Just click [here](https://group-chat-bot.herokuapp.com/) to start chatting with two bots!

## About the Project:

I wanted to make a simple chat bot to emulate a group chat, which is an entertaining and often silly way for groups of friends stay in touch.

I used data from a group chat with three people in it, by downloading their Facebook chat, and turning it into a JSON object.

I compared user input to messages in the data by finding the [Sorensen-Dice index](http://www.algomation.com/algorithm/sorensen-dice-string-similarity), or the similarity of two strings based off of the number of common bigrams. I then returned the responses of the highest match as the output!
