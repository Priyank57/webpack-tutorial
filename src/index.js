import helloWorld from "./hello-world";
import HelloWorldButton from "./components/hello-world-button/hello-world-button";
import Heading from "./components/heading/heading";
import addImage from "./add-image";

helloWorld;

const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

const heading = new Heading();
heading.render();

addImage;

if (process.env.NODE_ENV == 'production'){
    console.log('Production Mode');
}else if (process.env.NODE_ENV == 'development'){
    console.log('Development Mode');
}
