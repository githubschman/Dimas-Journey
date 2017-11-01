import {compareTwoStrings as SorensenDice} from 'string-similarity'
import { createStore } from 'redux';
import { shuffle } from 'lodash';

const messages = process.env.REACT_APP_MESSAGES.split('^%^')
const possibleInputs = process.env.REACT_APP_POSSIBLE_INPUTS.split('^%^')

const nowords = () => {
    return [{user: 'Dima', message: 'lol what?'}, {user: 'Jackie', message: 'hmmm?'}]
}

const okay = () => {
    let ok = [{user: 'Dima', message: 'wow cool'}, {user: 'Jackie', message: 'intresting?'}, {user: 'Jackie', message: 'um cool!'}, {user: 'Dima', message: 'wow THANK YOU for sharing that'}, {user: 'Jackie', message: '... tmi'}]
    return ok[Math.floor(Math.random() * ok.length)]
}


const initialState = {
    messages: [{user: 'Dima', message: 'hey'}, {user: 'Jackie', message: 'whats ur name again?'}],
    inputs: [],
    over: false,
    questions: [{user: 'Dima', message: 'URNAME, whats ur favorite pokemon?'}, {user: 'Jackie', message: 'URNAME, whats ur fave food??'}]
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
    possibleInputs.forEach(possible=>{
        let obj = JSON.parse(possible)
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
        let m = JSON.parse(messages[i])
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