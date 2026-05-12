const bcrypt = require('bcrypt');

async function generarHash() {
    const hash = await bcrypt.hash('123456', 10);
    console.log('Hash para "123456":');
    console.log(hash);
}

generarHash();