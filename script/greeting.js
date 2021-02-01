
      {
        var greeting;
        var time = new Date().getHours();
        if(time >= 0&& time< 5)
        {
          greeting="Dậy sớm thế?";
          console.log("Dậy sớm thế?");
          document.getElementById('good-early').play();
          document.getElementById('good-early').volume = 0.2;

        }
        else if (time >= 6 && time <10) {
          greeting = "Chào buổi sáng,";
          console.log("Sáng");
          document.getElementById('good-morning').play();
          document.getElementById('good-morning').volume = 0.2;
        }
        else if (time >= 11 && time < 12)
        {
          console.log("Trưa");
          greeting ="Chào buổi trưa"; 
          document.getElementById('good-noon').play();
          document.getElementById('good-noon').volume=0.2;
        }
        else if(time >= 12 && time<18){
          console.log("Chiều");
          greeting ="Chào buổi chiều";
          document.getElementById('good-afternoon').play();
          document.getElementById('good-afternoon').volume=0.2;
        } 
         else if(time >= 18 && time <22){
          console.log("Tối");
          greeting = "Buổi tối tốt lành,";
          document.getElementById('good-everning').play();
          document.getElementById('good-everning').volume=0.2;
        }
        else{
          greeting = "Chúc ngủ ngon,";
          console.log("Khuya");
          document.getElementById('good-night').play();
          document.getElementById('good-night').volume=0.2;
        }
        document.getElementById("greet").innerHTML = greeting +" Hoàng Thọ! ";
      }
