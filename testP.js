const characters = ["Sonic","Tails","Mario","Luigi","Bowzer","Princess","Toad"];

for(let i = 0; i < characters.length;  i++){
    if(i === characters.length - 1){
        console.log(`and ${characters[i]}.`);
    }else
    console.log(`${characters[i]},`);

}