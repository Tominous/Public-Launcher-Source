function showHome() {
    document.querySelector('.home-page').style.visibility = 'visible';
    document.querySelector('.servers-page').style.visibility = 'hidden';
    document.querySelector('.settings-page').style.visibility = 'hidden';
    document.querySelector('.info-page').style.visibility = 'hidden';
  
    document.querySelector('.version-button1').style.display = "none";
    document.querySelector('.version-button2').style.display = "none";
    document.querySelector('.version-button3').style.display = "none";
    document.querySelector('.branch-button1').style.display = "none";
    document.querySelector('.branch-button2').style.display = "none";
    document.querySelector('.branch-button3').style.display = "none";
    document.querySelector('.launcher-log').style.display = "none";
    document.querySelector('.discord-button').style.display = "none";
    document.querySelector('.telegram-button').style.display = "none";
    document.querySelector('.website-button').style.display = "none";
    document.querySelector('.twitter-button').style.display = "none";
    document.querySelector('.client-log').style.display = "none";
  }
  
  function showServers() {
    document.querySelector('.home-page').style.visibility = 'hidden';
    document.querySelector('.servers-page').style.visibility = 'visible';
    document.querySelector('.settings-page').style.visibility = 'hidden';
    document.querySelector('.info-page').style.visibility = 'hidden';
  
    document.querySelector('.version-button1').style.display = "none";
    document.querySelector('.version-button2').style.display = "none";
    document.querySelector('.version-button3').style.display = "none";
    document.querySelector('.branch-button1').style.display = "none";
    document.querySelector('.branch-button2').style.display = "none";
    document.querySelector('.branch-button3').style.display = "none";
    document.querySelector('.launcher-log').style.display = "none";
    document.querySelector('.discord-button').style.display = "none";
    document.querySelector('.telegram-button').style.display = "none";
    document.querySelector('.website-button').style.display = "none";
    document.querySelector('.twitter-button').style.display = "none";
    document.querySelector('.client-log').style.display = "none";
  }
  
  function showSettings() {
    document.querySelector('.home-page').style.visibility = 'hidden';
    document.querySelector('.servers-page').style.visibility = 'hidden';
    document.querySelector('.settings-page').style.visibility = 'visible';
    document.querySelector('.info-page').style.visibility = 'hidden';
  
    document.querySelector('.version-button1').style.display = "block";
    document.querySelector('.version-button2').style.display = "block";
    document.querySelector('.version-button3').style.display = "block";
    document.querySelector('.branch-button1').style.display = "block";
    document.querySelector('.branch-button2').style.display = "block";
    document.querySelector('.branch-button3').style.display = "block";
    document.querySelector('.launcher-log').style.display = "block";
    document.querySelector('.client-log').style.display = "block";
    document.querySelector('.discord-button').style.display = "none";
    document.querySelector('.telegram-button').style.display = "none";
    document.querySelector('.website-button').style.display = "none";
    document.querySelector('.twitter-button').style.display = "none";
  }
  
  function showInfo() {
    document.querySelector('.home-page').style.visibility = 'hidden';
    document.querySelector('.servers-page').style.visibility = 'hidden';
    document.querySelector('.settings-page').style.visibility = 'hidden';
    document.querySelector('.info-page').style.visibility = 'visible';
  
    document.querySelector('.version-button1').style.display = "none";
    document.querySelector('.version-button2').style.display = "none";
    document.querySelector('.version-button3').style.display = "none";
    document.querySelector('.branch-button1').style.display = "none";
    document.querySelector('.branch-button2').style.display = "none";
    document.querySelector('.branch-button3').style.display = "none";
    document.querySelector('.launcher-log').style.display = "none";
    document.querySelector('.client-log').style.display = "none";
  
    document.querySelector('.discord-button').style.display = "block";
    document.querySelector('.telegram-button').style.display = "block";
    document.querySelector('.website-button').style.display = "block";
    document.querySelector('.twitter-button').style.display = "block";
  }