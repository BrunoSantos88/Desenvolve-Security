const os = require('os');
const diskusage = require('diskusage');
const path = require('path');

function checkMemory() {
    const totalMemory = os.totalmem(); // Total memória RAM disponível em bytes
    const freeMemory = os.freemem();   // Memória RAM livre em bytes

    console.log(`Memória total: ${formatBytes(totalMemory)}`);
    console.log(`Memória livre: ${formatBytes(freeMemory)}`);
}

function checkDisk() {
    const drive = path.parse(process.cwd()).root; // Obter a raiz do diretório de trabalho atual

    diskusage.check(drive, (err, info) => {
        if (err) {
            console.error('Erro ao verificar o uso do disco:', err);
            return;
        }

        console.log(`Espaço total no disco: ${formatBytes(info.total)}`);
        console.log(`Espaço livre no disco: ${formatBytes(info.free)}`);
        console.log(`Espaço usado no disco: ${formatBytes(info.total - info.free)}`);
    });
}

function checkCpu() {
    const cpus = os.cpus();
    let user = 0, nice = 0, sys = 0, idle = 0, irq = 0;

    cpus.forEach(cpu => {
        user += cpu.times.user;
        nice += cpu.times.nice;
        sys += cpu.times.sys;
        idle += cpu.times.idle;
        irq += cpu.times.irq;
    });

    const total = user + nice + sys + idle + irq;
    const usage = ((total - idle) / total) * 100;

    console.log(`Uso total da CPU: ${usage.toFixed(2)}%`);
}

// Função auxiliar para formatar bytes em uma forma legível
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

checkMemory();
checkDisk();
checkCpu();