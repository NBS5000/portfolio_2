/* Function declared at top*/
/* Purpose is to evaluate result */
function result (val1,val2,val3,val4){
    //val1 is target, val2 is score, val3 is player, val4 is balls
    //difference calculated for win/loss by
    var diff;
    //different set of text to display how out
    var out = ["Clean bowled!","That's edged and caught in the slips!","On the front foot and misjudged the flight and it clips the bails !","A wild swing and a it clips the pads, out LBW!","Rapid reactions from the keeper and he's stumped!","The ball loops up into the air and it's caught!","A mix up between the batters and it's a run out!","And that's a peach of a delivery, there was no chance!","The faintest of touches and it carries through to the keeper", "Well that's a comical shot, I've no idea what was going on there!"]
    var num = out.length;
    var ran = Math.floor(Math.random() * num);
    if(val2 < 0){
        return;
    }else if(val2 < val1){
        diff = val1 - val2;
        alert(out[ran] + "\n\nThat's not surprising, " + val3 + " succumbs to this relentless attack after " + val4 + " deliveries, they end up " + diff + " runs short.")
        score = score - 1000;
    }else if(val1 == val2){
        alert(out[ran] + "\n\nWell done to " + val3 + ", they've managed to tie the game!");
        score = score - 1000;
    }else{
        diff = val2 - val1 ;
        alert("An innings that will go down in history!\n\n" + val3 + " has plucked this team from the jaws of defeat and stolen victory, winning by " + diff + " runs!");
    }
    console.log(num);
}
function cricket (){
    var playing = true;
    while(playing == true){
            
        var player, score, target, hit, prefill;
        //generate target
        target = Math.floor(Math.random() * 20) + 10;
        score = 0;
        prefill = "Enter name";

        //Ask for the player name
        if (!player)
            player = prompt("This has been a shocking innings! The home team has lost 9 wickets and scored 0 runs in their chase of " + target + ".\n(To play, select a number 1, 2, 3, 4, or 6)\n\nUp next is...", prefill)
        //end if cancelled or no name entered
        if(!player || player == prefill)
            throw("bye bye!");

        //The only shots available....otherwise it's just not cricket!!
        hit = ["1","2","3","4","6"]
        var balls = 0;

        //while loop for playing the game, will continue until target is met or they are out
        while( score <= target && score>= 0 )
        {
            //adjust chase to reflect current target
            var chase = target - score;
            balls = balls +1;
            var shot;
            //this is the delivery of the bowler, if the number matches the shot, the batsman is out and game over
            var bowl = Math.floor(Math.random() * 6);
            //shot selection
            shot = prompt("The bowler comes in...\n(1,2,3,4,6) \n\nCurrently " + chase + " runs behind")
            if(score < 0){
                //error capture if something failed after being out
                break;
            }else if(hit.indexOf(shot) == -1){
                //out if shot selected is anything other than permitted
                result(target,score,player,balls);
            }else if(shot == bowl){
                //out if shot selected matches delivery
                result(target,score,player,balls);
            }else {
                //if not out, add shot to score
                score = parseInt(score) + parseInt(shot);
            }
        }

        //pass to other function to handle result display
        result(target,score,player,balls);
        //after result handled, re-adjust score if out
        if(score < 0){
            score = score + 1000;
        }
        //concat for log alert and console
        var final = "Name: " + player + " - Target: " + target + " - Score: " + score;
        alert(final);
        console.log(final);
        var repeat = confirm("Do you wish to play again?");
        if (!repeat)
            playing = false;
    }
}