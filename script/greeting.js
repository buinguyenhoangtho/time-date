
      {
        var greeting;
        var time = new Date().getHours();
        if(time >= 0&& time< 5)
        {
          greeting="Dậy sớm thế?";
          console.log("Dậy sớm thế?");
        }
        else if (time >= 6 && time <10) {
          greeting = "Chào buổi sáng,";
          console.log("Sáng");
        }
        else if (time >= 11 && time < 12)
        {
          console.log("Trưa");
          greeting ="Chào buổi trưa"; 
        }
        else if(time >= 12 && time<18){
          console.log("Chiều");
          greeting ="Chào buổi chiều";
        } 
         else if(time >= 18 && time <22){
          console.log("Tối");
          greeting = "Buổi tối tốt lành,";
        }
        else{
          greeting = "Chúc ngủ ngon,";
          console.log("Khuya");
        }
        document.getElementById("greet").innerHTML = greeting +" Hoàng Thọ! ";
      }
