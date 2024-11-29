var tl=gsap.timeline({scrollTrigger:{
    trigger: ".two",
    start: "0% 95%",
    end:"50% 50%",
    scrub: true,
    // markers: true
}})
tl.to("#fanta",{
    top:"120%",
    left:"0%"
}, 'orange')
tl.to("#orange-cut",{
    top:"160%",
    left:"23%",
},'orange')
tl.to("#orange",{
    top:"170%",
    right:"6%",
    width:"15%"
},'orange')
tl.to("#leaf",{
    top:"110%",
    left:"80%",
    rotate:"250deg",
    width:"13%"
},'orange')
var tl2=gsap.timeline({scrollTrigger:{
    trigger: ".three",
    start: "0% 95%",
    end:"20% 50%",
    scrub: true,
    // markers: true
}})
tl2.from(".lemon1",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%",

},'ca')
tl2.from("#cocacola",{
    rotate:"-90deg",
    left:"-100%",
    top:"110%",

},'ca')
tl2.from(".lemon2",{
    rotate:"90deg",
    left:"40%",
    top:"110%",

},'ca')
tl2.from("#pepsi",{
    rotate:"90deg",
    left:"40%",
    top:"110%",

},'ca')
tl2.to("#fanta",{
    left:"35%",
    top: "210%",
    height:"62%",
    width: "30%"
},'ca')
tl2.to("#orange-cut",{
    left:"41%",
    top: "205%",
    width:"19%"
},'ca')