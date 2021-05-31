function TimeToWalk(...args) {

    let stepsNmbr = Number(args[0]);
    let stepsMetrPerHr = Number(args[1]);
    let studentSpeedKmH = Number(args[2]);
   
    let distanceMeters = stepsNmbr * stepsMetrPerHr;
    let speedMetersPerSec = studentSpeedKmH / 3.6;
    let time = distanceMeters / speedMetersPerSec;
    let rest = Math.floor(distanceMeters / 500);
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHr = Math.floor(time / 3600);
  
    console.log((timeHr < 10 ? '0':'') + timeHr + ":" + (timeMin <10 ? '0':'') + (timeMin + rest) + ":" + (timeSec<10 ? '0':'') + timeSec);
}
  

TimeToWalk(4000, 0.60, 5)
TimeToWalk(2564, 0.70, 5.5)