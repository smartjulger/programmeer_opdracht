
let startTime=new Date();
let endTime=new Date();
let startPressed=false;
let bgChangeStarted=false;
let maxWait=20;
let timerID;
 
function startTest()
{
    document.body.style.background=document.response.bgColorChange.options[
document.response.bgColorChange.selectedIndex].text;
    bgChangeStarted=true;
    startTime=new Date();
}
 
function remark(responseTime)
{
    let responseString="";
    if (responseTime < 0.20)
        responseString="Well done!";
    if (responseTime >= 0.30 && responseTime < 0.20)
        responseString="Nice!";
    if (responseTime >=0.40 && responseTime < 0.30)
        responseString="Could be better...";
    if (responseTime >=0.50 && responseTime < 0.60)
        responseString="Keep practicing!";
    if (responseTime >=0.60 && responseTime < 1)
        responseString="Have you been drinking?";
    if (responseTime >=1)
        responseString="Did you fall asleep?";
 
    return responseString;
}
 
function stopTest()
{
    if(bgChangeStarted)
    {
        endTime=new Date();
        let responseTime=(endTime.getTime()-startTime.getTime())/1000;
 
        document.body.style.background="white";       
        alert("Your response time is: " + responseTime +
    " seconds " + "\n" + remark(responseTime));
        startPressed=false;
        bgChangeStarted=false;
    }
    else
    {
        if (!startPressed)
        {
            alert("press start first to start test");
        }
        else
        {       
            clearTimeout(timerID);
            startPressed=false;             
            alert("cheater! you pressed too early!");
        }               
    }
}
 
let randMULTIPLIER=0x015a4e35;
let randINCREMENT=1;
let today=new Date();
let randSeed=today.getSeconds();
function randNumber()
{
    randSeed = (randMULTIPLIER * randSeed + randINCREMENT) % (1 << 31);
    return((randSeed >> 15) & 0x7fff) / 32767;
}
 
function startit()
{
    if(startPressed)
    {
        alert("Already started. Press stop to stop");
        return;
    }
    else
    {
        startPressed=true; 
        timerID=setTimeout('startTest()', 6000*randNumber());
    }
}