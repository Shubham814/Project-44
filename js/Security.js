class Security {

    constructor(){

        // Code to create the input and button elements
        this.input1 = createInput("").attribute("placeholder","                Answer");
        this.input2 = createInput("").attribute("placeholder","                Answer");
        this.input3 = createInput("").attribute("placeholder","                Answer");


        this.btn1 = createButton("Check");
        this.btn2 = createButton("Check");
        this.btn3 = createButton("Check");


    }

    display(){


        //code to style buttons and inputs
        this.input1.position(100,80);
        this.input1.style("background","Pink");
        this.input2.position(700,180);
        this.input2.style("background","Pink");
        this.input3.position(100,280);
        this.input3.style("background","Pink");

        this.btn1.position(155,110);
        this.btn2.position(755,210);
        this.btn3.position(155,310);

        // Add code to make the buttons function as expected
      this.btn1.mousePressed(() => {
        if(system.authenticate(accessCode1,this.input1.value())){
            this.btn1.hide();
            this.input1.hide();
            score++
        }
      });
      this.btn2.mousePressed(() => {
        if(system.authenticate(accessCode2,this.input2.value())){
            this.btn2.hide();
            this.input2.hide();
            score++
        } 
    });
      this.btn3.mousePressed(() => {
        if(system.authenticate(accessCode3,this.input3.value())){
            this.btn3.hide();
            this.input3.hide();
            score++
        }
    });


    }
}