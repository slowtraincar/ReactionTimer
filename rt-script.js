      /*Timer*/            
            var start = new Date().getTime();
/*High score array*/       
            var highScore = [];
            
            alert(window.innerHeight);
            
/*Set random color*/    
            
            function getRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i = 0; i < 6; i++ ) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
/*Set random variables to determain shape, size, location*/            
            function makeShapeAppear() {
                
                var top =  Math.random() * (window.innerHeight *.55); 
                var left = Math.random() * (window.innerWidth*.65);
                var width = (Math.random() * 100) + 50;
                
                if (Math.random() > 0.5) {
/*Make it a circle*/                    
                    document.getElementById("shape").style.borderRadius = "50%";
                    
                } else {
/*Make it a square*/                    
                    document.getElementById("shape").style.borderRadius = "0";
                    
                }
/*Create random size  shape*/                
                document.getElementById("shape").style.backgroundColor = getRandomColor();
                document.getElementById("shape").style.width = width + "px";
                document.getElementById("shape").style.height = width + "px";
                document.getElementById("shape").style.top = top + "px";
                document.getElementById("shape").style.left = left + "px";
                document.getElementById("shape").style.display = "block";
               
                start = new Date().getTime();

            }
/*Make a new shape pop up at random time*/            
            function appearAfterDelay() {
                setTimeout(makeShapeAppear, Math.random() * 2000);
                
            }
            appearAfterDelay();

            
/*Dissapear on click*/          
            document.getElementById("shape").onclick = function(){
                document.getElementById("shape").style.display = "none";
            
/*Scoring*/            
            var end = new Date().getTime();
            var timeTaken = (end - start) / 1000;
            highScore.push(timeTaken);
            highScore.sort(function(a,b){return a-b});
            document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";
            document.getElementById("bestTime").innerHTML = highScore[0] + " seconds";
   
            appearAfterDelay();
        } 
