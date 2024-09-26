const car = {
 name:"beetle",
 type:"sedan",
 weight:840,
 color:"pink",
 start:function() {
      return "engine started";
   },
    drive:function() {
        return "car being driven now";
    },
    brake:function() {
        return "brake actioned";
    },
    toString:function() {
        return "Nome:"+this.name+","+"modelo:"+this.type+","+"cor:"+this.color;
    }
};

window.alert( car.drive() );
document.getElementById("hai:3");
window.alert( screen.width );

let text = "HELLO WORLD";
let char = text.charAt(0);

/**
 * sempre colocar ( objeto.metodo() ) ou ( objeto.propriedade ) ou ( objeto.parametro )*
 * 
 * */ 