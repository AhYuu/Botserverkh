module.exports = {
  
  name: "flip",
   code: `
$if[$randomText[head;tail;]==$message[1]]
$title[You Win

Your Diamond  $getGlobalUserVar[diamond] 💎]

$footer[Lucky Winner]


$color[00FF09] 
$setGlobalUserVar[diamond;$sum[$getGlobalUserVar[diamond;$authorID];$message[2]];$authorID]


$onlyIf[$message[2]<=$getGlobalUserVar[diamond;$authorID];You can't bet more then you have in your wallet!]

$suppressErrors[Correct usage: -flip HEAD/TAILS <ammount>]

$argsCheck[>1;Please type HEAD/TAILS!]
$argsCheck[>2;Please enter your bet!]

$else

$title[You Lost

Your Diamond  $getGlobalUserVar[diamond] 💎]

$footer[Looser]


$color[FF0000] 
$setGlobalUserVar[diamond;$sub[$getGlobalUserVar[diamond;$authorID];$message[2]];$authorID]

$argsCheck[>1;Please type HEAD/TAILS!]
$argsCheck[>2;Please enterammount!]


$onlyIf[$message[2]<=$getGlobalUserVar[diamond;$authorID];You can't bet more then you have in your wallet!]

$argsCheck[>1;Please type HEAD/TAILS!]
$argsCheck[>2;Please enter your bet!]

$suppressErrors[Correct usage: -flip HEAD/TAILS <ammount>]
$endif

   `
}