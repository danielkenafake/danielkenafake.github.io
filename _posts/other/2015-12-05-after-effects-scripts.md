---
layout: imgpost
title: "After Effects Scripts"
img: "/postimg/other/aescriptsS.jpg"
imgL: "/postimg/other/aescriptsL.jpg"
meta: "scripts that are useful for Adobe After Effects"
category: other
---

<div class="WideTextBox">
    <h2>Inertial Bounce</h2>
    <p>To change how bouncy the effect is, edit the amp, freq, and decay values.</p>
    <textarea onClick="this.select();">
    n = 0;
    if (numKeys > 0){
    n = nearestKey(time).index;
    if (key(n).time > time){
    n--;
    }
    }
    if (n == 0){
    t = 0;
    }else{
    t = time - key(n).time;
    }

    if (n > 0 && t < 1){
    v = velocityAtTime(key(n).time - thisComp.frameDuration/10);
    amp = .05;
    freq = 4.0;
    decay = 8.0;
    value + v*amp*Math.sin(freq*t*2*Math.PI)/Math.exp(decay*t);
    }else{
    value;
    }
    </textarea>
    
    <br><br>
    
    <h2>Parent Puppet joints</h2>
    <p>Place on the puppet joint you want attached to the parent object. The joint should be parented first to a Null# object, which should then be parented to the parent. ie. legwarp point>null1>body</p>
    <textarea onClick="this.select();">
    N = thisComp.layer("Null 1");
    fromWorld(N.toWorld(N.anchorPoint));
    </textarea>
    
    <br><br>
    
    <h2>Wiggle one axis</h2>
    <p class="largepara">Wiggle the position value on only one axis. this is 2d, if its 3d you will need 4 values.</p>
    <textarea onClick="this.select();">
    w = wiggle(2,50);
    [w[0],value[1]]
    </textarea> <br> <p> or for on the vertical axis:</p><textarea onClick="this.select();">
    w = wiggle(2,50);
    [value[0],w[1]]
    </textarea> 
    
    <br><br>
    
    


</div>

