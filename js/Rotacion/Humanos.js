AFRAME.registerComponent("controller", {
    init: function () {
        this.modelVisible = true;
        // track markerFound/markerLost
        // grab the model reference
        document.querySelector("[gltf-model]").addEventListener("model-loaded", evt => {
            this.mesh = evt.detail.model
        })
        // hammerjs input helper
        const hammertime = new Hammer(document.body);

        // scale
        // scale is tricky, because it resets
        var currentScale = 1;
        hammertime.get('pinch').set({ enable: true });
        hammertime.on("pinchstart", (ev) => {
            currentScale = this.mesh.scale.x;
        })
        hammertime.on("pinchmove", (ev) => {
            if (!this.modelVisible) return;
            this.mesh.scale.multiplyScalar(0).addScalar(ev.scale * currentScale);
        });

        // rotation
        // pan left/right for rotation
        this.isPanning = false;
        var xrot = false;
        hammertime.on("panleft", () => {
            if (!this.modelVisible) return;
            this.isPanning = true
            this.mesh.rotation.y -= 4 * Math.PI / 360;
        })

        hammertime.on("panright", () => {
            if (!this.modelVisible) return;
            this.isPanning = true
            this.mesh.rotation.y += 4 * Math.PI / 360;
        })

        hammertime.on("panup", () => {
            if (!this.modelVisible) return;
            xrot = true;
            this.mesh.rotation.x -= 4 * Math.PI / 360;
        })

        hammertime.on("pandown", () => {
            if (!this.modelVisible) return;
            xrot = true;
            this.mesh.rotation.x += 4 * Math.PI / 360;
        })


        hammertime.on("panend", () => this.isPanning = false, xrot = false)
        hammertime.on("pancancel", () => this.isPanning = false, xrot = false)

        hammertime.on("swipeleft", ({ velocity }) => {
            if (!this.modelVisible) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swiperight", ({ velocity }) => {
            if (!this.modelVisible) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipeup", ({ velocity }) => {
            if (!this.modelVisible) return;
            this.swipeVelocity = velocity
        })
        hammertime.on("swipedown", ({ velocity }) => {
            if (!this.modelVisible) return;
            this.swipeVelocity = velocity
        })
    },
    tick: function () {
        if (!(this.modelVisible && this.swipeVelocity && !this.isPanning)){
            return;
        }else{
            this.mesh.rotation.y += this.swipeVelocity * 4 * Math.PI / 360;
            //this.mesh.rotation.x += this.swipeVelocity * 4 * Math.PI / 360;
            this.swipeVelocity *= 0.93;
            if (Math.abs(this.swipeVelocity) <= 0.1) this.swipeVelocity = 0;
        }
        
        
    }
})