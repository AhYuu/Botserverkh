module.exports = {
  
  name: "balance",
  aliases: ['bal', 'ball','b','see'],
  code: `$title[Your Balance $username[$findMember[$message]]]
$description[
💎 ** Diamond** $getGlobalUserVar[diamond;$findMember[$message]]
]

$color[$random[0;999999]]
$footer[@$username developer  |By Kakada Loveu|]
$addTimestamp`
}