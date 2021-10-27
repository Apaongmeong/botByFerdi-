const { WAConnection, Browsers } = require('@adiwajshing/baileys')
const { color, bgcolor } = require('./lib/color')
const fs = require("fs-extra")
const figlet = require('figlet')
const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

//nocache
require('./dha.js')
nocache('../dha.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))
require('./message/group.js')
nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))

const starts = async (dha = new WAConnection()) => {
	dha.logger.level = 'warn'
	console.log(color(figlet.textSync('FERDI BOT🤙', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('[ SOURCE CODE INI DI RECODE OLEH HRUTZOFFC\nDENGAN AUTHOR FERDI BOT ]\n\n', 'orange'), color('\n======TERIMAKASIH BANYAK KEPADA======\n•MHANKBARBAR\n•HRUTZOFFC\n•KURRXD\n•NINO\n•IKYADS\n•KurrXd\n•DAPPAUHUY\n•DAN CREATOR BOT LAINNYA', 'yellow'))
	console.log(color('\n\nSARAN JANGAN DI JUAL ULANG BRO\nKALAU ADA YG MINTA SURUH CHAT SAYA\nWA FERDI BOT🤙 6281217152804', 'pink'))
	console.log(color('\n\n[ SAYA DOAKAN YANG SUBSCRIBE LANCAR, ANTI ERROR PAS RECODE DAN YG TIDAK, YA TAU LAH AKIBAT NYA', 'red'))
	dha.browserDescription = ["SHERLYNN BOTZ", "Chrome", "3.0.0"];

	// Menunggu QR
	dha.on('qr', () => {
		console.log(color('[', 'pink'), color('!', 'red'), color(']', 'pink'), color('SCANLAH BROKAN LU OWNER GUA SEKARANG'))
	})

	// Menghubungkan
	fs.existsSync(`./${setting.sessionName}.json`) && dha.loadAuthInfo(`./${setting.sessionName}.json`)
	dha.on('connecting', () => {
		console.log(color('[ FERDI BOT ]', 'yellow'), color('PROSES NYAMBUNG...'));
	})
const spinner = { 
  "interval": 120,
  "frames": [
    "K",
    "Ku",
    "Kur",
    "Kurr",
    "KurrXd",
    "KurrXd G",
    "KurrXd GA",
    "KurrXd GAN",
    "KurrXd GANT",
    "KurrXd GANTE",
    "KurrXd GANTEN",
    "KurrXd GANTENG",
    "KurrXd GANTENG B",
    "KurrXd GANTENG BA",
    "KurrXd GANTENG BAN",
    "KurrXd GANTENG BANG",
    "KurrXd GANTENG BANGE",
    "KurrXd GANTENG BANGET",
    "KurrXd GANTENG BANGET A",
    "KurrXd GANTENG BANGET AN",
    "KurrXd GANTENG BANGET ANJ",
    "KurrXd GANTENG BANGET ANJI",
    "KurrXd GANTENG BANGET ANJIR",
    "KurrXd GANTENG BANGET ANJIR, B",
    "KurrXd GANTENG BANGET ANJIR, BT",
    "KurrXd GANTENG BANGET ANJIR, BTW",
    "KurrXd GANTENG BANGET ANJIR, BTW J",
    "KurrXd GANTENG BANGET ANJIR, BTW JA",
    "KurrXd GANTENG BANGET ANJIR, BTW JAN",
    "KurrXd GANTENG BANGET ANJIR, BTW JANG",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGA",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN J",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JU",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUA",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL S",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC I",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC IN",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI C",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI CO",
    "KurrXd GANTENG BANGET ANJIR, BTW JANGAN JUAL SC INI COK"
  ]}

	//connect
	dha.on('open', () => {
		console.log(color('[ FERDI BOT ]', 'yellow'), color('BOT SUDAH AKTIF  SELAMAT MENGGUNAKAN'));
	})

	// session
	await dha.connect({
		timeoutMs: 30 * 1000
	})
	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(dha.base64EncodedAuthInfo(), null, '\t'))

	// Baterai
	dha.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	dha.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// welcome
	dha.on('group-participants-update', async (anu) => {
		await welcome(dha, anu)
	})

	dha.on('chat-update', async (message) => {
		require('./dha.js')(dha, message)
	})
}

starts()