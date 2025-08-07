const fetch = require('node-fetch');

async function flirtCommand(sock, chatId, message) {
    try {
        const res = await fetch(`https://api.giftedtech.web.id/api/fun/flirt?apikey=gifted`);

        if (!res.ok) {
            throw await res.text();
        }

        const json = await res.json();
        const flirtMessage = json.result;

        // Send the flirt message
        await sock.sendMessage(chatId, { text: flirtMessage }, { quoted: message });
    } catch (error) {
        console.error('Error in flirt command:', error);
        await sock.sendMessage(chatId, { text: '❌ Failed to get flirt message. Please try again later!' }, { quoted: message });
    }
}

module.exports = { flirtCommand }; 