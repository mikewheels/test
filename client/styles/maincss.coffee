maincss =  new CSSC

maincss
  .add 'body',
    position: "absolute"

  .add '#header',
    lineHeight: CSSC.px 50
    background: "#E91E63"
    fontSize: CSSC.pc 150
    paddingLeft: CSSC.px 60
    height: CSSC.px 50
    
  .add '#header i, #header span',
    color: CSSC.white

  .add '#headerIcon',
    color: CSSC.white
    fontSize: CSSC.pc 150

  .add '#footer',
    background: "black"
    height: CSSC.px 50
    lineHeight: CSSC.px 50
    
  .add '#footerIcon',
    color: CSSC.white
    fontSize: CSSC.pc 150

  .add '.padding',
    paddingLeft: CSSC.px 20
    paddingRight: CSSC.px 20
    
  .add '.page',
    marginLeft: CSSC.px 10
    marginRight: CSSC.px 10

  .add '.opac', opacity: 0.5

  .add '.active', color: CSSC.red
  
  .add '.logo',
    width: CSSC.px 81
    height: CSSC.px 43
    marginTop: CSSC.px 5
  
  .add '.panel',
    border: "1px solid #eee"
    paddingRight: CSSC.px 10
    paddingLeft: CSSC.px 0
    paddingTop: CSSC.px 0
    paddingBottom: CSSC.px 0
    marginLeft: CSSC.px 10
    marginRight: CSSC.px 10
    overflow: "auto"
    zoom: 1
    
  .add '.panel .media-body',
    padding: "5px 10px"
    width: "170px"
    float: "left"
    fontSize: CSSC.pc 90

  .add '.panel .media-left',
    #height: "75px"
    width: "75px"
    float: "left"

  .add '.panel .media-object',
    width: CSSC.px 75
    height: CSSC.px 75
    
  .add '.media-heading',
    padding: "0px"
    margin: "0px"
    lineHeight: CSSC.px 40
    
  .add '.pull-right',
    float: "right"
    
  .add '.month-panel',
    marginLeft: CSSC.px 10
    marginRight: CSSC.px 10
    
  .add '.month-panel .media-object',
    width: "100%"
    height: CSSC.px 350
    
  .add '.image-preview img',
    width: "100%"
    height: CSSC.px 350
    
  .add '.field:first-child',
    marginTop: CSSC.px 10
    
  .add '.field',
    marginBottom: CSSC.px 10
    paddingRight: "23px"
  
  .add '.field input',
    width: "100%"
    height: CSSC.px 30
    padding: "10px"
    
  .add '.btn',
    padding: "10px"
    width: "100%"
    background: "#E91E63"
    fontSize: CSSC.pc 120
    color: "white"
    height: CSSC.px 50
    border: "1px solid #eee"
    
  .add '.tags',
    padding: "0px"
    margin: "0px"
    lineHeight: CSSC.px 20
    color: "#808080"
    
  .add '#file-upload',
    width: CSSC.px 30
    fontSize: CSSC.px 40
    opacity: "0"
    position: "relative"
    top: "-30px"