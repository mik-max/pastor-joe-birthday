const baseUrl = 'http://api.birthday.celz4.org/';
document.addEventListener("DOMContentLoaded", function(){
     let churchesDetails = 
     [
          {
              "ChurchName":"CE Central Church",
              "PastorName":"Pastor Joe Agbaje",
              "PhoneNumber":"",
              "Group":"Central Church"
          },
          {
              "ChurchName":"CE Ota",
              "PastorName":"Pastor Olumide Ashiru David-King",
              "PhoneNumber":"+2348096812189",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Owode",
              "PastorName":" Brother Barnabas Ushilo",
              "PhoneNumber":"+2349058464741",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Alasia",
              "PastorName":" Pastor Jane Okpalanwan",
              "PhoneNumber":"+2348035044988",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ifo 2",
              "PastorName":" Brother Shayi Olatunji",
              "PhoneNumber":"+2348035644796",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ifo",
              "PastorName":" Brother Norbert Obogai",
              "PhoneNumber":"+2348073336800",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ojuore",
              "PastorName":" Brother Fortune Peters",
              "PhoneNumber":" +2349093654210",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ilogbo",
              "PastorName":" Brother Stephen Ben",
              "PhoneNumber":"+2347033589781",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE The Bells",
              "PastorName":" Brother Ekeh Uchenna David",
              "PhoneNumber":"+2348121905677",
              "Group":"Ota Group"
          },
          {
              "ChurchName":"CE Ijoko",
              "PastorName":" Pastor Kasim Jimoh",
              "PhoneNumber":"+2348107258612",
              "Group": "Ijoko Group"
          },
          {
              "ChurchName":"CE Iyana Iyesi",
              "PastorName":" Broher Dare Taiwo",
              "PhoneNumber":"+2348101829343",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Atan ",
              "PastorName":" Pastor Felix Okonji",
              "PhoneNumber":"+2348058276409",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE IJu",
              "PastorName":"Brother Ifeanyi Chukwdi",
              "PhoneNumber":"+2348064280577",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Lisa",
              "PastorName":" Brother Afolabi Tunde",
              "PhoneNumber":"+2348059860342",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Iyana 2",
              "PastorName":" Brother Moredayo Richard",
              "PhoneNumber":"+2348035270045",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Abule 1",
              "PastorName":" Brother Adeyemo Victor",
              "PhoneNumber":"+2348066777205",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Ntabo 1",
              "PastorName":" Brother OLumide Olamakinde",
              "PhoneNumber":"+2348180053565",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Sharp Corner",
              "PastorName":" Brother Onome Omoyibo",
              "PhoneNumber":"+2347035208321",
              "Group":"Ijoko Group"
          },
          {
              "ChurchName":"CE Alakuko",
              "PastorName":" Pastor Richard Ododo ",
              "PhoneNumber":"+2348096812189",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Abebi",
              "PastorName":" Brother Charles Iberi ",
              "PhoneNumber":"+2348029510709",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE New Estate",
              "PastorName":" Sister Ebele Kennedy ",
              "PhoneNumber":"+2348095362643",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Worship Center",
              "PastorName":" Sister Lydia oparaji ",
              "PhoneNumber":"+2348064631787",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Temidire",
              "PastorName":" Brother Dennis Henry ",
              "PhoneNumber":"+2347033003657",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Ajegunle",
              "PastorName":" Brother Akpoya Anas ",
              "PhoneNumber":"+2349032885417",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Ilo",
              "PastorName":" Brother Samuel Ovajimoh ",
              "PhoneNumber":"+2349031939647",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Adura",
              "PastorName":" Brother Ebhodghe Charles ",
              "PhoneNumber":"+2348033746917",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Iloye",
              "PastorName":" Brother Zedek Okolie ",
              "PhoneNumber":"+2348164585044",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Adalemo 2",
              "PastorName":" Brother Emmanuel Ose ",
              "PhoneNumber":"+2349012262925",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE Adalemo",
              "PastorName":" Brother Obanor Ikponmwosa",
              "PhoneNumber":"+2348106425302",
              "Group":"Alakuko Group"
          },
          {
              "ChurchName":"CE 5th Avenue",
              "PastorName":" Pastor Anthony Osula",
              "PhoneNumber":"+2347038574242",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Aboru",
              "PastorName":" Pastor Odion Oyarero",
              "PhoneNumber":"+2348132575467",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Aboru 2",
              "PastorName":" Pastor Christine Osula",
              "PhoneNumber":"+2348038265584",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Ayobo",
              "PastorName":" Pastor Gbemisola Orekoya",
              "PhoneNumber":"+2347082206978",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Akinola",
              "PastorName":" Brother Omorodion Frank",
              "PhoneNumber":"+2348033925020",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Baruwa",
              "PastorName":" Sister Laura Nnebedim",
              "PhoneNumber":"+2347081957799",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Abesan",
              "PastorName":" Brother Simeon Eigbedion ",
              "PhoneNumber":"+2349094630227",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE 22 Road",
              "PastorName":" Brother Sebastian Ezeh ",
              "PhoneNumber":"+2348035318630",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Ayobo 2",
              "PastorName":" Brother Joshua Onyejiaka",
              "PhoneNumber":"+2347030613517",
              "Group":"Egbeda Group"
          },
          {
              "ChurchName":"CE Casso",
              "PastorName":" Pastor Chris Adeke ",
              "PhoneNumber":"+2348055177624",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Ijaye",
              "PastorName":" Pastor Osas Dickson ",
              "PhoneNumber":"+2348023610300",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE AIT Road",
              "PastorName":" Brother Ade Adetimilehin ",
              "PhoneNumber":"+2348060452857",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Aminkonle",
              "PastorName":" Brother Michael Olugbayimu ",
              "PhoneNumber":"+2348024156705",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Ajasa",
              "PastorName":" Brother Sybil Adeke ",
              "PhoneNumber":"+2347010689098",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Agbele",
              "PastorName":" Brother Paul Gbassa ",
              "PhoneNumber":"+2348069458115",
              "Group":"Central Group"
          },
          {
              "ChurchName":"CE Merit",
              "PastorName":" Brother Afolabi Hezekiah",
              "PhoneNumber":"+2348163391143",
              "Group":"Central Group"
          } 
     ]
     
     let church1 = document.getElementById('church1');
     let church2 = document.getElementById('church2');
     for(let index = 0; index < churchesDetails.length; index++){
          let option = document.createElement('option');
          option.setAttribute('value', churchesDetails[index].ChurchName);
          option.innerText = churchesDetails[index].ChurchName;
          church1.appendChild(option);
     };
     for(let index = 0; index < churchesDetails.length; index++){
          let option = document.createElement('option');
          option.setAttribute('value', churchesDetails[index].ChurchName);
          option.innerText = churchesDetails[index].ChurchName;
          church2.appendChild(option);
     };
     let arrayOfContestImages = [
          "Images/athelete.jpg",
          "Images/challenge.jpg",
          "Images/challenge2.jpg"
     ]
     function updateBirthdayContest(){
        let image = document.getElementById('birthdayContestImg');
        let removedFromSlide = arrayOfContestImages.shift();
        arrayOfContestImages.push(removedFromSlide);
        image.setAttribute('src', removedFromSlide);   
     }
     let updates;
      function stopBirthdaySlide() {
          clearInterval(updates);
      }
      function startBirthdaySlide(func) {
          updates = setInterval(func, 10000);
      }
      startBirthdaySlide(updateBirthdayContest);
      let arrayOfGift = [
          "Images/giftbox1.png",
          "Images/giftbox2.png",
          "Images/giftbox3.jpg",
          
      ]
     
      function giftPastor(){
          let image = document.getElementById("giftImg");
          let removedFromSlide = arrayOfGift.shift();
          arrayOfGift.push(removedFromSlide);  
          image.setAttribute('src', removedFromSlide);   
      }
      startBirthdaySlide(giftPastor);

      
      /* imageArray1 = [
          'Images/pastorJoe1.jpg',
          'Images/pastorJoe2.jpg',
          'Images/pastorJoe3.jpg',
          'Images/pastorJoe4.jpg',
          'Images/pastorJoe5.jpg',
          'Images/pastorJoe6.jpg',
          'Images/pastorJoe7.jpg',
          'Images/pastorJoe8.jpg',
          'Images/pastorJoe9.jpg',
      ]
       let sliced = imageArray1.slice(0, 3);
       imageArray2 = sliced;
       let imageArray1Remainder = imageArray1.slice(3)
       //console.log(imageArray2);
       //console.log(imageArray1Remainder);
      let imageGallery = document.getElementById('imageGallery'); */


      

      
      
     
     //console.log(updates)


     document.querySelectorAll('.gallery-image').forEach(element => {
          element.setAttribute('data-toggle', 'modal');
          element.setAttribute('data-target', '#myModal')  
          element.addEventListener('click', imageModal);
     });
     // Get the live-images  modal
        // Get the live-images  modal
        var modal = document.getElementById("imgModal");

        // Get the image and insert it inside the modal - use its "alt" text as a caption
          function imageModal(){
               var modalImg = document.getElementById("img01");
               var captionText = document.getElementById("caption");
               document.querySelectorAll(".gallery-image").forEach(element => {
                    element.onclick = function(){
                         modal.style.display = "block"; 
                         modalImg.src = this.src;
                         captionText.innerHTML = 'Uploaded by me'; //this.alt;
                    }
               });
          
          
               // Get the <span> element that closes the modal
               var span = document.getElementsByClassName("img-close")[0];
          
               // When the user clicks on <span> (x), close the modal
               span.onclick = function() {
                    modal.style.display = "none";
               }
          }
          imageModal();
      
     let innerCityArray = [
          "Images/inner-city.jpg",
          "Images/homeless-boy.jpg",
          "Images/innercity2.jfif"
     ]
     function feedAChild(){
          let image = document.getElementById("feedAChildChallenge");
          let removedFromSlide = innerCityArray.shift();
          innerCityArray.push(removedFromSlide);  
          image.setAttribute('src', removedFromSlide);   
      }
      startBirthdaySlide(feedAChild);
     AOS.init();//initializing plugin for animations onscroll
     let person = {
          name: "John",
          age: 22
      };
     localStorage.setItem("profile", JSON.stringify(person));
     let storageProfileString = localStorage.getItem("profile");
     let savedPerson = JSON.parse(storageProfileString);
     console.log(savedPerson);

     let arrayOfComments = [
          {
               title: "Pastor",
               name: "Allen Imoni",
               comments:[
                    "To my Father，Life Coach, Mentor，Role model.... The words in English vocabulary are not enough to express the joy in my heart today as I tag along Host of Heaven to celebrate you. Thank You immensely for been a wonderful father. Happy Birthday to you Sir."
               ],
               avatar: "Images/Past8.png"
          },
          {
               title: "Brother",
               name: "Martins Willams",
               comments:[
                    "Happy birthday celebration to my Daddy and Friend. I'm happy to be celebrating you! Thanks for being a great friend and loving father, I love you so much!!!"
               ],
               avatar: "Images/Past2.jpeg"
          },
          {
               title: "Pastor",
               name: "Tony Abu",
               comments:[
                    "Happy Birthday to our miracle Worker, a reality Evangelist, A man sent from God, a burning and a Shinning Light, an exemplary Leader and a Blessing to all. Pastor, we love you Sir! Happy Birthday!!!"
               ],
               avatar: "Images/Past7.jpg"
          },
          {
               title: "Pastor",
               name: "Lydia Oparagi",
               comments:[
                    "Happy supernatural birthday to my father, mentor, coach, teacher, pastor and Boss. Thank you pastor Sir for your unconditional love for me and guiding me in the right path to go. You gave my life a meaning. I learnt alot working beside you as member of Petramultimedia. Thank you so much sir for your investment in my life. I love you forever sir!!!"
               ],
               avatar: "Images/Past3.jpeg"
          },
     ]
     let count = 0;
     function updateComments(){
          let item = document.getElementById('comment-div');
          item.innerHTML = " ";
          let htmlContent = `
                    <div class= "animate__animated animate__zoomIn">
                         <p class="text-white">
                              <i class="icon-quote-open"></i><br>
                              ${arrayOfComments[count].comments}
                         </p>
                         <img src="${arrayOfComments[count].avatar}"  alt="" class="img-fluid rounded-circle">
                         <h5 class="text-center text-white">${arrayOfComments[count].title} ${arrayOfComments[count].name}</h5>
                    </div>
          `
          count++;
          item.insertAdjacentHTML( "afterbegin",htmlContent);
          if(count == arrayOfComments.length){
               count = 0;
          }
     }
     startBirthdaySlide(updateComments);

     let base64String = "";
     let type = "";
     function imageUploaded() {
     // var file = document.querySelector(
     // 'input[type=file]')['files'][0];
     type = this.files[0].type;
     console.log(type);
     var reader = new FileReader();
     console.log("next");
     reader.onload = function () {
          base64String = reader.result.replace("data:", "")
               .replace(/^.+,/, "");
          imageBase64Stringsep = base64String;
          // alert(imageBase64Stringsep);
          console.log(base64String);
     }

     /* if (file.size > 2097152) {
          alert("File is too big!");
          this.value = "";
     }
     else {
          
     } */
     reader.readAsDataURL(this.files[0]);
     }
     function displayString() {
     let value = base64String
     
     return value;
     }
     function displayType(){
     let value = type
     console.log(type);
     if(value == "image/jpg"|| value == "image/png" || value == "image/jpeg" || value == "image/mpeg"){
          return "Image";
     }else if(value == "video/mp4"){
          return  "video";
     }
     else if(value == "audio/mp3"){
          return "Audio";
     }
     }
     let phoneCount = 0;
     let gifterNumber = document.querySelector('#plnumber');
     function backSpaceFunc(event){
          const key = event.key;
          if (key === "Backspace" || key === "Delete") {
               gifterNumber.onkeydown = function(){ 
                    return true;
               }
               phoneCount--;
               ;
          }else if(phoneCount === 11){
               gifterNumber.onkeydown = function(){
                    return false;
               }
          }
          else if (gifterNumber.value === " "){
               gifterNumber.onkeydown = function(){
                    return true;
               } 
          }
     }
     function keysFunc(event){
          phoneCount ++;
     
          if (phoneCount === 11){
               gifterNumber.onkeydown = function(){
                    return false;
               }
          }
          else{
               gifterNumber.onkeydown = function(){
                    return true;
               }
          }
      }
     function dynamicCountryNumbers(para){
          intlTelInput(para, {
               initialCountry: "auto",
               geoIpLookup: function (success, failure) {
                    $.get("https://ipinfo.io", function () { }, "jsonp").always(function (resp) {
                         var countryCode = (resp && resp.country) ? resp.country : "us";
                         success(countryCode);
                         console.log(resp)
                    });
               },
          });
     }
     document.getElementById('uploads').addEventListener('change', imageUploaded);
     let challengeNumber = document.getElementById('number')
     $('#upload-btn').click(function(e){
          e.preventDefault();
          let birthdayChallenge = {};
          birthdayChallenge.title = document.querySelector('#title').value;
          birthdayChallenge.name = document.querySelector('#userName').value;
          birthdayChallenge.phoneNumber = document.querySelector('#number').value;
          birthdayChallenge.church = document.querySelector('#church1').value;
          birthdayChallenge.base64File = displayString();
          birthdayChallenge.fileType = displayType();
          console.log(birthdayChallenge);
         /*  $.ajax({
               url: 'https://first-react-app-bb5b8-default-rtdb.firebaseio.com/challengers.json',
               type: 'POST',
               dataType: 'json',
               cache: false,
               data: { 'sponsor': birthdayChallenge },
               success: function (data) {
                   if (data.status == 'Successful') {
                       document.getElementById('challenge1-alert').classList.remove('alert-danger');
                       document.getElementById('challenge1-alert').classList.add('alert-success');
                   } else {
                       document.getElementById('challenge1-alert').classList.remove('alert-success');
                       document.getElementById('challenge1-alert').classList.add('alert-danger');
      
                   }
                   document.getElementById('challenge1-alert').innerText = data.message;
                   clearBirthdayChallengeForm();
               },
      
           }); */

               fetch('https://first-react-app-bb5b8-default-rtdb.firebaseio.com/challengers.json', {
                   method: 'POST',
                   body: JSON.stringify(birthdayChallenge),
                   headers: {
                       'content-Type': 'application/json'
                   }
               }).then((data)=> {
                    if (!data.ok) {
                         throw Error(data.status);
                    }else{
                         document.getElementById('challenge1-alert').classList.remove('alert-danger');
                         document.getElementById('challenge1-alert').classList.add('alert-success');
                         document.getElementById('challenge1-alert').innerText = data.statusText;
                         clearBirthdayChallengeForm();
                    }
               })
               .catch((data)=>{
                    document.getElementById('challenge1-alert').classList.remove('alert-success');
                    document.getElementById('challenge1-alert').classList.add('alert-danger');
                    document.getElementById('challenge1-alert').innerText = data.statusText;
               });

               

           /* function addMeetupHandler(meetupData){
               
           }  */
          
     });
     dynamicCountryNumbers(challengeNumber);
     function clearBirthdayChallengeForm(){
          document.querySelector('#title').value = "";
          document.querySelector('#userName').value = "";
          document.querySelector('#church1').value = "";  
          document.querySelector('#uploads').value = "";
     }
     document.getElementById('uploads2').addEventListener('change', imageUploaded);
     $('#upload-btn2').click(function(e){
          e.preventDefault();
          let shoutOut = {};
          shoutOut.title = document.querySelector('#title2').value;
          shoutOut.name = document.querySelector('#userName2').value;
          shoutOut.comments = document.querySelector('#comments').value;
          shoutOut.church = document.querySelector('#church2').value;
          shoutOut.base64File = displayString();
          shoutOut.fileType = displayType();
          clearShoutOutForm();
          console.log(shoutOut);
     });
     function clearShoutOutForm(){
          document.querySelector('#title2').value = "";
          document.querySelector('#userName2').value = "";
          document.querySelector('#church1').value = "";
          document.querySelector('#comments').value = "";
          document.querySelector('#uploads2').value = "";
     }

     
     dynamicCountryNumbers(gifterNumber);
     
     /*const myButton = document.getElementById('giftBtn');
const someString = 'Data';

myButton.addEventListener('click', function () {
  console.log(this); // Expected Value: 'Data'
}.bind(someString)); */
     function phoneNumberLimit(){
          gifterNumber.addEventListener('keypress', keysFunc);
          gifterNumber.addEventListener('keydown', backSpaceFunc);
         
     }
     phoneNumberLimit();
     $('#giftBtn').click(function(e){
          e.preventDefault();
          let giftPastor = {};
          giftPastor.phone = document.querySelector('#plnumber').value;
          giftPastor.name = document.querySelector('#plname').value;
          giftPastor.email = document.querySelector('#plemail').value;
          giftPastor.amount = document.querySelector('#amount').value;
          giftPastor.currency = document.querySelector('#selectoption1').value;;
          clearGiftForm();
          //stringGen(8);
          // on submitting the form, we reset phoneCount and enable keydown events.
          phoneCount = 0; 
          gifterNumber.onkeydown = function(){
               return true;
          }
          console.log(giftPastor);
          /* function stringGen(len) {
               var text = "";
               if(giftPastor.name !== "" && giftPastor.amount !== "" ){
                    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678919654";
                    for (var i = 0; i < len; i++)
                    text += charset.charAt(Math.floor(Math.random() * charset.length));
                    document.getElementById('payCode').innerHTML = `your payment code is <b>${text}</b>`;
                    document.getElementById('bankDetails').removeAttribute('hidden');
                    return text;
               }else{
                    alert("kindly fill the form to get payment code and bank details ");
               }


          } */
          
          //console.log(stringGen(8));
          
          
     });


     function clearGiftForm(){
          document.querySelector('#plname').value = "";
          document.querySelector('#plnumber').value = "";
          document.querySelector('#plemail').value = "";
          document.querySelector('#amount').value = "";
          document.querySelector('#selectoption1').value = "";
          phoneNumberLimit();
     }

     $('#sponsorBtn').click(function(e){
          e.preventDefault();
          let sponsorChild = {};
          sponsorChild.phone = document.querySelector('#spon-number').value;
          sponsorChild.name = document.querySelector('#spon-name').value;
          sponsorChild.email = document.querySelector('#spon-mail').value;
          sponsorChild.amount = document.querySelector('#spon-amount').value;
          sponsorChild.currency = document.querySelector('#selectoption2').value;;
          clearSponsorForm();
          //stringGen(8);
          // on submitting the form, we reset phoneCount and enable keydown events.
          phoneCount = 0; 
          gifterNumber.onkeydown = function(){
               return true;
          }
          console.log(sponsorChild);
          /* function stringGen(len) {
               var text = "";
               if(sponsorChild.name !== "" && sponsorChild.amount !== "" ){
                    var charset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345678919654";
                    for (var i = 0; i < len; i++)
                    text += charset.charAt(Math.floor(Math.random() * charset.length));
                    document.getElementById('payCode2').innerHTML = `your payment code is <b>${text}</b>`;
                    document.getElementById('bankDetails2').removeAttribute('hidden');
                    return text;
               }else{
                    alert("kindly fill the form to get payment code and bank details ");
               }


          } */
          
          //console.log(stringGen(8));
          
          
     });

     let sponsorNumber = document.getElementById('spon-number');
     dynamicCountryNumbers(sponsorNumber);

     

     function clearSponsorForm(){
          document.querySelector('#spon-name').value = "";
          document.querySelector('#spon-number').value = "";
          document.querySelector('#spon-mail').value = "";
          document.querySelector('#spon-amount').value = "";
          document.querySelector('#selectoption2').value = "";
          phoneNumberLimit();
     }

});


$(window).on('load', function(e){
     let floatOffSet = $('.float-btn').offset().top;
     $(window).scroll(function(){
          let scroll = $(window).scrollTop();
          if(scroll > 20){
               $('.float-btn').css({
                    'display': 'block'
               });
          }
          else{
               $('.float-btn').css({
                    'display': 'none'
               });
          }
     });
});
function checked_box(checkBox){
     //let fullName =document.getElementById('userName').value;
     //let zone =document.getElementById('zone').value;
     //let group =document.getElementById('group').value;
     if(checkBox.checked){
          document.getElementById('upload-btn').disabled = false;
     }else{
          document.getElementById('upload-btn').disabled = true;
     }
    
}

