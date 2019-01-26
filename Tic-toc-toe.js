$('button').click(()  => {
  $('td').html('');
  $('td').removeAttr('content');
});

$('td').click((event) => {

  $(event.target).html('<i class="fas fa-times"></i>');
  $(event.target).attr('content', '1');

  // get table content
  var content = [];
  for (i = 0; i < 9; i++) {
    content[i] = $('td[position="' + i + '"]').attr('content')
  }

  var wining_p = [];
  var losing_p = [];

  for (i = 0; i < 9; i++) {

    if(content[i] == 0 || content[i] == 1) {
      wining_p[i] = 0;
      losing_p[i] = 0;
    } else {

      var temp = 0;

      switch (i) {
        case 0:
          if((content[1] == 0 || content[1] == undefined)
          && (content[2] == 0 || content[2] == undefined)){
            temp++;
            if((content[1] == 0 && content[2] == 0)){
              temp = temp + 3
            }
          }

          if((content[3] == 0 || content[3] == undefined)
          && (content[6] == 0 || content[6] == undefined)){
            temp++;
            if((content[3] == 0 && content[6] == 0)){
              temp = temp + 3
            }
          }

          if((content[4] == 0 || content[4] == undefined)
          && (content[8] == 0 || content[8] == undefined)){
            temp++;
            if((content[4] == 0 && content[8] == 0)){
              temp = temp + 3
            }
          }
          wining_p[i] = temp;
          break;

        case 1:
          if((content[0] == 0 || content[0] == undefined)
          && (content[2] == 0 || content[2] == undefined)){
            temp++;
            if((content[0] == 0 && content[2] == 0)){
              temp = temp + 3
            }
          }

          if((content[4] == 0 || content[4] == undefined)
          && (content[7] == 0 || content[7] == undefined)){
            temp++;
            if((content[4] == 0 && content[7] == 0)){
              temp = temp + 3
            }
          }
          wining_p[i] = temp;
          break;

        case 2:
          if((content[0] == 0 || content[0] == undefined)
          && (content[1] == 0 || content[1] == undefined)){
            temp++;
            if((content[0] == 0 && content[1] == 0)){
              temp = temp + 3
            }
          }
          if((content[0] == 1 || content[1] == 1)){
            temp = temp + 1;
          }

          if((content[4] == 0 || content[4] == undefined)
          && (content[6] == 0 || content[6] == undefined)){
            temp++;
            if((content[4] == 0 && content[6] == 0)){
              temp = temp + 3
            }
          }

          if((content[5] == 0 || content[5] == undefined)
          && (content[8] == 0 || content[8] == undefined)){
            temp++;
            if((content[5] == 0 && content[8] == 0)){
              temp = temp + 3
            }
          }
          if((content[5] == 1 || content[8] == 1)){
            temp = temp + 1;
          }
          wining_p[i] = temp;
          break;

        case 3:
          if((content[0] == 0 || content[0] == undefined)
          && (content[6] == 0 || content[6] == undefined)){
            temp++;
            if((content[0] == 0 && content[6] == 0)){
              temp = temp + 3
            }
          }

          if((content[4] == 0 || content[4] == undefined)
          && (content[5] == 0 || content[5] == undefined)){
            temp++;
            if((content[4] == 0 && content[5] == 0)){
              temp = temp + 3
            }
          }
          wining_p[i] = temp;
          break;

        case 4:
          if((content[1] == 0 || content[1] == undefined)
          && (content[7] == 0 || content[7] == undefined)){
            temp++;
            if((content[1] == 0 && content[7] == 0)){
              temp = temp + 3
            }
          }

          if((content[3] == 0 || content[3] == undefined)
          && (content[5] == 0 || content[5] == undefined)){
            temp++;
            if((content[3] == 0 && content[5] == 0)){
              temp = temp + 3
            }
          }

          if((content[0] == 0 || content[0] == undefined)
          && (content[8] == 0 || content[8] == undefined)){
            temp++;
            if((content[0] == 0 && content[8] == 0)){
              temp = temp + 3
            }
          }

          if((content[2] == 0 || content[2] == undefined)
          && (content[6] == 0 || content[6] == undefined)){
            temp++;
            if((content[2] == 0 && content[6] == 0)){
              temp = temp + 3
            }
          }
          wining_p[i] = temp;
          break;

        case 5:
          if((content[2] == 0 || content[2] == undefined)
          && (content[8] == 0 || content[8] == undefined)){
            temp++;
            if((content[2] == 0 && content[8] == 0)){
              temp = temp + 3
            }
          }

          if((content[3] == 0 || content[3] == undefined)
          && (content[4] == 0 || content[4] == undefined)){
            temp++;
            if((content[3] == 0 && content[4] == 0)){
              temp = temp + 3
            }
          }
          wining_p[i] = temp;
          break;

        case 6:
          if((content[0] == 0 || content[0] == undefined)
          && (content[3] == 0 || content[3] == undefined)){
            temp++;
            if((content[0] == 0 && content[3] == 0)){
              temp = temp + 3;
            }
          }

          if((content[2] == 0 || content[2] == undefined)
          && (content[4] == 0 || content[4] == undefined)){
            temp++;
            if((content[2] == 0 && content[4] == 0)){
              temp = temp + 3;
            }
          }

          if((content[7] == 0 || content[7] == undefined)
          && (content[8] == 0 || content[8] == undefined)){
            temp++;
            if((content[7] == 0 && content[8] == 0)){
              temp = temp + 3;
            }
          }
          wining_p[i] = temp;
          break;

        case 7:
          if((content[1] == 0 || content[1] == undefined)
          && (content[4] == 0 || content[4] == undefined)){
            temp++;
            if((content[1] == 0 && content[4] == 0)){
              temp = temp + 3
            }
          }

          if((content[6] == 0 || content[6] == undefined)
          && (content[8] == 0 || content[8] == undefined)){
            temp++;
            if((content[6] == 0 && content[8] == 0)){
              temp = temp + 3
            }
          }
          wining_p[i] = temp;
          break;

        case 8:
          if((content[0] == 0 || content[0] == undefined)
          && (content[4] == 0 || content[4] == undefined)){
            temp++;
            if((content[0] == 0 && content[4] == 0)){
              temp = temp + 3
            }
          }

          if((content[2] == 0 || content[2] == undefined)
          && (content[5] == 0 || content[5] == undefined)){
            temp++;
            if((content[2] == 0 && content[5] == 0)){
              temp = temp + 3
            }
          }
          if((content[2] == 1 || content[5] == 1)){
            temp = temp + 2;
          }

          if((content[6] == 0 || content[6] == undefined)
          && (content[7] == 0 || content[7] == undefined)){
            temp++;
            if((content[6] == 0 && content[7] == 0)){
              temp = temp + 3
            }
          }
          if((content[6] == 1 || content[7] == 1)){
            temp = temp + 2;
          }
          wining_p[i] = temp;
          break;
      }

//***************************losing_p*******************************************
      temp = 0;

      switch (i) {
        case 0:
          if((content[1] == 1 || content[1] == undefined)
          && (content[2] == 1 || content[2] == undefined)){
            temp++;
            if((content[1] == 1 && content[2] == 1)){
              temp = temp + 2
            }
          }

          if((content[3] == 1 || content[3] == undefined)
          && (content[6] == 1 || content[6] == undefined)){
            temp++;
            if((content[3] == 1 && content[6] == 1)){
              temp = temp + 2
            }
          }

          if((content[4] == 1 || content[4] == undefined)
          && (content[8] == 1 || content[8] == undefined)){
            temp++;
            if((content[4] == 1 && content[8] == 1)){
              temp = temp + 2
            }
          }

          //******************exception
          if((content[0] == 1 && content[8] == 1)
           || (content[2] == 1 && content[6] == 1)){
            temp = temp + 4;
          }
          losing_p[i] = temp;
          break;

        case 1:
          if((content[0] == 1 || content[0] == undefined)
          && (content[2] == 1 || content[2] == undefined)){
            temp++;
            if((content[0] == 1 && content[2] == 1)){
              temp = temp + 3
            }
          }

          if((content[4] == 1 || content[4] == undefined)
          && (content[7] == 1 || content[7] == undefined)){
            temp++;
            if((content[4] == 1 && content[7] == 1)){
              temp = temp + 3
            }
          }
          losing_p[i] = temp;
          break;

        case 2:
          if((content[0] == 1 || content[0] == undefined)
          && (content[1] == 1 || content[1] == undefined)){
            temp++;
            if((content[0] == 1 && content[1] == 1)){
              temp = temp + 2
            }
          }

          if((content[4] == 1 || content[4] == undefined)
          && (content[6] == 1 || content[6] == undefined)){
            temp++;
            if((content[4] == 1 && content[6] == 1)){
              temp = temp + 2
            }
          }

          if((content[5] == 1 || content[5] == undefined)
          && (content[8] == 1 || content[8] == undefined)){
            temp++;
            if((content[5] == 1 && content[8] == 1)){
              temp = temp + 2
            }
          }
          losing_p[i] = temp;
          break;

        case 3:
          if((content[0] == 1 || content[0] == undefined)
          && (content[6] == 1 || content[6] == undefined)){
            temp++;
            if(content[0] == 1 && content[6] == 1){
              temp = temp + 3;
            }
          }

          if((content[4] == 1 || content[4] == undefined)
          && (content[5] == 1 || content[5] == undefined)){
            temp++;
            if(content[4] == 1 && content[5] == 1){
              temp = temp + 3;
            }
          }

          //******************exception
          if((content[0] == 1 && content[8] == 1)
           || (content[2] == 1 && content[6] == 1)){
            temp = temp + 4;
          }
          losing_p[i] = temp;
          break;

        case 4:
          if((content[1] == 1 || content[1] == undefined)
          && (content[7] == 1 || content[7] == undefined)){
            temp++;
            if((content[1] == 1 && content[7] == 1)){
              temp = temp + 2;
            }
          }

          if((content[3] == 1 || content[3] == undefined)
          && (content[5] == 1 || content[5] == undefined)){
            temp++;
            if((content[3] == 1 && content[5] == 1)){
              temp = temp + 2;
            }
          }

          if((content[0] == 1 || content[0] == undefined)
          && (content[8] == 1 || content[8] == undefined)){
            temp++;
            if((content[0] == 1 && content[8] == 1)){
              temp = temp + 2;
            }
          }

          if((content[2] == 1 || content[2] == undefined)
          && (content[6] == 1 || content[6] == undefined)){
            temp++;
            if((content[2] == 1 && content[6] == 1)){
              temp = temp + 2;
            }
          }
          losing_p[i] = temp;
          break;

        case 5:
          if((content[2] == 1 || content[2] == undefined)
          && (content[8] == 1 || content[8] == undefined)){
            temp++;
            if((content[2] == 1 && content[8] == 1)){
              temp = temp + 3;
            }
          }

          if((content[3] == 1 || content[3] == undefined)
          && (content[4] == 1 || content[4] == undefined)){
            temp++;
            if((content[3] == 1 && content[4] == 1)){
              temp = temp + 3;
            }
          }

          //******************exception
          if((content[0] == 1 && content[8] == 1)
           || (content[2] == 1 && content[6] == 1)){
            temp = temp + 4;
          }
          losing_p[i] = temp;
          break;

        case 6:
          if((content[0] == 1 || content[0] == undefined)
          && (content[3] == 1 || content[3] == undefined)){
            temp++;
            if((content[0] == 1 && content[3] == 1)){
              temp = temp + 2;
            }
          }

          if((content[2] == 1 || content[2] == undefined)
          && (content[4] == 1 || content[4] == undefined)){
            temp++;
            if((content[2] == 1 && content[4] == 1)){
              temp = temp + 2;
            }
          }

          if((content[7] == 1 || content[7] == undefined)
          && (content[8] == 1 || content[8] == undefined)){
            temp++;
            if((content[7] == 1 && content[8] == 1)){
              temp = temp + 2;
            }
          }
          losing_p[i] = temp;
          break;

        case 7:
          if((content[1] == 1 || content[1] == undefined)
          && (content[4] == 1 || content[4] == undefined)){
            temp++;
            if((content[1] == 1 && content[4] == 1)){
              temp = temp + 3;
            }
          }

          if((content[6] == 1 || content[6] == undefined)
          && (content[8] == 1 || content[8] == undefined)){
            temp++;
            if((content[6] == 1 && content[8] == 1)){
              temp = temp + 3;
              if(content[2] == 1) {
                temp = temp + 1;
              }
            }
          }

          //******************exception
          if((content[0] == 1 && content[8] == 1)
           || (content[2] == 1 && content[6] == 1)){
            temp = temp + 4;
          }
          losing_p[i] = temp;
          break;

        case 8:
          if((content[0] == 1 || content[0] == undefined)
          && (content[4] == 1 || content[4] == undefined)){
            temp++;
            if((content[0] == 1 && content[4] == 1)){
              temp = temp + 2;
            }
          }

          if((content[2] == 1 || content[2] == undefined)
          && (content[5] == 1 || content[5] == undefined)){
            temp++;
            if((content[2] == 1 && content[5] == 1)){
              temp = temp + 2
            }
          }

          if((content[6] == 1 || content[6] == undefined)
          && (content[7] == 1 || content[7] == undefined)){
            temp++;
            if((content[6] == 1 && content[7] == 1)){
              temp = temp + 2
            }
          }
          losing_p[i] = temp;
          break;
      }

    }
  }

  var result = [];

  for(i=0; i<9; i++) {
    result[i] = wining_p[i] + losing_p[i];
  }

  var highest_chance = result.indexOf(Math.max(...result));

  //don't change content if game is over
  var zero = 0;
  for(i=0; i<9; i++) {
    if(result[i] == 0){
      zero++;
    }
  }
  if(zero == 9) {
    return;
  }

  $('td[position="' + highest_chance + '"]').attr('content', '0');
  $('td[position="' + highest_chance + '"]').html('<i class="far fa-circle"></i>');

});
