var dbd = require("dbd.js")
var fs = require("fs")

const fetch = require('node-fetch')
const bot = new dbd.Bot({
token: process.env.TOKEN,
prefix: "$getServerVar[prefix]"
})

 //bot status
bot.status({
  text: process.env.BOT_ACTIVITY_TEXT,
  type: process.env.BOT_ACTIVITY_TYPE,
  
  text: `with $randomText[$allMembersCount Users;$serverCount Server;$Help;$allChannelsCount Channels]`, // put any text
    type: "PLAYING", // LISTENING, PLAYING, WATCHING, COMPETING
    status: "online", // online, dnd, idle, invisible
    time: 75 // amount of times where you can change the bot status (if have multiple statuses)
})

    // FOR STREAMING STATUS USE THIS
    // bot.status({
    // text: "text", 
    // type: "STREAMING", 
    // url: "enter url/link"
    //   })
    // remove `//` in each side

// dbd.js 2.2.6 version    

    bot.musicStartCommand({
      channel: "$channelID",
      code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]\\]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
      })

// for dbd.js latest version
// remove all `//`
// delete the code above

// bot.musicStartCommand({
//  channel: "$channelID",
//  code: `$sendMessage[{description:▶ Now playing - **[$songInfo[title]]($songInfo[url])**}{color:RANDOM}{thumbnail:$songInfo[thumbnail]}{timestamp:ms};no]`
//  })

      bot.musicEndCommand({
        channel: "$channelID",
        code: `$sendMessage[{description:⏹ There's no one playing music anymore. I'm leaving the Voice Channel!}{color:RANDOM}{delete:10s};no]`
        })

 
bot.onMessage()

//variable
bot.variables({
 prefix: process.env.PREFIX,
 banks:"0",
 money:"500",
 diamond:"5",
 fish:"0",
 fishrod:"0",
 car:"0",
 house:"0",
 laptop:"0",
 fuel:"0",
 health:"100",
 hungry:"100",
 thirsty:"100",
 pizza:"0",
 drink:"0",
 hm:"0",
 crypto1:"0",
 crypto2:"0",
 crypto3:"0",
 xp: "0",
 level: "0",
 req: "50",
 expcd: "45",
 gw1:"0",
 gw2:"0",
 gw3:"0",
 leveling: "enabled",
 daily: process.env.DAILY_SALARY,
 monthly: process.env.MONTHLY_SALARY,
 adminpay: process.env.ADMIN_SALARY,
 random: process.env.RANDOM_SALARY,
 vote: process.env.VOTE_SALARY,
})


 //commands handler
var reader = fs.readdirSync("./Comment/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./Comment/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}
 //commands handler
var reader = fs.readdirSync("./levleing/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./levleing/${file}`)
  bot.command({
name: command.name, 
aliases: command.aliases,
code: command.code
  })
}
//help command here
bot.command({

name: "help",
aliases: ['Help'],
code: `$title[ BlueCityKH ❤️  HELP MENU  ]

$description[
**$getServerVar[prefix] filp** - Please type HEAD/TAILS!
**$getServerVar[prefix] bal** - Balance
**$getServerVar[prefix] pay** - pay diamond to player !
**$getServerVar[prefix] Levels** - Levels & Rank
**$getServerVar[prefix] Server** - Link & Server
**$getServerVar[prefix] Download** - Download App
**$getServerVar[prefix] Music** - Help Music
Please Check In Link Suppout [here\\](https://discord.gg/yRDKC8ZrKk) Now !
$color[RANDOM]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp]`
})
setInterval(async () => {
           await fetch('https://pyrite-jumbled-perch.glitch.me').then(console.log('pinged!'))
}, 240000)
