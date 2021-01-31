// Mixed Messages


const generateRandomNumber = num => {
    return Math.floor(Math.random() * num)
};





const messages = {
    welcome: ['Admin', 'User', 'AMHF', 'Adham'],
    play: ['A M H F Is Here', `Don't Touch`, 'JavaScript', 'HTML/CSS3'],
    goodBye: ['See You Next Time', `Don't Play With The Files In The Server`, `I Will Find You`, `You Can Leave Now`]
}


let standered = [`This Is My First Project Without Any Hints`]
let loader = [];


for (let i in messages) {
    let option = generateRandomNumber(messages[i].length)
    switch(i) {
        case 'welcome': 
            loader.push(`Welcome: ${messages[i][option]}`);
            break
        case 'play':
            loader.push(`Play: ${messages[i][option]}`);
            break;
        case 'goodBye':
            loader.push(`Good Bye: ${messages[i][option]}.`);
            break;
        default:
            loader.push(`No More Information.`)
    }
};


const join = msgs => {
    const msg = loader.join('\n');
    console.log(msg);
    console.log(`${standered}`)
}

join(loader)