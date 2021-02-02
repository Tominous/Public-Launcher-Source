//onLoad
function onLoad() {
    let ramdata = fs.readFileSync(getAppDataPath('.minecraft') + '/AeroClient-Ram.json');
    var ram = JSON.parse(ramdata);
    document.getElementById("ramslider").value = ram.ram;
    document.getElementById("ram-slider-value").innerHTML = document.getElementById("ramslider").value + " MB of 8192 MB Allocated"; // updates the text that shows what you've allocated
    document.querySelector('.version-button1').className += " selected";
    document.querySelector('.branch-button1').className += " selected";
    document.querySelector('.branch-button1').innerHTML = "✔️Stable (Default)";
    document.querySelector('.version-button1').innerHTML = "✔️1.7.10 (Default)";
    document.querySelector('.branch-button1').style.padding = "7px 26px";
    document.querySelector('.version-button1').style.padding = "7px 30px";
}
  
  //Ram
function onRamChange() {
    let ramdata = {"ram":"" + document.getElementById("ramslider").value + ""};
   
    let data = JSON.stringify(ramdata);
    fs.writeFileSync(getAppDataPath('.minecraft') + '/AeroClient-Ram.json', data);
}

function updateBranch1() {
  document.querySelector('.branch-button1').style.backgroundColor = " rgba(0, 255, 42, 0.816)";
  document.querySelector('.branch-button1').innerHTML = "✔️Stable (Default)";
  document.querySelector('.branch-button2').innerHTML = "Beta";
  document.querySelector('.branch-button3').innerHTML = "Dev";

  document.querySelector('.branch-button1').style.padding = "7px 26px";
  document.querySelector('.branch-button2').style.padding = "7px 74px";
  document.querySelector('.branch-button3').style.padding = "7px 76px";

  document.querySelector('.branch-button2').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
  document.querySelector('.branch-button3').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
}

function updateBranch2() {
  document.querySelector('.branch-button2').style.backgroundColor = " rgba(0, 255, 42, 0.816)";
  document.querySelector('.branch-button2').innerHTML = "✔️Beta";
  document.querySelector('.branch-button1').innerHTML = "Stable (Default)";
  document.querySelector('.branch-button3').innerHTML = "Dev";
  
  document.querySelector('.branch-button1').style.padding = "7px 36px";
  document.querySelector('.branch-button2').style.padding = "7px 63px";
  document.querySelector('.branch-button3').style.padding = "7px 76px";

  document.querySelector('.branch-button1').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
  document.querySelector('.branch-button3').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
}

function updateBranch3() {
  document.querySelector('.branch-button3').style.backgroundColor = " rgba(0, 255, 42, 0.816)";
  document.querySelector('.branch-button3').innerHTML = "✔️Dev";
  document.querySelector('.branch-button2').innerHTML = "Beta";
  document.querySelector('.branch-button1').innerHTML = "Stable (Default)";

  document.querySelector('.branch-button1').style.padding = "7px 36px";
  document.querySelector('.branch-button2').style.padding = "7px 73px";
  document.querySelector('.branch-button3').style.padding = "7px 65px";

  document.querySelector('.branch-button1').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
  document.querySelector('.branch-button2').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
}



function updateVersion1() {
  document.querySelector('.version-button1').style.backgroundColor = " rgba(0, 255, 42, 0.816)";
  document.querySelector('.version-button1').innerHTML = "✔️1.7.10 (Default)";
  document.querySelector('.version-button2').innerHTML = "1.8.9";
  document.querySelector('.version-button3').innerHTML = "1.16";
  document.querySelector('.launch-button').innerHTML = "Launch 1.7.10";

  document.querySelector('.version-button1').style.padding = "7px 30px";
  document.querySelector('.version-button2').style.padding = "7px 74px";
  document.querySelector('.version-button3').style.padding = "7px 76px";

  document.querySelector('.version-button2').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
  document.querySelector('.version-button3').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
}

function updateVersion2() {
  document.querySelector('.version-button2').style.backgroundColor = " rgba(0, 255, 42, 0.816)";
  document.querySelector('.version-button2').innerHTML = "✔️1.8.9";
  document.querySelector('.version-button1').innerHTML = "1.7.10 (Default)";
  document.querySelector('.version-button3').innerHTML = "1.16";
  document.querySelector('.launch-button').innerHTML = "Launch 1.8.9";

  document.querySelector('.version-button1').style.padding = "7px 40px";
  document.querySelector('.version-button2').style.padding = "7px 63px";
  document.querySelector('.version-button3').style.padding = "7px 76px";

  document.querySelector('.version-button1').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
  document.querySelector('.version-button3').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
}

function updateVersion3() {
  document.querySelector('.version-button3').style.backgroundColor = " rgba(0, 255, 42, 0.816)";
  document.querySelector('.version-button3').innerHTML = "✔️1.16";
  document.querySelector('.version-button2').innerHTML = "1.8.9";
  document.querySelector('.version-button1').innerHTML = "1.7.10 (Default)";
  document.querySelector('.launch-button').innerHTML = "Launch 1.16";

  document.querySelector('.version-button1').style.padding = "7px 40px";
  document.querySelector('.version-button2').style.padding = "7px 73px";
  document.querySelector('.version-button3').style.padding = "7px 65px";

  document.querySelector('.version-button1').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
  document.querySelector('.version-button2').style.backgroundColor = " rgba(0, 0, 0, 0.500)";
}