$(document).ready(function(){

			var winCounter = 0;
			var loseCounter = 0;
			var gameCounter = 0;

			var randomNum = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
			$("#target-Number").text(randomNum);

			var counter = 0;
			var arr = [];
			arr.length = 0;
			while(arr.length < 4){
				var randomnumber = Math.floor(Math.random()*9) + 1;
				if(arr.indexOf(randomnumber) > -1) continue;
				arr[arr.length] = randomnumber;
			}
			console.log(arr + " first");


			function newImgVal (){
			$("#crystalVal1").attr("value" , arr[0]);
			$("#crystalVal2").attr("value" , arr[1]);
			$("#crystalVal3").attr("value" , arr[2]);
			$("#crystalVal4").attr("value" , arr[3]);
			}

			newImgVal();



			$(".crystals").on("click", function(){
				var crystalValue = ($(this).attr("value"));
				
				crystalValue = parseInt(crystalValue);
				counter += crystalValue;
				$("#Score").text(counter);


				if (randomNum == counter){
					alert("You Win!");

					winCounter++;
					$("#winCounter").text(winCounter);
					gameCounter ++;
					$("#gameCounter").text(gameCounter);
					
					reset();
					
				}


				else if (counter > randomNum){

					alert("You Lose! Try again!");

					loseCounter++;
					$("#loseCounter").text(loseCounter);
					gameCounter ++;
					$("#gameCounter").text(gameCounter);
					reset();
					
				}

			})
		


			function reset(){
				
				randomNum = 0;
				randomNum = Math.floor(Math.random() * (50 - 20 + 1)) + 20;
				$("#target-Number").text(randomNum);

				counter = 0;

				$("#Score").text(counter);
				arr = [];
				arr.length = 0;
				while(arr.length < 4){
					var randomnumber = Math.floor(Math.random()*9) + 1;
					if(arr.indexOf(randomnumber) > -1) continue;
					arr[arr.length] = randomnumber;					
				}

				console.log(arr + " second");
				newImgVal();


			}


		})



		