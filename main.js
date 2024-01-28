function preload() {
    mustache = loadImage('mustache.png')
}
function setup() {
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO)
    video.hide()
    pose = ml5.poseNet(video, Loaded)
    pose.on("pose", getResult)
}
function getResult(r){
    if(r.length>0){
        //console.log(r);
        noseX = r[0].pose.nose.x
        noseY = r[0].pose.nose.y
        console.log(noseX,noseY)
    }
}
function Loaded(){
    console.log("loaded successfully")
}
function draw() {
    image(video,0,0,300,300)
    //fill("red")
    //stroke("red")
   //rect(noseX, noseY, 20)
   image(mustache,noseX,noseY,30,30);
}

function take_snapshot(){
save('filter.png')
}