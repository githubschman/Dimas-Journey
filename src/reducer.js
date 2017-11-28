import {compareTwoStrings as SorensenDice} from 'string-similarity'
import { createStore } from 'redux';

import {allMessages, inputs} from './data'

const messages = allMessages
const possibleInputs = inputs

const nowords = () => {
    return [{user: 'Dima', message: 'lol what?'}, {user: 'Jackie', message: 'hmmm?'}]
}

const okay = () => {
    let ok = [{user: 'Dima', message: 'k'}, {user: 'Jackie', message: 'lol really?'}, {user: 'Dima', message: 'jeez ok'}, {user: 'Jackie', message: 'i dont believe u'}, {user: 'Dima', message: 'kk'}, {user: 'Jackie', message: 'ok lol'}, {user: 'Dima', message: 'lol cool'}, {user: 'Dima', message: 'wow cool'}, {user: 'Jackie', message: 'intresting?'}, {user: 'Jackie', message: 'um cool!'}, {user: 'Dima', message: 'wow THANK YOU for sharing that'}, {user: 'Jackie', message: '... tmi'}]
    return ok[Math.floor(Math.random() * ok.length)]
}


const initialState = {
    messages: [{user: 'Dima', message: 'hey'}, {user: 'Jackie', message: 'whats ur name again?'}],
    inputs: [],
    over: false,
    questions: [{user: 'Dima', message: 'URNAME, whats ur favorite pokemon?'}, {user: 'Jackie', message: 'URNAME, whats ur fave food??'}, {user: 'Jackie', message: 'URNAME, tell us a secret'} , {user: 'Jackie', message: 'URNAME, how do you feel about Taylor Swift??'}, {user: 'Dima', message: 'URNAME, do you think Justin and Selena should get back together?'}, {user: 'Jackie', message: 'URNAME, whats your SIGN? I am a scorpio'}, {user: 'Jackie', message: 'URNAME, what should I eat for lunch?'}, {user: 'Dima', message: 'k gotta go bye!!!!!'}]
}


const USER_INPUT = 'USER_INPUT'


export const userInput = (message) => ({type: USER_INPUT, message})


const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'USER_INPUT': {
            let r = comeUpWithResponse(action.message, state.inputs)
            let ok = okay()
            if(!state.questions.length){
                return {...state, over: true}
            }
            return {...state, inputs: [...state.inputs, r.match.message], messages: [...state.messages, {user: 'Me', message: action.message}, ok, ...r.responses, state.questions.shift()]}
		}
		default: {
			return state
		}
	}
}


const comeUpWithResponse = (input, old) => {
    let responses = [], i, high = 0, match;
    possibleInputs.forEach(obj=>{
        let similarity = SorensenDice(input, obj.message); 

        if(similarity > high && !old.includes(obj.message)){
            match = obj
            high = similarity
        }
    })
    
    if(!match){
        return {responses: nowords(), match: ''}
    }else{
        i = match.index + 1
    }

    for(var j = 0; j < 5; j++){
        let m = messages[i]
        if(m.user !== 'Compare'){
            responses.push(m)
        }
        i++;
    }
    
    if(responses.length < 1 || !input){
        return {responses: nowords(), match: ''}
    }else{
        return {responses, match}  
    }
}


const store = createStore(reducer);
export default store;