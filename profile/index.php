<?php
if(isset($_POST['submit'])) {
  $file = 'mail/mail.json';
  $file2 = file_get_contents($file);
  $json_decode = json_decode($file2, true);
  $array[] = array(
    'mail' => $_POST['mail']
    );
    $fi = file_put_contents($file, json_encode($array));
}


?>
<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="width=device-width">
    <meta name="theme-color" content="#fff">
        <script src="https://kit.fontawesome.com/fe9e46fd41.js" crossorigin="anonymous"></script>
    <title>Professional WEB DESIGN</title>
    <link rel="stylesheet" href="css/style.css" type="text/css" media="all" />
  </head>
  <body>
    <div id="list">
      <a href="https://www.facebook.com/sabbirannel2"><i class="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/sabbirahmed"><i class="fab fa-twitter"></i></a>
      <a href="https://instagram.com/sabbirmonaiyem"><i class="fab fa-instagram"></i></a>
      <a href="https://youtube.com/sabbirmonaiyem"><i class="fab fa-youtube"></i></a>
    </div>
    <div class="containear">
           <div class="images">
         <img src="images/logo1.png"></img>
       </div>
      <div class="animationText">
       <span>I'<span id="color">TZ</span> </span>
       <li>MONAIEM</li>
       </div>
     <div id="container">
      <div class="inputButton">
        <button>Click Me</button>
      </div>
      <div class="imag1">
        <img src="images/undraw_heatmap_uyye.svg"></img>
      </div>
      <div id="lecture1">
        <div id="txt1">
          <span id="txt3">Quote of the day</span>
                  <p>Hellow Guys, i am cute WEB DESIGNER if you are interested in my Design the  you can join us.</p>
          <span id="name">MONAIEM AHMED</span>
         </div>
         <div id="select1">
           <div id="logo2">
      <a href="https://www.facebook.com/sabbirannel2"><i class="fab fa-facebook-f"></i></a>
      <a href="https://twitter.com/sabbirahmed"><i class="fab fa-twitter"></i></a>
      <a href="https://Instagram.com/sabbirmonaiyem"><i class="fab fa-instagram"></i></a>
      <a href="https://youtube.com/sabbirmonaiyem"><i class="fab fa-youtube"></i></a>
      </div>
      <div id="select2">
           <button>Qoute</button>
         </div>
         </div>
      </div>
      <div id="images2">
        <img src="images/undraw_in_no_time_6igu.svg"></img>
      </div>
      <div id="imagess1">
       <i class="fa-solid fa-gamepad"></i>
       <div id="txtt1">
         <span id="txtttt">GAME BOSTER</span>
         <span id="txtt">Garena Free Fire game on of fevorate Game.</span>
       </div>
      </div>
      <div id="imagess1">
       <i class="fa-solid fa-chart-simple"></i>
       <div id="txtt1">
         <span id="txtttt">FACEBOOK MARKETING</span>
         <span id="txtt"> Facebook auto liker marketing plus promotion!.</span>
       </div>
      </div>
      <div id="imagess1">
       <i class="fa-solid fa-rocket"></i>
       <div id="txtt1">
         <span id="txtttt">DIGITAL MARKETING</span>
         <span id="txtt">Digital marketing is the component of marketing that uses the Internet and online based digital.</span>
       </div>
      </div>
      <div id="silent">
        <img src="images/undraw_watch_application_uhc9.svg"></img>
      </div>
      <div id="lecture2">
        <div id="txtTop">Silent Moment!</div>
        <span>Can you count how many times being silent saved your purpose?</span>
        <span id="ob">Silence is a great teacher because it opens your eyes and your mind to new and exciting things.</span>
        <span id="obb">Observe Everyone</span>
      </div>
      <form action="/" method="post">
      <div id="sendEmail">
        <div id="inputBox"> 
        <input type="text" placeholder="Your mail" name="mail" required=""></input>
        <button type="submit" name="submit">Send</button>
        </div>
      </div>
      </form>
      </div>
    </div>
    <div id="down">
     <span id="name">M<span id="color2">ON</span><span id="color3">AI</span><span id="color">EM</span></span>
     <div id="lastText">
       <span id="colorr1" class="cor">Kawser CRUSH</span>
       <span id="colorr2" class="cor">Rafsan DELLER</span>
       <span id="colorr3" class="cor">Shakib GEY</span>
       <span id="colorr4">Habib Akter</span>
     </div>
     <div id="copy">
     <span id="copyRight">Copyright sa</span>
     </div>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>