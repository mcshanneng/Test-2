// Image analyzer
const analyzer = ml5.featureExtractor('MobileNet', modelLoaded);
// regression
const classifier = analyzer.regression();
//Boolean to check if model is modelLoaded
let modLoad = false;
// When model is loaded
function modelLoaded() {
  classifier.addImage(moth1, 1) // Pic ex 1.1
  classifier.addImage(moth2, 2)
  classifier.addImage(lamp1, 8) // Pic ex 2.1
  classifier.addImage(lamp2, 8) // Pic ex 2.2
  console.log(modelLoaded)
  modLoad = true;
  //imageAdded();

}

//
let moth1;
let moth2;
let lamp1;
let lamp2;
let predictimg;
let trainBut;
let result;

function setup() {
  createCanvas(windowWidth, windowHeight)
  moth1 = createImg('mothdude.jpg')
  moth2 = createImg('mothdude2.jpg')
  lamp1 = createImg('lampman1.jpg')
  lamp2 = createImg('lampman2.jpg')
  predictimg = createImg('Canarythorn.jpg');

}

function draw() {
  if (modLoad == true) {
    trainBut = createButton("Train")
    trainBut.mousePressed(imageAdded)
    trainBut.position(100, 100)
  }


}


function imageAdded(loss) {
  console.log("Image added");
  classifier.train(function(lossValue) {
    //console.log("Loss is", lossValue);
    //classifier.train()
    //classifier.predict(predictimg)// thing to predict

    if (lossValue == null) {
      console.log('Training Complete');
      classifier.predict(predictimg);
      let result = classifier.predict(predictimg);
      console.log(result);
      text(result, 150, 100);
    } else {
      console.log(lossValue);
    }
  });
}
