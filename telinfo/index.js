      const logoList = document.getElementById('logoList');
      const menuList = document.getElementById('menuList');
      const inputToken = document.getElementById('token');
      const err = document.getElementById('err');
      
      //get button action telegram//
      const getBtn = document.getElementById('getBtn');
      const info = document.getElementById('info');
      const row = document.getElementById('row');
      const sendMessage = document.getElementById('sendMessage');
      const sentM = document.getElementById('sentM');
      const jsonDiv = document.getElementById('jsonDiv');
      
      
      // btn finish();//
      
     
      menuList.style.maxHeight = '0px';
      logoList.addEventListener('click', () => {
        if (menuList.style.maxHeight == '0px') {
          menuList.style.maxHeight = '130px';
          menuList.style.transition = '0.5s';
        } else {
          menuList.style.maxHeight = '0px';
      
        }
      })
      
      
      getBtn.addEventListener('click', () => {
      
        if (inputToken.value.length > 45) {
          
                    
        const url2 = `https://api.telegram.org/bot${inputToken.value}/getUpdates`;
         // FETCH 2 STARTED //
        fetch(url2)
        .then(res2 => res2.text())
        .then(data2 => showInfo2(data2));
        
        function showInfo2(data2) {
          jsonDiv.innerHTML = data2;
          const obj = JSON.parse(data2);
          if (obj.ok == false) {
            err.style.display = 'block';
            err.innerHTML = 'Error to get data!'
            err.style.background = 'red';
            // none //
            info.style.display = 'none';
            sendMessage.style.display = 'none';
          }
          
        }
          
          
          err.style.display = 'none';
          const url = `https://api.telegram.org/bot${inputToken.value}/getMe`;
          fetch(url)
        .then(res => res.text())
        .then(data => showInfo(data));
         
        function showInfo(data) {
            
          // fetch2//
          const obj = JSON.parse(data);
         document.getElementById('id').innerHTML = obj.result.id;
         document.getElementById('name').innerHTML = obj.result.first_name;
         document.getElementById('username').innerHTML = obj.result.username;
         document.getElementById('group').innerHTML = obj.result.can_join_groups;
         
         sendMessage.style.display = 'block';
         row.style.margin = '40px 0';
         err.style.display = 'block';
         err.innerHTML = 'Connected Successfully!';
         err.style.background = '#00bd1a';
          // display block none//
         info.style.display = 'block';
          // block //

        }
          
        } else {
          err.style.display = 'block';
          err.innerHTML = 'Invalid TOKEN. The token length should be 46.';
          err.style.background = 'red';
        }
      })
      /// ///////
      function send() {
        const chat_id = document.getElementById('chat_id').value;
        const text = document.getElementById('text').value;
        const url = `https://api.telegram.org/bot${inputToken.value}/sendMessage?text=${text}&chat_id=${chat_id}`;
        fetch(url)
        .then(res => res.text())
        .then(data => showInfo(data));
        
        function showInfo(data) {
          sentM.style.display = 'block';
          setTimeout(function() {
            sentM.style.display = 'none';
            jsonDiv.innerHTML = data;
          }, 2000);
        }
   }
   
    