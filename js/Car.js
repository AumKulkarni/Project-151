AFRAME.registerComponent("car-model",{
    schema:{
        modelRef:{
            type:"string",
            default:"../assests/car/scene.gltf"
        }
    },
    init:function(){
        this.el.setAttribute("gltf-model",this.data.modelRef);
        const pos={x:0,y:50,z:80}
        const rotation={x:0,y:-90,z:0}
        this.el.setAttribute("position",pos)
        this.el.setAttribute("rotation",rotation)
    }
})
