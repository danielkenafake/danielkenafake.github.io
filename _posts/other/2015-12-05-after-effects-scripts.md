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
    <textarea class="codebox" onClick="this.select();">
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
    
        <h2>Bounce Back</h2>
    <p>To change how bouncy the effect is, edit the e, g, and nMax values.</p>
    <textarea class="codebox" onClick="this.select();">
    e = .7;
    g = 5000;
    nMax = 9;

    n = 0;
    if (numKeys > 0){
      n = nearestKey(time).index;
      if (key(n).time > time) n--;
    }
    if (n > 0){
      t = time - key(n).time;
      v = -velocityAtTime(key(n).time - .001)*e;
      vl = length(v);
      if (value instanceof Array){
        vu = (vl > 0) ? normalize(v) : [0,0,0];
      }else{
        vu = (v < 0) ? -1 : 1;
      }
      tCur = 0;
      segDur = 2*vl/g;
      tNext = segDur;
      nb = 1; // number of bounces
      while (tNext < t && nb <= nMax){
        vl *= e;
        segDur *= e;
        tCur = tNext;
        tNext += segDur;
        nb++
      }
      if(nb <= nMax){
        delta = t - tCur;
        value +  vu*delta*(vl - g*delta/2);
      }else{
        value
      }
    }else
      value
    </textarea>
    
    <br><br>
    
    <h2>Parent Puppet joints</h2>
    <p>Place on the puppet joint you want attached to the parent object.<br>The joint should be parented first to a Null# object, which should then be parented to the parent. ie. legwarp point>null1>body</p>
    <textarea class="codebox" onClick="this.select();">
    N = thisComp.layer("Null 1");
    fromWorld(N.toWorld(N.anchorPoint));
    </textarea>
    
    <br><br>
    
    <h2>Wiggle one axis</h2>
    <p>Wiggle the position value on only one axis. This is 2d, if its 3d you will need 4 values.</p><br><p>Horizontal axis.</p>
    <textarea class="codebox" onClick="this.select();">
    w = wiggle(2,50);
    [w[0],value[1]]
    </textarea> <br><br> <p>Vertical axis:</p><textarea class="codebox" onClick="this.select();">
    w = wiggle(2,50);
    [value[0],w[1]]
    </textarea> 
    
    <br><br>
    
    <h2>Flash between top &amp; bottom images</h2>
    <p>Paste on top image's opacity property.</p>
    <textarea class="codebox" onClick="this.select();">
    cycle_time=.25;  // time (in seconds) of one on/off cycle

    if(time%cycle_time < cycle_time/2){
     100
    }else{
     0
    }
    </textarea>
    
    <br><br>
    
    


</div>

