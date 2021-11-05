module.exports = {
  
  name: "pay",
  code: `$title[Give Cash!]
$description[You just give <@$mentioned[1]> 💎 $message[2] Diamond !]

  $setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond;$mentioned[1]];$message[2]];$mentioned[1]]
$setGlobalUserVar[diamond;$sub[$getGlobalUserVar[diamond;$authorID];$message[2]];$authorID]
$onlyIf[$message[2]<$getGlobalUserVar[diamond;$authorID];**You don't have that much Diamond !**]

$onlyIf[$message[2]>=1;**You can only give more than 💎 1.**
$argsCheck[2;To Use: \`$getServerVar[prefix]pay <@user> <ammount>\`]]
$color[$random[0;999999;]]

`
}