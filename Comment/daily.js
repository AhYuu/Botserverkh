module.exports = {
  
  name: "daily",
  code: `
$title[Daily Salary.]
$description[You have received **$getServerVar[daily]** of your daily allowance! The diamond is already in 💎!]
$color[$random[0;999999]]
$addTimestamp

$setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond];$getServerVar[daily]]]
$globalCooldown[1d;**⏰ Wait for %time% to claim daily salary again!**]
`
}