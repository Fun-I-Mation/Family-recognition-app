Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version: ', ml5.version);
classifier = ml5.imageClassifier('https://drive.google.com/file/d/1Kafh6Fs7jURHnE8VjwJKgCiau2CN1jBD/view?usp=sharing',modelLoaded);
